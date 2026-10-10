(()=>{var ig=Object.defineProperty;var xi=(n,t)=>{for(var e in t)ig(n,e,{get:t[e],enumerable:!0})};var Cd=0,_h=1,Rd=2;var lo=1,Id=2,sr=3,cs=0,In=1,Jn=2,Ti=0,rr=1,yh=2,vh=3,Mh=4,Pd=5;var ws=100,Ld=101,Dd=102,Nd=103,Ud=104,Fd=200,Od=201,Bd=202,zd=203,bh=204,Sh=205,kd=206,Vd=207,Hd=208,Gd=209,Wd=210,Xd=211,qd=212,Yd=213,$d=214,Ca=0,Ra=1,Ia=2,js=3,Pa=4,La=5,Da=6,Na=7,wh=0,Zd=1,Jd=2,oi=0,Ah=1,Th=2,Eh=3,Ch=4,Rh=5,Ih=6,Ph=7;var Lh=300,hs=301,As=302,hl=303,ul=304,co=306,Ua=1e3,Mi=1001,Fa=1002,dn=1003,Kd=1004;var ho=1005;var on=1006,fl=1007;var us=1008;var kn=1009,Dh=1010,Nh=1011,or=1012,dl=1013,ai=1014,li=1015,ci=1016,pl=1017,ml=1018,ar=1020,Uh=35902,Fh=35899,Oh=1021,Bh=1022,Kn=1023,bi=1026,fs=1027,zh=1028,gl=1029,ds=1030,xl=1031;var _l=1033,uo=33776,fo=33777,po=33778,mo=33779,yl=35840,vl=35841,Ml=35842,bl=35843,Sl=36196,wl=37492,Al=37496,Tl=37488,El=37489,go=37490,Cl=37491,Rl=37808,Il=37809,Pl=37810,Ll=37811,Dl=37812,Nl=37813,Ul=37814,Fl=37815,Ol=37816,Bl=37817,zl=37818,kl=37819,Vl=37820,Hl=37821,Gl=36492,Wl=36494,Xl=36495,ql=36283,Yl=36284,xo=36285,$l=36286;var Vr=2300,Oa=2301,Aa=2302,uh=2303,fh=2400,dh=2401,ph=2402;var jd=3200;var kh=0,Qd=1,ki="",rn="srgb",Hr="srgb-linear",Gr="linear",Fe="srgb";var Ta=7680;var tp=519,ep=512,np=513,ip=514,Zl=515,sp=516,rp=517,Jl=518,op=519,Vh=35044;var Hh="300 es",ri=2e3,Wr=2001;function sg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function rg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ap(){let n=Xr("canvas");return n.style.display="block",n}var ed={},Qs=null;function qr(...n){let t="THREE."+n.shift();Qs?Qs("log",t,...n):console.log(t,...n)}function lp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function oe(...n){n=lp(n);let t="THREE."+n.shift();if(Qs)Qs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function le(...n){n=lp(n);let t="THREE."+n.shift();if(Qs)Qs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function vs(...n){let t=n.join(" ");t in ed||(ed[t]=!0,oe(...n))}function cp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var hp={[Ca]:Ra,[Ia]:Da,[Pa]:Na,[js]:La,[Ra]:Ca,[Da]:Ia,[Na]:Pa,[La]:js},Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ea=Math.PI/180,Ba=180/Math.PI;function ts(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Se(n,t,e){return Math.max(t,Math.min(e,n))}function og(n,t){return(n%t+t)%t}function Vc(n,t,e){return(1-e)*n+e*t}function yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yh=class Yh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yh.prototype.isVector2=!0;var _e=Yh,wi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],m=i[s+2],d=i[s+3],p=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(d!==v||l!==p||c!==f||m!==_){let g=l*p+c*f+m*_+d*v;g<0&&(p=-p,f=-f,_=-_,v=-v,g=-g);let x=1-a;if(g<.9995){let E=Math.acos(g),L=Math.sin(E);x=Math.sin(x*E)/L,a=Math.sin(a*E)/L,l=l*x+p*a,c=c*x+f*a,m=m*x+_*a,d=d*x+v*a}else{l=l*x+p*a,c=c*x+f*a,m=m*x+_*a,d=d*x+v*a;let E=1/Math.sqrt(l*l+c*c+m*m+d*d);l*=E,c*=E,m*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=m,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],m=i[s+3],d=r[o],p=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+m*d+l*f-c*p,t[e+1]=l*_+m*p+c*d-a*f,t[e+2]=c*_+m*f+a*p-l*d,t[e+3]=m*_-a*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),m=a(s/2),d=a(r/2),p=l(i/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=p*m*d+c*f*_,this._y=c*f*d-p*m*_,this._z=c*m*_+p*f*d,this._w=c*m*d-p*f*_;break;case"YXZ":this._x=p*m*d+c*f*_,this._y=c*f*d-p*m*_,this._z=c*m*_-p*f*d,this._w=c*m*d+p*f*_;break;case"ZXY":this._x=p*m*d-c*f*_,this._y=c*f*d+p*m*_,this._z=c*m*_+p*f*d,this._w=c*m*d-p*f*_;break;case"ZYX":this._x=p*m*d-c*f*_,this._y=c*f*d+p*m*_,this._z=c*m*_-p*f*d,this._w=c*m*d+p*f*_;break;case"YZX":this._x=p*m*d+c*f*_,this._y=c*f*d+p*m*_,this._z=c*m*_-p*f*d,this._w=c*m*d-p*f*_;break;case"XZY":this._x=p*m*d-c*f*_,this._y=c*f*d-p*m*_,this._z=c*m*_+p*f*d,this._w=c*m*d+p*f*_;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],m=e[6],d=e[10],p=i+a+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(m-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(m-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+m)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+m)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,m=e._w;return this._x=i*m+o*a+s*c-r*l,this._y=s*m+o*l+r*a-i*c,this._z=r*m+o*c+i*l-s*a,this._w=o*m-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),m=Math.sin(c);l=Math.sin(l*c)/m,e=Math.sin(e*c)/m,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$h=class $h{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),m=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*m,this.y=i+l*m+a*c-r*d,this.z=s+l*d+r*m-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hc.copy(this).projectOnVector(t),this.sub(Hc)}reflect(t){return this.sub(Hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$h.prototype.isVector3=!0;var J=$h,Hc=new J,nd=new wi,Zh=class Zh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let m=this.elements;return m[0]=t,m[1]=s,m[2]=a,m[3]=e,m[4]=r,m[5]=l,m[6]=i,m[7]=o,m[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],m=i[4],d=i[7],p=i[2],f=i[5],_=i[8],v=s[0],g=s[3],x=s[6],E=s[1],L=s[4],T=s[7],S=s[2],C=s[5],N=s[8];return r[0]=o*v+a*E+l*S,r[3]=o*g+a*L+l*C,r[6]=o*x+a*T+l*N,r[1]=c*v+m*E+d*S,r[4]=c*g+m*L+d*C,r[7]=c*x+m*T+d*N,r[2]=p*v+f*E+_*S,r[5]=p*g+f*L+_*C,r[8]=p*x+f*T+_*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],m=t[8];return e*o*m-e*a*c-i*r*m+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],m=t[8],d=m*o-a*c,p=a*l-m*r,f=c*r-o*l,_=e*d+i*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*c-m*i)*v,t[2]=(a*i-s*o)*v,t[3]=p*v,t[4]=(m*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zh.prototype.isMatrix3=!0;var de=Zh,Gc=new de,id=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ag(){let n={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fe&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fe&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hr]:{primaries:t,whitePoint:i,transfer:Gr,toXYZ:id,fromXYZ:sd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:Fe,toXYZ:id,fromXYZ:sd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var ve=ag();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ns,za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ns===void 0&&(Ns=Xr("canvas")),Ns.width=t.width,Ns.height=t.height;let s=Ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ns}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zi(e[i]/255)*255):e[i]=zi(e[i]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lg=0,tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wc(s[o].image)):r.push(Wc(s[o]))}else r=Wc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?za.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var cg=0,Xc=new J,gn=class n extends Si{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Mi,s=Mi,r=on,o=us,a=Kn,l=kn,c=n.DEFAULT_ANISOTROPY,m=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=ts(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Lh;gn.DEFAULT_ANISOTROPY=1;var Jh=class Jh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],m=l[4],d=l[8],p=l[1],f=l[5],_=l[9],v=l[2],g=l[6],x=l[10];if(Math.abs(m-p)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(m+p)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,T=(f+1)/2,S=(x+1)/2,C=(m+p)/4,N=(d+v)/4,M=(_+g)/4;return L>T&&L>S?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=C/i,r=N/i):T>S?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=C/s,r=M/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=N/r,s=M/r),this.set(i,s,r,e),this}let E=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(p-m)*(p-m));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(d-v)/E,this.z=(p-m)/E,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jh.prototype.isVector4=!0;var Je=Jh,ka=class extends Si{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new gn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends ka{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Yr=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var cl=class cl{constructor(t,e,i,s,r,o,a,l,c,m,d,p,f,_,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,m,d,p,f,_,v,g)}set(t,e,i,s,r,o,a,l,c,m,d,p,f,_,v,g){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=m,x[10]=d,x[14]=p,x[3]=f,x[7]=_,x[11]=v,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),m=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*m,f=o*d,_=a*m,v=a*d;e[0]=l*m,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=p-v*c,e[9]=-a*l,e[2]=v-p*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*m,f=l*d,_=c*m,v=c*d;e[0]=p+v*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*m,e[9]=-a,e[2]=f*a-_,e[6]=v+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*m,f=l*d,_=c*m,v=c*d;e[0]=p-v*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*m,e[9]=v-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*m,f=o*d,_=a*m,v=a*d;e[0]=l*m,e[4]=_*c-f,e[8]=p*c+v,e[1]=l*d,e[5]=v*c+p,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,f=o*c,_=a*l,v=a*c;e[0]=l*m,e[4]=v-p*d,e[8]=_*d+f,e[1]=d,e[5]=o*m,e[9]=-a*m,e[2]=-c*m,e[6]=f*d+_,e[10]=p-v*d}else if(t.order==="XZY"){let p=o*l,f=o*c,_=a*l,v=a*c;e[0]=l*m,e[4]=-d,e[8]=c*m,e[1]=p*d+v,e[5]=o*m,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*m,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hg,t,ug)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Zi.crossVectors(i,On),Zi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Zi.crossVectors(i,On)),Zi.normalize(),Jo.crossVectors(On,Zi),s[0]=Zi.x,s[4]=Jo.x,s[8]=On.x,s[1]=Zi.y,s[5]=Jo.y,s[9]=On.y,s[2]=Zi.z,s[6]=Jo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],m=i[1],d=i[5],p=i[9],f=i[13],_=i[2],v=i[6],g=i[10],x=i[14],E=i[3],L=i[7],T=i[11],S=i[15],C=s[0],N=s[4],M=s[8],A=s[12],U=s[1],B=s[5],$=s[9],z=s[13],O=s[2],k=s[6],K=s[10],q=s[14],st=s[3],Z=s[7],nt=s[11],ot=s[15];return r[0]=o*C+a*U+l*O+c*st,r[4]=o*N+a*B+l*k+c*Z,r[8]=o*M+a*$+l*K+c*nt,r[12]=o*A+a*z+l*q+c*ot,r[1]=m*C+d*U+p*O+f*st,r[5]=m*N+d*B+p*k+f*Z,r[9]=m*M+d*$+p*K+f*nt,r[13]=m*A+d*z+p*q+f*ot,r[2]=_*C+v*U+g*O+x*st,r[6]=_*N+v*B+g*k+x*Z,r[10]=_*M+v*$+g*K+x*nt,r[14]=_*A+v*z+g*q+x*ot,r[3]=E*C+L*U+T*O+S*st,r[7]=E*N+L*B+T*k+S*Z,r[11]=E*M+L*$+T*K+S*nt,r[15]=E*A+L*z+T*q+S*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],m=t[2],d=t[6],p=t[10],f=t[14],_=t[3],v=t[7],g=t[11],x=t[15],E=l*f-c*p,L=a*f-c*d,T=a*p-l*d,S=o*f-c*m,C=o*p-l*m,N=o*d-a*m;return e*(v*E-g*L+x*T)-i*(_*E-g*S+x*C)+s*(_*L-v*S+x*N)-r*(_*T-v*C+g*N)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],m=t[10];return e*(o*m-a*c)-i*(r*m-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],m=t[8],d=t[9],p=t[10],f=t[11],_=t[12],v=t[13],g=t[14],x=t[15],E=e*a-i*o,L=e*l-s*o,T=e*c-r*o,S=i*l-s*a,C=i*c-r*a,N=s*c-r*l,M=m*v-d*_,A=m*g-p*_,U=m*x-f*_,B=d*g-p*v,$=d*x-f*v,z=p*x-f*g,O=E*z-L*$+T*B+S*U-C*A+N*M;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return t[0]=(a*z-l*$+c*B)*k,t[1]=(s*$-i*z-r*B)*k,t[2]=(v*N-g*C+x*S)*k,t[3]=(p*C-d*N-f*S)*k,t[4]=(l*U-o*z-c*A)*k,t[5]=(e*z-s*U+r*A)*k,t[6]=(g*T-_*N-x*L)*k,t[7]=(m*N-p*T+f*L)*k,t[8]=(o*$-a*U+c*M)*k,t[9]=(i*U-e*$-r*M)*k,t[10]=(_*C-v*T+x*E)*k,t[11]=(d*T-m*C-f*E)*k,t[12]=(a*A-o*B-l*M)*k,t[13]=(e*B-i*A+s*M)*k,t[14]=(v*L-_*S-g*E)*k,t[15]=(m*S-d*L+p*E)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,m=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,m*a+i,m*l-s*o,0,c*l-s*a,m*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,m=o+o,d=a+a,p=r*c,f=r*m,_=r*d,v=o*m,g=o*d,x=a*d,E=l*c,L=l*m,T=l*d,S=i.x,C=i.y,N=i.z;return s[0]=(1-(v+x))*S,s[1]=(f+T)*S,s[2]=(_-L)*S,s[3]=0,s[4]=(f-T)*C,s[5]=(1-(p+x))*C,s[6]=(g+E)*C,s[7]=0,s[8]=(_+L)*N,s[9]=(g-E)*N,s[10]=(1-(p+v))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Us.set(s[0],s[1],s[2]).length(),a=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);let c=1/o,m=1/a,d=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=m,ei.elements[5]*=m,ei.elements[6]*=m,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,e.setFromRotationMatrix(ei),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=ri,l=!1){let c=this.elements,m=2*r/(e-t),d=2*r/(i-s),p=(e+t)/(e-t),f=(i+s)/(i-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===ri)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Wr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=m,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ri,l=!1){let c=this.elements,m=2/(e-t),d=2/(i-s),p=-(e+t)/(e-t),f=-(i+s)/(i-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===ri)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Wr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=m,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};cl.prototype.isMatrix4=!0;var Ye=cl,Us=new J,ei=new Ye,hg=new J(0,0,0),ug=new J(1,1,1),Zi=new J,Jo=new J,On=new J,rd=new Ye,od=new wi,es=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],m=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-m,f),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return od.setFromEuler(this),this.setFromQuaternion(od,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};es.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fg=0,ad=new J,Fs=new wi,Ni=new Ye,Ko=new J,Dr=new J,dg=new J,pg=new wi,ld=new J(1,0,0),cd=new J(0,1,0),hd=new J(0,0,1),ud={type:"added"},mg={type:"removed"},Os={type:"childadded",child:null},qc={type:"childremoved",child:null},Rn=class n extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new J,e=new es,i=new wi,s=new J(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new de}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(ld,t)}rotateY(t){return this.rotateOnAxis(cd,t)}rotateZ(t){return this.rotateOnAxis(hd,t)}translateOnAxis(t,e){return ad.copy(t).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ld,t)}translateY(t){return this.translateOnAxis(cd,t)}translateZ(t){return this.translateOnAxis(hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ko.copy(t):Ko.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Dr,Ko,this.up):Ni.lookAt(Ko,Dr,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Ni),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ud),Os.child=t,this.dispatchEvent(Os),Os.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mg),qc.child=t,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ud),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,dg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,pg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,m=l.length;c<m;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),m=o(t.images),d=o(t.shapes),p=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),m.length>0&&(i.images=m),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let m=a[c];delete m.metadata,l.push(m)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rn.DEFAULT_UP=new J(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),x=this._getHandJoint(c,v);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let m=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=m.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},jo={h:0,s:0,l:0};function Yc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ce=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=i,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ve.workingColorSpace){if(t=og(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yc(o,r,t+1/3),this.g=Yc(o,r,t),this.b=Yc(o,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let i=up[t.toLowerCase()];return i!==void 0?this.setHex(i,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ve.workingToColorSpace(vn.copy(this),t),Math.round(Se(vn.r*255,0,255))*65536+Math.round(Se(vn.g*255,0,255))*256+Math.round(Se(vn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(vn.copy(this),e);let i=vn.r,s=vn.g,r=vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,m=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=m<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=m,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=rn){ve.workingToColorSpace(vn.copy(this),t);let e=vn.r,i=vn.g,s=vn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(jo);let i=Vc(Ji.h,jo.h,e),s=Vc(Ji.s,jo.s,e),r=Vc(Ji.l,jo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new ce;ce.NAMES=up;var Zr=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ni=new J,Ui=new J,$c=new J,Fi=new J,Bs=new J,zs=new J,fd=new J,Zc=new J,Jc=new J,Kc=new J,jc=new Je,Qc=new Je,th=new Je,vi=class n{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ni.subVectors(t,e),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ni.subVectors(s,e),Ui.subVectors(i,e),$c.subVectors(t,e);let o=ni.dot(ni),a=ni.dot(Ui),l=ni.dot($c),c=Ui.dot(Ui),m=Ui.dot($c),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(c*l-a*m)*p,_=(o*m-a*l)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return jc.setScalar(0),Qc.setScalar(0),th.setScalar(0),jc.fromBufferAttribute(t,e),Qc.fromBufferAttribute(t,i),th.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jc,r.x),o.addScaledVector(Qc,r.y),o.addScaledVector(th,r.z),o}static isFrontFacing(t,e,i,s){return ni.subVectors(i,e),Ui.subVectors(t,e),ni.cross(Ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ni.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Bs.subVectors(s,i),zs.subVectors(r,i),Zc.subVectors(t,i);let l=Bs.dot(Zc),c=zs.dot(Zc);if(l<=0&&c<=0)return e.copy(i);Jc.subVectors(t,s);let m=Bs.dot(Jc),d=zs.dot(Jc);if(m>=0&&d<=m)return e.copy(s);let p=l*d-m*c;if(p<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(i).addScaledVector(Bs,o);Kc.subVectors(t,r);let f=Bs.dot(Kc),_=zs.dot(Kc);if(_>=0&&f<=_)return e.copy(r);let v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(zs,a);let g=m*_-f*d;if(g<=0&&d-m>=0&&f-_>=0)return fd.subVectors(r,s),a=(d-m)/(d-m+(f-_)),e.copy(s).addScaledVector(fd,a);let x=1/(g+v+p);return o=v*x,a=p*x,e.copy(i).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ns=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),ta.subVectors(this.max,Nr),ks.subVectors(t.a,Nr),Vs.subVectors(t.b,Nr),Hs.subVectors(t.c,Nr),Ki.subVectors(Vs,ks),ji.subVectors(Hs,Vs),gs.subVectors(ks,Hs);let e=[0,-Ki.z,Ki.y,0,-ji.z,ji.y,0,-gs.z,gs.y,Ki.z,0,-Ki.x,ji.z,0,-ji.x,gs.z,0,-gs.x,-Ki.y,Ki.x,0,-ji.y,ji.x,0,-gs.y,gs.x,0];return!eh(e,ks,Vs,Hs,ta)||(e=[1,0,0,0,1,0,0,0,1],!eh(e,ks,Vs,Hs,ta))?!1:(ea.crossVectors(Ki,ji),e=[ea.x,ea.y,ea.z],eh(e,ks,Vs,Hs,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new J,new J,new J,new J,new J,new J,new J,new J],ii=new J,Qo=new ns,ks=new J,Vs=new J,Hs=new J,Ki=new J,ji=new J,gs=new J,Nr=new J,ta=new J,ea=new J,xs=new J;function eh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xs.fromArray(n,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),m=i.dot(xs);if(Math.max(-Math.max(l,c,m),Math.min(l,c,m))>a)return!1}return!0}var sn=new J,na=new _e,xg=0,je=class extends Si{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vh,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Jr=class extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Kr=class extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Cn=class extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}},_g=new ns,Ur=new J,nh=new J,is=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_g.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(nh)),this.expandByPoint(Ur.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yg=0,$n=new Ye,ih=new Rn,Gs=new J,Bn=new ns,Fr=new ns,fn=new J,cn=class n extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sg(t)?Kr:Jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new de().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Cn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Bn.min,Fr.min),Bn.expandByPoint(fn),fn.addVectors(Bn.max,Fr.max),Bn.expandByPoint(fn)):(Bn.expandByPoint(Fr.min),Bn.expandByPoint(Fr.max))}Bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(fn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,m=a.count;c<m;c++)fn.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),fn.add(Gs)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new je(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<i.count;M++)a[M]=new J,l[M]=new J;let c=new J,m=new J,d=new J,p=new _e,f=new _e,_=new _e,v=new J,g=new J;function x(M,A,U){c.fromBufferAttribute(i,M),m.fromBufferAttribute(i,A),d.fromBufferAttribute(i,U),p.fromBufferAttribute(r,M),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,U),m.sub(c),d.sub(c),f.sub(p),_.sub(p);let B=1/(f.x*_.y-_.x*f.y);isFinite(B)&&(v.copy(m).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(B),g.copy(d).multiplyScalar(f.x).addScaledVector(m,-_.x).multiplyScalar(B),a[M].add(v),a[A].add(v),a[U].add(v),l[M].add(g),l[A].add(g),l[U].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let M=0,A=E.length;M<A;++M){let U=E[M],B=U.start,$=U.count;for(let z=B,O=B+$;z<O;z+=3)x(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let L=new J,T=new J,S=new J,C=new J;function N(M){S.fromBufferAttribute(s,M),C.copy(S);let A=a[M];L.copy(A),L.sub(S.multiplyScalar(S.dot(A))).normalize(),T.crossVectors(C,A);let B=T.dot(l[M])<0?-1:1;o.setXYZW(M,L.x,L.y,L.z,B)}for(let M=0,A=E.length;M<A;++M){let U=E[M],B=U.start,$=U.count;for(let z=B,O=B+$;z<O;z+=3)N(t.getX(z+0)),N(t.getX(z+1)),N(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);let s=new J,r=new J,o=new J,a=new J,l=new J,c=new J,m=new J,d=new J;if(t)for(let p=0,f=t.count;p<f;p+=3){let _=t.getX(p+0),v=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),m.subVectors(o,r),d.subVectors(s,r),m.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(m),l.add(m),c.add(m),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),m.subVectors(o,r),d.subVectors(s,r),m.cross(d),i.setXYZ(p+0,m.x,m.y,m.z),i.setXYZ(p+1,m.x,m.y,m.z),i.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,l){let c=a.array,m=a.itemSize,d=a.normalized,p=new c.constructor(l.length*m),f=0,_=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*m;for(let x=0;x<m;x++)p[_++]=c[f++]}return new je(p,m,d)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let m=0,d=c.length;m<d;m++){let p=c[m],f=t(p,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],m=[];for(let d=0,p=c.length;d<p;d++){let f=c[d];m.push(f.toJSON(t.data))}m.length>0&&(s[l]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let m=s[c];this.setAttribute(c,m.clone(e))}let r=t.morphAttributes;for(let c in r){let m=[],d=r[c];for(let p=0,f=d.length;p<f;p++)m.push(d[p].clone(e));this.morphAttributes[c]=m}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,m=o.length;c<m;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ha=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new J,jr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sh=new J,vg=new J,Mg=new de,si=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=sh.subVectors(i,e).cross(vg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(sh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Mg.getNormalMatrix(t),s=this.coplanarPoint(sh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bg=0,Ai=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=rr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Sh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new si().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _e().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ss=class extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Or=new J,Xs=new J,qs=new J,Ys=new _e,Br=new _e,fp=new Ye,ia=new J,zr=new J,sa=new J,dd=new _e,rh=new _e,pd=new _e,Ms=class extends Rn{constructor(t=new ss){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new cn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ha(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new jr(i,3,0,!1)),Ws.setAttribute("uv",new jr(i,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),fp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ra(ia.set(-.5,-.5,0),qs,o,Xs,s,r),ra(zr.set(.5,-.5,0),qs,o,Xs,s,r),ra(sa.set(.5,.5,0),qs,o,Xs,s,r),dd.set(0,0),rh.set(1,0),pd.set(1,1);let a=t.ray.intersectTriangle(ia,zr,sa,!1,Or);if(a===null&&(ra(zr.set(-.5,.5,0),qs,o,Xs,s,r),rh.set(0,1),a=t.ray.intersectTriangle(ia,sa,zr,!1,Or),a===null))return;let l=t.ray.origin.distanceTo(Or);l<t.near||l>t.far||e.push({distance:l,point:Or.clone(),uv:vi.getInterpolation(Or,ia,zr,sa,dd,rh,pd,new _e),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ra(n,t,e,i,s,r){Ys.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Br.x=r*Ys.x-s*Ys.y,Br.y=s*Ys.x+r*Ys.y):Br.copy(Ys),n.copy(t),n.x+=Br.x,n.y+=Br.y,n.applyMatrix4(fp)}var Bi=new J,oh=new J,oa=new J,aa=new J,nr=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){oh.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(oh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(oa),a=aa.dot(this.direction),l=-aa.dot(oa),c=aa.lengthSq(),m=Math.abs(1-o*o),d,p,f,_;if(m>0)if(d=o*l-a,p=o*a-l,_=r*m,d>=0)if(p>=-_)if(p<=_){let v=1/m;d*=v,p*=v,f=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;else p<=-_?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=_?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oh).addScaledVector(oa,p),f}intersectSphere(t,e){if(t.radius<0)return null;Bi.subVectors(t.center,this.origin);let i=Bi.dot(this.direction),s=Bi.dot(Bi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,m=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),m>=0?(r=(t.min.y-p.y)*m,o=(t.max.y-p.y)*m):(r=(t.max.y-p.y)*m,o=(t.min.y-p.y)*m),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,m=a.z,d=t.x-o.x,p=t.y-o.y,f=t.z-o.z,_=e.x-o.x,v=e.y-o.y,g=e.z-o.z,x=i.x-o.x,E=i.y-o.y,L=i.z-o.z,T=Math.abs(l),S=Math.abs(c),C=Math.abs(m),N,M,A,U,B,$,z,O,k,K,q,st;if(T>=S&&T>=C?(A=l,$=d,k=_,st=x,l>=0?(N=c,M=m,U=p,B=f,z=v,O=g,K=E,q=L):(N=m,M=c,U=f,B=p,z=g,O=v,K=L,q=E)):S>=C?(A=c,$=p,k=v,st=E,c>=0?(N=m,M=l,U=f,B=d,z=g,O=_,K=L,q=x):(N=l,M=m,U=d,B=f,z=_,O=g,K=x,q=L)):(A=m,$=f,k=g,st=L,m>=0?(N=l,M=c,U=d,B=p,z=_,O=v,K=x,q=E):(N=c,M=l,U=p,B=d,z=v,O=_,K=E,q=x)),A===0)return null;let Z=N/A,nt=M/A,ot=1/A,Ct=U-Z*$,pt=B-nt*$,St=z-Z*k,gt=O-nt*k,yt=K-Z*st,W=q-nt*st,et=yt*gt-W*St,xt=Ct*W-pt*yt,zt=St*pt-gt*Ct;if(s){if(et<0||xt<0||zt<0)return null}else if((et<0||xt<0||zt<0)&&(et>0||xt>0||zt>0))return null;let mt=et+xt+zt;if(mt===0)return null;let at=ot*(et*$+xt*k+zt*st);return(mt>0?at<0:at>0)?null:this.at(at/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bn=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},md=new Ye,_s=new nr,la=new is,gd=new J,ca=new J,ha=new J,ua=new J,ah=new J,fa=new J,xd=new J,da=new J,Be=class extends Rn{constructor(t=new cn,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let m=a[l],d=r[l];m!==0&&(ah.fromBufferAttribute(d,t),o?fa.addScaledVector(ah,m):fa.addScaledVector(ah.sub(e),m))}e.add(fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(la.containsPoint(_s.origin)===!1&&(_s.intersectSphere(la,gd)===null||_s.origin.distanceToSquared(gd)>(t.far-t.near)**2))&&(md.copy(r).invert(),_s.copy(t.ray).applyMatrix4(md),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,m=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){let g=p[_],x=o[g.materialIndex],E=Math.max(g.start,f.start),L=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let T=E,S=L;T<S;T+=3){let C=a.getX(T),N=a.getX(T+1),M=a.getX(T+2);s=pa(this,x,t,i,c,m,d,C,N,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=_,x=v;g<x;g+=3){let E=a.getX(g),L=a.getX(g+1),T=a.getX(g+2);s=pa(this,o,t,i,c,m,d,E,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){let g=p[_],x=o[g.materialIndex],E=Math.max(g.start,f.start),L=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let T=E,S=L;T<S;T+=3){let C=T,N=T+1,M=T+2;s=pa(this,x,t,i,c,m,d,C,N,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=_,x=v;g<x;g+=3){let E=g,L=g+1,T=g+2;s=pa(this,o,t,i,c,m,d,E,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Sg(n,t,e,i,s,r,o,a){let l;if(t.side===In?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===cs,a),l===null)return null;da.copy(a),da.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(da);return c<e.near||c>e.far?null:{distance:c,point:da.clone(),object:n}}function pa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ca),n.getVertexPosition(l,ha),n.getVertexPosition(c,ua);let m=Sg(n,t,e,i,ca,ha,ua,xd);if(m){let d=new J;vi.getBarycoord(xd,ca,ha,ua,d),s&&(m.uv=vi.getInterpolatedAttribute(s,a,l,c,d,new _e)),r&&(m.uv1=vi.getInterpolatedAttribute(r,a,l,c,d,new _e)),o&&(m.normal=vi.getInterpolatedAttribute(o,a,l,c,d,new J),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new J,materialIndex:0};vi.getNormal(ca,ha,ua,p.normal),m.face=p,m.barycoord=d}return m}var Ga=class extends gn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=dn,m=dn,d,p){super(null,o,a,l,c,m,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ys=new is,wg=new _e(.5,.5),ma=new J,Qr=class{constructor(t=new si,e=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],m=r[4],d=r[5],p=r[6],f=r[7],_=r[8],v=r[9],g=r[10],x=r[11],E=r[12],L=r[13],T=r[14],S=r[15];if(s[0].setComponents(c-o,f-m,x-_,S-E).normalize(),s[1].setComponents(c+o,f+m,x+_,S+E).normalize(),s[2].setComponents(c+a,f+d,x+v,S+L).normalize(),s[3].setComponents(c-a,f-d,x-v,S-L).normalize(),i)s[4].setComponents(l,p,g,T).normalize(),s[5].setComponents(c-l,f-p,x-g,S-T).normalize();else if(s[4].setComponents(c-l,f-p,x-g,S-T).normalize(),e===ri)s[5].setComponents(c+l,f+p,x+g,S+T).normalize();else if(e===Wr)s[5].setComponents(l,p,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=wg.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bs=class extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Wa=new J,Xa=new J,_d=new Ye,kr=new nr,ga=new is,lh=new J,yd=new J,qa=class extends Rn{constructor(t=new cn,e=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Wa.fromBufferAttribute(e,s-1),Xa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Wa.distanceTo(Xa);t.setAttribute("lineDistance",new Cn(i,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;_d.copy(s).invert(),kr.copy(t.ray).applyMatrix4(_d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,m=i.index,p=i.attributes.position;if(m!==null){let f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=f,g=_-1;v<g;v+=c){let x=m.getX(v),E=m.getX(v+1),L=xa(this,t,kr,l,x,E,v);L&&e.push(L)}if(this.isLineLoop){let v=m.getX(_-1),g=m.getX(f),x=xa(this,t,kr,l,v,g,_-1);x&&e.push(x)}}else{let f=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=f,g=_-1;v<g;v+=c){let x=xa(this,t,kr,l,v,v+1,v);x&&e.push(x)}if(this.isLineLoop){let v=xa(this,t,kr,l,_-1,f,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xa(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Wa.fromBufferAttribute(a,s),Xa.fromBufferAttribute(a,r),e.distanceSqToSegment(Wa,Xa,lh,yd)>i)return;lh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(lh);if(!(c<t.near||c>t.far))return{distance:c,point:yd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var vd=new J,Md=new J,Ss=class extends qa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)vd.fromBufferAttribute(e,s),Md.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vd.distanceTo(Md);t.setAttribute("lineDistance",new Cn(i,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ir=class extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bd=new Ye,mh=new nr,_a=new is,ya=new J,to=class extends Rn{constructor(t=new cn,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;bd.copy(s).invert(),mh.copy(t.ray).applyMatrix4(bd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=p,v=f;_<v;_++){let g=c.getX(_);ya.fromBufferAttribute(d,g),Sd(ya,g,l,s,t,e,this)}}else{let p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=p,v=f;_<v;_++)ya.fromBufferAttribute(d,_),Sd(ya,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sd(n,t,e,i,s,r,o){let a=mh.distanceSqToPoint(n);if(a<e){let l=new J;mh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var eo=class extends gn{constructor(t=[],e=hs,i,s,r,o,a,l,c,m){super(t,e,i,s,r,o,a,l,c,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zn=class extends gn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var rs=class extends gn{constructor(t,e,i=ai,s,r,o,a=dn,l=dn,c,m=bi,d=1){if(m!==bi&&m!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,s,r,o,a,l,m,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ya=class extends rs{constructor(t,e=ai,i=hs,s,r,o=dn,a=dn,l,c=bi){let m={width:t,height:t,depth:1},d=[m,m,m,m,m,m];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},no=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},en=class n extends cn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],m=[],d=[],p=0,f=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(m,3)),this.setAttribute("uv",new Cn(d,2));function _(v,g,x,E,L,T,S,C,N,M,A){let U=T/N,B=S/M,$=T/2,z=S/2,O=C/2,k=N+1,K=M+1,q=0,st=0,Z=new J;for(let nt=0;nt<K;nt++){let ot=nt*B-z;for(let Ct=0;Ct<k;Ct++){let pt=Ct*U-$;Z[v]=pt*E,Z[g]=ot*L,Z[x]=O,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[g]=0,Z[x]=C>0?1:-1,m.push(Z.x,Z.y,Z.z),d.push(Ct/N),d.push(1-nt/M),q+=1}}for(let nt=0;nt<M;nt++)for(let ot=0;ot<N;ot++){let Ct=p+ot+k*nt,pt=p+ot+k*(nt+1),St=p+(ot+1)+k*(nt+1),gt=p+(ot+1)+k*nt;l.push(Ct,pt,gt),l.push(pt,St,gt),st+=6}a.addGroup(f,st,A),f+=st,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var va=new J,Ma=new J,ch=new J,ba=new vi,io=class extends cn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ea*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],m=["a","b","c"],d=new Array(3),p={},f=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:v,b:g,c:x}=ba;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),ba.getNormal(ch),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){let L=(E+1)%3,T=d[E],S=d[L],C=ba[m[E]],N=ba[m[L]],M=`${T}_${S}`,A=`${S}_${T}`;A in p&&p[A]?(ch.dot(p[A].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(N.x,N.y,N.z)),p[A]=null):M in p||(p[M]={index0:c[E],index1:c[L],normal:ch.clone()})}}for(let _ in p)if(p[_]){let{index0:v,index1:g}=p[_];va.fromBufferAttribute(a,v),Ma.fromBufferAttribute(a,g),f.push(va.x,va.y,va.z),f.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new Cn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var so=class n extends cn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,m=l+1,d=t/a,p=e/l,f=[],_=[],v=[],g=[];for(let x=0;x<m;x++){let E=x*p-o;for(let L=0;L<c;L++){let T=L*d-r;_.push(T,-E,0),v.push(0,0,1),g.push(L/a),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let E=0;E<a;E++){let L=E+c*x,T=E+c*(x+1),S=E+1+c*(x+1),C=E+1+c*x;f.push(L,T,C),f.push(T,S,C)}this.setIndex(f),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(v,3)),this.setAttribute("uv",new Cn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ts(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(wd(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(wd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function wn(n){let t={};for(let e=0;e<n.length;e++){let i=Ts(n[e]);for(let s in i)t[s]=i[s]}return t}function wd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ag(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Gh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var dp={clone:Ts,merge:wn},Tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ce().setHex(s.value);break;case"v2":this.uniforms[i].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new J().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m3":this.uniforms[i].value=new de().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$a=class extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Za=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ja=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $s(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function hh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var os=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends os{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dh:r=t,a=2*e-i;break;case ph:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dh:o=t,l=2*i-e;break;case ph:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,m=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*m,this._offsetNext=o*m}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,m=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(i-e)/(s-e),v=_*_,g=v*_,x=-p*g+2*p*v-p*_,E=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*_+1,L=(-1-f)*g+(1.5+f)*v+.5*_,T=f*g-f*v;for(let S=0;S!==a;++S)r[S]=x*o[m+S]+E*o[c+S]+L*o[l+S]+T*o[d+S];return r}},ja=class extends os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,m=(i-e)/(s-e),d=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*m;return r}},Qa=class extends os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tl=class extends os{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,m=this.inTangents,d=this.outTangents;if(!m||!d){let _=(i-e)/(s-e),v=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*v+o[l+g]*_;return r}let p=a*2,f=t-1;for(let _=0;_!==a;++_){let v=o[c+_],g=o[l+_],x=f*p+_*2,E=d[x],L=d[x+1],T=t*p+_*2,S=m[T],C=m[T+1],N=Rg(i,e,E,S,s);r[_]=pp(N,v,L,C,g)}return r}};function pp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Cg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Rg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=pp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Cg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),hh(t.settings)&&(i.settings={inTangents:$s(t.settings.inTangents,Array),outTangents:$s(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new tl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break;case uh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return oe("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Aa;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;hh(this.settings)&&(Ad(this.settings.inTangents,t),Ad(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){le("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){le("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&rg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){le("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Aa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],m=t[a+1];if(c!==m&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,p=d-i,f=d+i;for(let _=0;_!==i;++_){let v=e[d+_];if(v!==e[p+_]||v!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,p=o*i;for(let f=0;f!==i;++f)e[p+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,hh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ad(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Oa;var as=class extends zn{constructor(t,e,i){super(t,e,i)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Vr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};el.prototype.ValueTypeName="color";var nl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};nl.prototype.ValueTypeName="number";var il=class extends os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let m=c+a;c!==m;c+=4)wi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ro=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends zn{constructor(t,e,i){super(t,e,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Vr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};sl.prototype.ValueTypeName="vector";var rl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(m){a++,r===!1&&s.onStart!==void 0&&s.onStart(m,o,a),r=!0},this.itemEnd=function(m){o++,s.onProgress!==void 0&&s.onProgress(m,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),l?l(m):m},this.setURLModifier=function(m){return l=m,this},this.addHandler=function(m,d){return c.push(m,d),this},this.removeHandler=function(m){let d=c.indexOf(m);return d!==-1&&c.splice(d,2),this},this.getHandler=function(m){for(let d=0,p=c.length;d<p;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(m))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mp=new rl,ol=class{constructor(t){this.manager=t!==void 0?t:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=new J,wa=new wi,_i=new J,oo=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sa,wa,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,wa,_i.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Sa,wa,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,wa,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new J,Td=new _e,Ed=new _e,Mn=class extends oo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Td,Ed),e.subVectors(Ed,Td)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ao=class extends oo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=m*this.view.offsetY,l=a-m*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Zs=-90,Js=1,al=class extends Rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(Zs,Js,t,e);s.layers=this.layers,this.add(s);let r=new Mn(Zs,Js,t,e);r.layers=this.layers,this.add(r);let o=new Mn(Zs,Js,t,e);o.layers=this.layers,this.add(o);let a=new Mn(Zs,Js,t,e);a.layers=this.layers,this.add(a);let l=new Mn(Zs,Js,t,e);l.layers=this.layers,this.add(l);let c=new Mn(Zs,Js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,m]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(d,p,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ll=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wh="\\[\\]\\.:\\/",Ig=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",Pg="[^"+Wh.replace("\\.","")+"]",Lg=/((?:WC+[\/:])*)/.source.replace("WC",Xh),Dg=/(WCOD+)?/.source.replace("WCOD",Pg),Ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),Fg=new RegExp("^"+Lg+Dg+Ng+Ug+"$"),Og=["material","materials","bones","map"],gh=class{constructor(t,e,i){let s=i||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ig,"")}static parseTrackName(t){let e=Fg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Og.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===c){c=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=gh;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tb=new Float32Array(1);var Kh=class Kh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Kh.prototype.isMatrix2=!0;var xh=Kh;function qh(n,t,e,i){let s=Bg(i);switch(e){case Oh:return n*t;case zh:return n*t/s.components*s.byteLength;case gl:return n*t/s.components*s.byteLength;case ds:return n*t*2/s.components*s.byteLength;case xl:return n*t*2/s.components*s.byteLength;case Bh:return n*t*3/s.components*s.byteLength;case Kn:return n*t*4/s.components*s.byteLength;case _l:return n*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vl:case bl:return Math.max(n,16)*Math.max(t,8)/4;case yl:case Ml:return Math.max(n,8)*Math.max(t,8)/2;case Sl:case wl:case Tl:case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Al:case go:case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ql:case Yl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xo:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bg(n){switch(n){case kn:case Dh:return{byteLength:1,components:1};case or:case Nh:case ci:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case ai:case dl:case li:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Op(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function kg(n){let t=new WeakMap;function e(a,l){let c=a.array,m=a.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,m),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let m=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,m);else{d.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<d.length;f++){let _=d[p],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,_=d.length;f<_;f++){let v=d[f];n.bufferSubData(c,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let m=t.get(a);(!m||m.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
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
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
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
#endif`,Jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tx=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hx=`#define PI 3.141592653589793
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
} // validated`,ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fx=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
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
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bx=`PhysicalMaterial material;
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
#endif`,zx=`uniform sampler2D dfgLUT;
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
}`,kx=`
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
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
#endif`,s_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h_=`#ifdef USE_NORMALMAP
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
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,__=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T_=`float getShadowMask() {
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#ifdef USE_TRANSMISSION
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`#include <common>
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
}`,$_=`#if DEPTH_PACKING == 3200
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
}`,Z_=`#define DISTANCE
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
}`,J_=`#define DISTANCE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`uniform float scale;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#define LAMBERT
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
}`,sy=`#define LAMBERT
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
}`,ry=`#define MATCAP
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
}`,oy=`#define MATCAP
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
}`,ay=`#define NORMAL
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
}`,ly=`#define NORMAL
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
}`,cy=`#define PHONG
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
}`,hy=`#define PHONG
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
}`,uy=`#define STANDARD
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
}`,fy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,py=`#define TOON
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
}`,my=`uniform float size;
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
}`,gy=`uniform vec3 diffuse;
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
}`,xy=`#include <common>
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
}`,_y=`uniform vec3 color;
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
}`,yy=`uniform float rotation;
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
}`,vy=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Vg,alphahash_pars_fragment:Hg,alphamap_fragment:Gg,alphamap_pars_fragment:Wg,alphatest_fragment:Xg,alphatest_pars_fragment:qg,aomap_fragment:Yg,aomap_pars_fragment:$g,batching_pars_vertex:Zg,batching_vertex:Jg,begin_vertex:Kg,beginnormal_vertex:jg,bsdfs:Qg,iridescence_fragment:tx,bumpmap_pars_fragment:ex,clipping_planes_fragment:nx,clipping_planes_pars_fragment:ix,clipping_planes_pars_vertex:sx,clipping_planes_vertex:rx,color_fragment:ox,color_pars_fragment:ax,color_pars_vertex:lx,color_vertex:cx,common:hx,cube_uv_reflection_fragment:ux,defaultnormal_vertex:fx,displacementmap_pars_vertex:dx,displacementmap_vertex:px,emissivemap_fragment:mx,emissivemap_pars_fragment:gx,colorspace_fragment:xx,colorspace_pars_fragment:_x,envmap_fragment:yx,envmap_common_pars_fragment:vx,envmap_pars_fragment:Mx,envmap_pars_vertex:bx,envmap_physical_pars_fragment:Dx,envmap_vertex:Sx,fog_vertex:wx,fog_pars_vertex:Ax,fog_fragment:Tx,fog_pars_fragment:Ex,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Rx,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Px,lights_pars_begin:Lx,lights_toon_fragment:Nx,lights_toon_pars_fragment:Ux,lights_phong_fragment:Fx,lights_phong_pars_fragment:Ox,lights_physical_fragment:Bx,lights_physical_pars_fragment:zx,lights_fragment_begin:kx,lights_fragment_maps:Vx,lights_fragment_end:Hx,lightprobes_pars_fragment:Gx,logdepthbuf_fragment:Wx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:Yx,map_fragment:$x,map_pars_fragment:Zx,map_particle_fragment:Jx,map_particle_pars_fragment:Kx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Qx,morphinstance_vertex:t_,morphcolor_vertex:e_,morphnormal_vertex:n_,morphtarget_pars_vertex:i_,morphtarget_vertex:s_,normal_fragment_begin:r_,normal_fragment_maps:o_,normal_pars_fragment:a_,normal_pars_vertex:l_,normal_vertex:c_,normalmap_pars_fragment:h_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:f_,clearcoat_pars_fragment:d_,iridescence_pars_fragment:p_,opaque_fragment:m_,packing:g_,premultiplied_alpha_fragment:x_,project_vertex:__,dithering_fragment:y_,dithering_pars_fragment:v_,roughnessmap_fragment:M_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:w_,shadowmap_vertex:A_,shadowmask_pars_fragment:T_,skinbase_vertex:E_,skinning_pars_vertex:C_,skinning_vertex:R_,skinnormal_vertex:I_,specularmap_fragment:P_,specularmap_pars_fragment:L_,tonemapping_fragment:D_,tonemapping_pars_fragment:N_,transmission_fragment:U_,transmission_pars_fragment:F_,uv_pars_fragment:O_,uv_pars_vertex:B_,uv_vertex:z_,worldpos_vertex:k_,background_vert:V_,background_frag:H_,backgroundCube_vert:G_,backgroundCube_frag:W_,cube_vert:X_,cube_frag:q_,depth_vert:Y_,depth_frag:$_,distance_vert:Z_,distance_frag:J_,equirect_vert:K_,equirect_frag:j_,linedashed_vert:Q_,linedashed_frag:ty,meshbasic_vert:ey,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:sy,meshmatcap_vert:ry,meshmatcap_frag:oy,meshnormal_vert:ay,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:hy,meshphysical_vert:uy,meshphysical_frag:fy,meshtoon_vert:dy,meshtoon_frag:py,points_vert:my,points_frag:gy,shadow_vert:xy,shadow_frag:_y,sprite_vert:yy,sprite_frag:vy},Bt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ci={basic:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:wn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:wn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:wn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:wn([Bt.points,Bt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:wn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:wn([Bt.common,Bt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:wn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:wn([Bt.sprite,Bt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:wn([Bt.common,Bt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:wn([Bt.lights,Bt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ci.physical={uniforms:wn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Kl={r:0,b:0,g:0},My=new Ye,Bp=new de;Bp.set(-1,0,0,0,1,0,0,0,1);function by(n,t,e,i,s,r){let o=new ce(0),a=s===!0?0:1,l,c,m=null,d=0,p=null;function f(E){let L=E.isScene===!0?E.background:null;if(L&&L.isTexture){let T=E.backgroundBlurriness>0;L=t.get(L,T)}return L}function _(E){let L=!1,T=f(E);T===null?g(o,a):T&&T.isColor&&(g(T,1),L=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(E,L){let T=f(L);T&&(T.isCubeTexture||T.mapping===co)?(c===void 0&&(c=new Be(new en(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ts(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bp),c.material.toneMapped=ve.getTransfer(T.colorSpace)!==Fe,(m!==T||d!==T.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,m=T,d=T.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Be(new so(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ts(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=ve.getTransfer(T.colorSpace)!==Fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(m!==T||d!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,m=T,d=T.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,L){E.getRGB(Kl,Gh(n)),e.buffers.color.setClear(Kl.r,Kl.g,Kl.b,L,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,L=1){o.set(E),a=L,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,g(o,a)},render:_,addToRenderList:v,dispose:x}}function Sy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(B,$,z,O,k){let K=!1,q=d(B,O,z,$);r!==q&&(r=q,c(r.object)),K=f(B,O,z,k),K&&_(B,O,z,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,T(B,$,z,O),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function m(B){return n.deleteVertexArray(B)}function d(B,$,z,O){let k=O.wireframe===!0,K=i[$.id];K===void 0&&(K={},i[$.id]=K);let q=B.isInstancedMesh===!0?B.id:0,st=K[q];st===void 0&&(st={},K[q]=st);let Z=st[z.id];Z===void 0&&(Z={},st[z.id]=Z);let nt=Z[k];return nt===void 0&&(nt=p(l()),Z[k]=nt),nt}function p(B){let $=[],z=[],O=[];for(let k=0;k<e;k++)$[k]=0,z[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:z,attributeDivisors:O,object:B,attributes:{},index:null}}function f(B,$,z,O){let k=r.attributes,K=$.attributes,q=0,st=z.getAttributes();for(let Z in st)if(st[Z].location>=0){let ot=k[Z],Ct=K[Z];if(Ct===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(Ct=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(Ct=B.instanceColor)),ot===void 0||ot.attribute!==Ct||Ct&&ot.data!==Ct.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function _(B,$,z,O){let k={},K=$.attributes,q=0,st=z.getAttributes();for(let Z in st)if(st[Z].location>=0){let ot=K[Z];ot===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(ot=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(ot=B.instanceColor));let Ct={};Ct.attribute=ot,ot&&ot.data&&(Ct.data=ot.data),k[Z]=Ct,q++}r.attributes=k,r.attributesNum=q,r.index=O}function v(){let B=r.newAttributes;for(let $=0,z=B.length;$<z;$++)B[$]=0}function g(B){x(B,0)}function x(B,$){let z=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;z[B]=1,O[B]===0&&(n.enableVertexAttribArray(B),O[B]=1),k[B]!==$&&(n.vertexAttribDivisor(B,$),k[B]=$)}function E(){let B=r.newAttributes,$=r.enabledAttributes;for(let z=0,O=$.length;z<O;z++)$[z]!==B[z]&&(n.disableVertexAttribArray(z),$[z]=0)}function L(B,$,z,O,k,K,q){q===!0?n.vertexAttribIPointer(B,$,z,k,K):n.vertexAttribPointer(B,$,z,O,k,K)}function T(B,$,z,O){v();let k=O.attributes,K=z.getAttributes(),q=$.defaultAttributeValues;for(let st in K){let Z=K[st];if(Z.location>=0){let nt=k[st];if(nt===void 0&&(st==="instanceMatrix"&&B.instanceMatrix&&(nt=B.instanceMatrix),st==="instanceColor"&&B.instanceColor&&(nt=B.instanceColor)),nt!==void 0){let ot=nt.normalized,Ct=nt.itemSize,pt=t.get(nt);if(pt===void 0)continue;let St=pt.buffer,gt=pt.type,yt=pt.bytesPerElement,W=gt===n.INT||gt===n.UNSIGNED_INT||nt.gpuType===dl;if(nt.isInterleavedBufferAttribute){let et=nt.data,xt=et.stride,zt=nt.offset;if(et.isInstancedInterleavedBuffer){for(let mt=0;mt<Z.locationSize;mt++)x(Z.location+mt,et.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<Z.locationSize;mt++)g(Z.location+mt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let mt=0;mt<Z.locationSize;mt++)L(Z.location+mt,Ct/Z.locationSize,gt,ot,xt*yt,(zt+Ct/Z.locationSize*mt)*yt,W)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<Z.locationSize;et++)x(Z.location+et,nt.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<Z.locationSize;et++)g(Z.location+et);n.bindBuffer(n.ARRAY_BUFFER,St);for(let et=0;et<Z.locationSize;et++)L(Z.location+et,Ct/Z.locationSize,gt,ot,Ct*yt,Ct/Z.locationSize*et*yt,W)}}else if(q!==void 0){let ot=q[st];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(Z.location,ot);break;case 3:n.vertexAttrib3fv(Z.location,ot);break;case 4:n.vertexAttrib4fv(Z.location,ot);break;default:n.vertexAttrib1fv(Z.location,ot)}}}}E()}function S(){A();for(let B in i){let $=i[B];for(let z in $){let O=$[z];for(let k in O){let K=O[k];for(let q in K)m(K[q].object),delete K[q];delete O[k]}}delete i[B]}}function C(B){if(i[B.id]===void 0)return;let $=i[B.id];for(let z in $){let O=$[z];for(let k in O){let K=O[k];for(let q in K)m(K[q].object),delete K[q];delete O[k]}}delete i[B.id]}function N(B){for(let $ in i){let z=i[$];for(let O in z){let k=z[O];if(k[B.id]===void 0)continue;let K=k[B.id];for(let q in K)m(K[q].object),delete K[q];delete k[B.id]}}}function M(B){for(let $ in i){let z=i[$],O=B.isInstancedMesh===!0?B.id:0,k=z[O];if(k!==void 0){for(let K in k){let q=k[K];for(let st in q)m(q[st].object),delete q[st];delete k[K]}delete z[O],Object.keys(z).length===0&&delete i[$]}}}function A(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function wy(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,m){m!==0&&(n.drawArraysInstanced(i,l,c,m),e.update(c,i,m))}function a(l,c,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,m);let p=0;for(let f=0;f<m;f++)p+=c[f];e.update(p,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ay(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Kn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let M=N===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==kn&&N!==li&&!M&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",m=l(c);m!==c&&(oe("WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);let d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&p===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:E,maxVaryings:L,maxFragmentUniforms:T,maxSamples:S,samples:C}}function Ty(n){let t=this,e=null,i=0,s=!1,r=!1,o=new si,a=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||i!==0||s;return s=p,i=d.length,f},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=m(d,p,0)},this.setState=function(d,p,f){let _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,x=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?m(null):c();else{let E=r?0:i,L=E*4,T=x.clippingState||null;l.value=T,T=m(_,p,L,f);for(let S=0;S!==L;++S)T[S]=e[S];x.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(d,p,f,_){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,_!==!0||g===null){let x=f+v*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<x)&&(g=new Float32Array(x));for(let L=0,T=f;L!==v;++L,T+=4)o.copy(d[L]).applyMatrix4(E,a),o.normal.toArray(g,T),g[T+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var cr=4,Ey=6,Cy=20,Ry=256,_o=new ao,gp=new ce,jh=null,Qh=0,tu=0,eu=!1,Iy=new J,Es=new J,Ql=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Iy}=r;jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,Qh,tu),this._renderer.xr.enabled=eu,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:ci,format:Kn,colorSpace:Hr,depthBuffer:!1},s=xp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Py(r)),this._blurMaterial=Dy(r,t,e),this._ggxMaterial=Ly(r,t,e)}return s}_compileMaterial(t){let e=new Be(new cn,t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,i,s,r){let l=new Mn(90,1,e,i),c=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(gp),d.toneMapping=oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new en,new bn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,x=!1,E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,x=!0):(g.color.copy(gp),x=!0);for(let L=0;L<6;L++){let T=L%3;T===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+m[L],r.y,r.z)):T===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+m[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+m[L]));let S=this._cubeSize;lr(s,T*S,L>2?S:0,S,S),d.setRenderTarget(s),x&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=p,t.background=E}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===hs||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;lr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,_o)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-m*m),p=c*1.25,f=d*p,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-cr?i-_+cr:0),x=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,lr(r,g,x,3*v,2*v),s.setRenderTarget(r),s.render(a,_o),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,lr(t,g,x,3*v,2*v),s.setRenderTarget(t),s.render(a,_o)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let m=this._sizeLods[s],d=3*m*(s>this._lodMax-cr?s-this._lodMax+cr:0),p=4*(this._cubeSize-m);lr(e,d,p,3*m,2*m),o.setRenderTarget(e),o.render(l,_o)}};function Py(n){let t=[],e=[],i=n,s=n-cr+1+Ey;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,m=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,p=6,f=3,_=new Float32Array(f*p*d),v=new Float32Array(f*p*d);for(let x=0;x<d;x++){let E=x%3*2/3-1,L=x>2?0:-1,T=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];_.set(T,f*p*x);for(let S=0;S<p;S++){let C=m[S*2]*2-1,N=m[S*2+1]*2-1;x===0?Es.set(1,N,C):x===1?Es.set(-C,1,-N):x===2?Es.set(-C,N,1):x===3?Es.set(-1,N,-C):x===4?Es.set(-C,-1,N):Es.set(C,N,-1),Es.toArray(v,(x*p+S)*f)}}let g=new cn;g.setAttribute("position",new je(_,f)),g.setAttribute("outputDirection",new je(v,f)),e.push(new Be(g,null)),i>cr&&i--}return{lodMeshes:e,sizeLods:t}}function xp(n,t,e){let i=new Nn(n,t,e);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ly(n,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ry,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Dy(n,t,e){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:Cy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function _p(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function yp(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tc=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new eo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Ti});r.uniforms.tEquirect.value=e;let o=new Be(s,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=on),new al(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Ny(n){let t=new WeakMap,e=new WeakMap,i=null;function s(p,f=!1){return p==null?null:f?o(p):r(p)}function r(p){if(p&&p.isTexture){let f=p.mapping;if(f===hl||f===ul)if(t.has(p)){let _=t.get(p).texture;return a(_,p.mapping)}else{let _=p.image;if(_&&_.height>0){let v=new tc(_.height);return v.fromEquirectangularTexture(n,p),t.set(p,v),p.addEventListener("dispose",c),a(v.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){let f=p.mapping,_=f===hl||f===ul,v=f===hs||f===As;if(_||v){let g=e.get(p),x=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x)return i===null&&(i=new Ql(n)),g=_?i.fromEquirectangular(p,g):i.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,e.set(p,g),g.texture;if(g!==void 0)return g.texture;{let E=p.image;return _&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new Ql(n)),g=_?i.fromEquirectangular(p):i.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,e.set(p,g),p.addEventListener("dispose",m),g.texture):null}}}return p}function a(p,f){return f===hl?p.mapping=hs:f===ul&&(p.mapping=As),p}function l(p){let f=0,_=6;for(let v=0;v<_;v++)p[v]!==void 0&&f++;return f===_}function c(p){let f=p.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function m(p){let f=p.target;f.removeEventListener("dispose",m);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Uy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&vs("WebGLRenderer: "+i+" extension not supported."),s}}}function Fy(n,t,e,i){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(d){let p=d.attributes;for(let f in p)t.update(p[f],n.ARRAY_BUFFER)}function c(d){let p=[],f=d.index,_=d.attributes.position,v=0;if(_===void 0)return;if(f!==null){let E=f.array;v=f.version;for(let L=0,T=E.length;L<T;L+=3){let S=E[L+0],C=E[L+1],N=E[L+2];p.push(S,C,C,N,N,S)}}else{let E=_.array;v=_.version;for(let L=0,T=E.length/3-1;L<T;L+=3){let S=L+0,C=L+1,N=L+2;p.push(S,C,C,N,N,S)}}let g=new(_.count>=65535?Kr:Jr)(p,1);g.version=v;let x=r.get(d);x&&t.remove(x),r.set(d,g)}function m(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:m}}function Oy(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,f){f!==0&&(n.drawElementsInstanced(i,p,r,d*o,f),e.update(p,i,f))}function m(d,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=p[g];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=m}function By(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function zy(n,t,e){let i=new WeakMap,s=new Je;function r(o,a,l){let c=o.morphTargetInfluences,m=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=m!==void 0?m.length:0,p=i.get(a);if(p===void 0||p.count!==d){let A=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],L=0;f===!0&&(L=1),_===!0&&(L=2),v===!0&&(L=3);let T=a.attributes.position.count*L,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let C=new Float32Array(T*S*4*d),N=new Yr(C,T,S,d);N.type=li,N.needsUpdate=!0;let M=L*4;for(let U=0;U<d;U++){let B=g[U],$=x[U],z=E[U],O=T*S*4*U;for(let k=0;k<B.count;k++){let K=k*M;f===!0&&(s.fromBufferAttribute(B,k),C[O+K+0]=s.x,C[O+K+1]=s.y,C[O+K+2]=s.z,C[O+K+3]=0),_===!0&&(s.fromBufferAttribute($,k),C[O+K+4]=s.x,C[O+K+5]=s.y,C[O+K+6]=s.z,C[O+K+7]=0),v===!0&&(s.fromBufferAttribute(z,k),C[O+K+8]=s.x,C[O+K+9]=s.y,C[O+K+10]=s.z,C[O+K+11]=z.itemSize===4?s.w:1)}}p={count:d,texture:N,size:new _e(T,S)},i.set(a,p),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function ky(n,t,e,i,s){let r=new WeakMap;function o(c){let m=s.render.frame,d=c.geometry,p=t.get(c,d);if(r.get(p)!==m&&(t.update(p),r.set(p,m)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==m&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,m))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==m&&(f.update(),r.set(f,m))}return p}function a(){r=new WeakMap}function l(c){let m=c.target;m.removeEventListener("dispose",l),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:a}}var Vy={[Ah]:"LINEAR_TONE_MAPPING",[Th]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[Ch]:"ACES_FILMIC_TONE_MAPPING",[Ih]:"AGX_TONE_MAPPING",[Ph]:"NEUTRAL_TONE_MAPPING",[Rh]:"CUSTOM_TONE_MAPPING"};function Hy(n,t,e,i,s,r){let o=new Nn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new cn;c.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Cn([0,2,0,0,2,0],2));let m=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Be(c,m),p=new ao(-1,1,1,-1,0,1),f=null,_=null,v=!1,g,x=null,E=[],L=!1;this.setSize=function(T,S){o.setSize(T,S),a!==null&&a.setSize(T,S),l!==null&&l.setSize(T,S);for(let C=0;C<E.length;C++){let N=E[C];N.setSize&&N.setSize(T,S)}},this.setEffects=function(T){E=T,L=E.length>0&&E[0].isRenderPass===!0;let S=o.width,C=o.height;E.length>0&&a===null&&(a=new Nn(S,C,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(S,C,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<E.length;N++){let M=E[N];M.setSize&&M.setSize(S,C)}},this.begin=function(T,S){if(v||T.toneMapping===oi&&E.length===0)return!1;if(x=S,S!==null){let C=S.width,N=S.height;(o.width!==C||o.height!==N)&&this.setSize(C,N)}return L===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=oi,!0},this.hasRenderPass=function(){return L},this.end=function(T,S){T.toneMapping=g,v=!0;let C=o,N=a;for(let M=0;M<E.length;M++){let A=E[M];A.enabled!==!1&&(A.render(T,N,C,S),A.needsSwap!==!1&&(C=N,N=N===a?l:a))}if(f!==T.outputColorSpace||_!==T.toneMapping){f=T.outputColorSpace,_=T.toneMapping,m.defines={},ve.getTransfer(f)===Fe&&(m.defines.SRGB_TRANSFER="");let M=Vy[_];M&&(m.defines[M]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=C.texture,T.setRenderTarget(x),T.render(d,p),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),m.dispose()}}var zp=new gn,su=new rs(1,1),kp=new Yr,Vp=new Va,Hp=new eo,vp=[],Mp=[],bp=new Float32Array(16),Sp=new Float32Array(9),wp=new Float32Array(4);function ur(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=vp[s];if(r===void 0&&(r=new Float32Array(s),vp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function hn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function un(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ic(n,t){let e=Mp[t];e===void 0&&(e=new Int32Array(t),Mp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2fv(this.addr,t),un(e,t)}}function Xy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;n.uniform3fv(this.addr,t),un(e,t)}}function qy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4fv(this.addr,t),un(e,t)}}function Yy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;wp.set(i),n.uniformMatrix2fv(this.addr,!1,wp),un(e,i)}}function $y(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;Sp.set(i),n.uniformMatrix3fv(this.addr,!1,Sp),un(e,i)}}function Zy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;bp.set(i),n.uniformMatrix4fv(this.addr,!1,bp),un(e,i)}}function Jy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ky(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2iv(this.addr,t),un(e,t)}}function jy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3iv(this.addr,t),un(e,t)}}function Qy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4iv(this.addr,t),un(e,t)}}function tv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ev(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2uiv(this.addr,t),un(e,t)}}function nv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3uiv(this.addr,t),un(e,t)}}function iv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4uiv(this.addr,t),un(e,t)}}function sv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(su.compareFunction=e.isReversedDepthBuffer()?Jl:Zl,r=su):r=zp,e.setTexture2D(t||r,s)}function rv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Vp,s)}function ov(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hp,s)}function av(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||kp,s)}function lv(n){switch(n){case 5126:return Gy;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return $y;case 35676:return Zy;case 5124:case 35670:return Jy;case 35667:case 35671:return Ky;case 35668:case 35672:return jy;case 35669:case 35673:return Qy;case 5125:return tv;case 36294:return ev;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return av}}function cv(n,t){n.uniform1fv(this.addr,t)}function hv(n,t){let e=ur(t,this.size,2);n.uniform2fv(this.addr,e)}function uv(n,t){let e=ur(t,this.size,3);n.uniform3fv(this.addr,e)}function fv(n,t){let e=ur(t,this.size,4);n.uniform4fv(this.addr,e)}function dv(n,t){let e=ur(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function pv(n,t){let e=ur(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function mv(n,t){let e=ur(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gv(n,t){n.uniform1iv(this.addr,t)}function xv(n,t){n.uniform2iv(this.addr,t)}function _v(n,t){n.uniform3iv(this.addr,t)}function yv(n,t){n.uniform4iv(this.addr,t)}function vv(n,t){n.uniform1uiv(this.addr,t)}function Mv(n,t){n.uniform2uiv(this.addr,t)}function bv(n,t){n.uniform3uiv(this.addr,t)}function Sv(n,t){n.uniform4uiv(this.addr,t)}function wv(n,t,e){let i=this.cache,s=t.length,r=ic(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=su:o=zp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Av(n,t,e){let i=this.cache,s=t.length,r=ic(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vp,r[o])}function Tv(n,t,e){let i=this.cache,s=t.length,r=ic(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hp,r[o])}function Ev(n,t,e){let i=this.cache,s=t.length,r=ic(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kp,r[o])}function Cv(n){switch(n){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return fv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return vv;case 36294:return Mv;case 36295:return bv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Ev}}var ru=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lv(e.type)}},ou=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cv(e.type)}},au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},nu=/(\w+)(\])?(\[|\.)?/g;function Ap(n,t){n.seq.push(t),n.map[t.id]=t}function Rv(n,t,e){let i=n.name,s=i.length;for(nu.lastIndex=0;;){let r=nu.exec(i),o=nu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ap(e,c===void 0?new ru(a,n,t):new ou(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new au(a),Ap(e,d)),e=d}}}var hr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Rv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Tp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Iv=37297,Pv=0;function Lv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Ep=new de;function Dv(n){ve._getMatrix(Ep,ve.workingColorSpace,n);let t=`mat3( ${Ep.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(n)){case Gr:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Lv(n.getShaderSource(t),a)}else return r}function Nv(n,t){let e=Dv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Uv={[Ah]:"Linear",[Th]:"Reinhard",[Eh]:"Cineon",[Ch]:"ACESFilmic",[Ih]:"AgX",[Ph]:"Neutral",[Rh]:"Custom"};function Fv(n,t){let e=Uv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jl=new J;function Ov(){ve.getLuminanceCoefficients(jl);let n=jl.x.toFixed(4),t=jl.y.toFixed(4),e=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function zv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vo(n){return n!==""}function Rp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ip(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(n){return n.replace(Vv,Gv)}var Hv=new Map;function Gv(n,t){let e=ge[t];if(e===void 0){let i=Hv.get(t);if(i!==void 0)e=ge[i],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return lu(e)}var Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(n){return n.replace(Wv,Xv)}function Xv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var qv={[lo]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function Yv(n){return qv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $v={[hs]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function Zv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$v[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Jv={[As]:"ENVMAP_MODE_REFRACTION"};function Kv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Jv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jv={[wh]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function Qv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":jv[n.combine]||"ENVMAP_BLENDING_NONE"}function tM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function eM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Yv(e),c=Zv(e),m=Kv(e),d=Qv(e),p=tM(e),f=Bv(e),_=zv(r),v=s.createProgram(),g,x,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vo).join(`
`),g.length>0&&(g+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vo).join(`
`),x.length>0&&(x+=`
`)):(g=[Lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),x=[Lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+m:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?ge.tonemapping_pars_fragment:"",e.toneMapping!==oi?Fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,Nv("linearToOutputTexel",e.outputColorSpace),Ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=lu(o),o=Rp(o,e),o=Ip(o,e),a=lu(a),a=Rp(a,e),a=Ip(a,e),o=Pp(o),a=Pp(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let L=E+g+o,T=E+x+a,S=Tp(s,s.VERTEX_SHADER,L),C=Tp(s,s.FRAGMENT_SHADER,T);s.attachShader(v,S),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function N(B){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(S)||"",O=s.getShaderInfoLog(C)||"",k=$.trim(),K=z.trim(),q=O.trim(),st=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,C);else{let nt=Cp(s,S,"vertex"),ot=Cp(s,C,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+k+`
`+nt+`
`+ot)}else k!==""?oe("WebGLProgram: Program Info Log:",k):(K===""||q==="")&&(Z=!1);Z&&(B.diagnostics={runnable:st,programLog:k,vertexShader:{log:K,prefix:g},fragmentShader:{log:q,prefix:x}})}s.deleteShader(S),s.deleteShader(C),M=new hr(s,v),A=kv(s,v)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(v,Iv)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=C,this}var nM=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new hu(t),e.set(t,i)),i}},hu=class{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}};function iM(n){return n===ds||n===go||n===xo}function sM(n,t,e,i,s,r){let o=new $r,a=new cu,l=new Set,c=[],m=new Map,d=i.logarithmicDepthBuffer,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,A,U,B,$,z){let O=B.fog,k=$.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,q=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,st=t.get(M.envMap||K,q),Z=st&&st.mapping===co?st.image.height:null,nt=f[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&oe("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=ot!==void 0?ot.length:0,pt=0;k.morphAttributes.position!==void 0&&(pt=1),k.morphAttributes.normal!==void 0&&(pt=2),k.morphAttributes.color!==void 0&&(pt=3);let St,gt,yt,W;if(nt){let Oe=Ci[nt];St=Oe.vertexShader,gt=Oe.fragmentShader}else{St=M.vertexShader,gt=M.fragmentShader;let Oe=a.getVertexShaderStage(M),Te=a.getFragmentShaderStage(M);a.update(M,Oe,Te),yt=Oe.id,W=Te.id}let et=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),zt=$.isInstancedMesh===!0,mt=$.isBatchedMesh===!0,at=!!M.map,ae=!!M.matcap,Lt=!!st,Qt=!!M.aoMap,re=!!M.lightMap,Jt=!!M.bumpMap&&M.wireframe===!1,se=!!M.normalMap,Ve=!!M.displacementMap,Xe=!!M.emissiveMap,we=!!M.metalnessMap,Ie=!!M.roughnessMap,H=M.anisotropy>0,He=M.clearcoat>0,me=M.dispersion>0,F=M.retroreflectivity>0,y=M.iridescence>0,Y=M.sheen>0,tt=M.transmission>0,ct=H&&!!M.anisotropyMap,Tt=He&&!!M.clearcoatMap,Et=He&&!!M.clearcoatNormalMap,lt=He&&!!M.clearcoatRoughnessMap,dt=y&&!!M.iridescenceMap,Pt=y&&!!M.iridescenceThicknessMap,Kt=Y&&!!M.sheenColorMap,Nt=Y&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,te=!!M.specularColorMap,Yt=!!M.specularIntensityMap,ue=tt&&!!M.transmissionMap,G=tt&&!!M.thicknessMap,At=!!M.gradientMap,ut=!!M.alphaMap,It=M.alphaTest>0,Ut=!!M.alphaHash,_t=!!M.extensions,$t=oi;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&($t=n.toneMapping);let Wt={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:St,fragmentShader:gt,defines:M.defines,customVertexShaderID:yt,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:mt,batchingColor:mt&&$._colorsTexture!==null,instancing:zt,instancingColor:zt&&$.instanceColor!==null,instancingMorph:zt&&$.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:ae,envMap:Lt,envMapMode:Lt&&st.mapping,envMapCubeUVHeight:Z,aoMap:Qt,lightMap:re,bumpMap:Jt,normalMap:se,displacementMap:Ve,emissiveMap:Xe,normalMapObjectSpace:se&&M.normalMapType===Qd,normalMapTangentSpace:se&&M.normalMapType===kh,packedNormalMap:se&&M.normalMapType===kh&&iM(M.normalMap.format),metalnessMap:we,roughnessMap:Ie,anisotropy:H,anisotropyMap:ct,clearcoat:He,clearcoatMap:Tt,clearcoatNormalMap:Et,clearcoatRoughnessMap:lt,dispersion:me,retroreflection:F,iridescence:y,iridescenceMap:dt,iridescenceThicknessMap:Pt,sheen:Y,sheenColorMap:Kt,sheenRoughnessMap:Nt,specularMap:Rt,specularColorMap:te,specularIntensityMap:Yt,transmission:tt,transmissionMap:ue,thicknessMap:G,gradientMap:At,opaque:M.transparent===!1&&M.blending===rr&&M.alphaToCoverage===!1,alphaMap:ut,alphaTest:It,alphaHash:Ut,combine:M.combine,mapUv:at&&_(M.map.channel),aoMapUv:Qt&&_(M.aoMap.channel),lightMapUv:re&&_(M.lightMap.channel),bumpMapUv:Jt&&_(M.bumpMap.channel),normalMapUv:se&&_(M.normalMap.channel),displacementMapUv:Ve&&_(M.displacementMap.channel),emissiveMapUv:Xe&&_(M.emissiveMap.channel),metalnessMapUv:we&&_(M.metalnessMap.channel),roughnessMapUv:Ie&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:Tt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(M.sheenRoughnessMap.channel),specularMapUv:Rt&&_(M.specularMap.channel),specularColorMapUv:te&&_(M.specularColorMap.channel),specularIntensityMapUv:Yt&&_(M.specularIntensityMap.channel),transmissionMapUv:ue&&_(M.transmissionMap.channel),thicknessMapUv:G&&_(M.thicknessMap.channel),alphaMapUv:ut&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(se||H),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!k.attributes.uv&&(at||ut),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&se===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:pt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&ve.getTransfer(M.map.colorSpace)===Fe,decodeVideoTextureEmissive:Xe&&M.emissiveMap.isVideoTexture===!0&&ve.getTransfer(M.emissiveMap.colorSpace)===Fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jn,flipSided:M.side===In,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_t&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&M.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function g(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)A.push(U),A.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(x(A,M),E(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function E(M,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function L(M){let A=f[M.type],U;if(A){let B=Ci[A];U=dp.clone(B.uniforms)}else U=M.uniforms;return U}function T(M,A){let U=m.get(A);return U!==void 0?++U.usedTimes:(U=new eM(n,A,M,s),c.push(U),m.set(A,U)),U}function S(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),m.delete(M.cacheKey),M.destroy()}}function C(M){a.remove(M)}function N(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:L,acquireProgram:T,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:N}}function rM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function oM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Dp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Np(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(p){let f=0;return p.isInstancedMesh&&(f+=2),p.isSkinnedMesh&&(f+=1),f}function a(p,f,_,v,g,x){let E=n[t];return E===void 0?(E={id:p.id,object:p,geometry:f,material:_,materialVariant:o(p),groupOrder:v,renderOrder:p.renderOrder,z:g,group:x},n[t]=E):(E.id=p.id,E.object=p,E.geometry=f,E.material=_,E.materialVariant=o(p),E.groupOrder=v,E.renderOrder=p.renderOrder,E.z=g,E.group=x),t++,E}function l(p,f,_,v,g,x,E){E.reversedDepth===!0&&(g=-g);let L=a(p,f,_,v,g,x);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):e.push(L)}function c(p,f,_,v,g,x){let E=a(p,f,_,v,g,x);_.transmission>0?i.unshift(E):_.transparent===!0?s.unshift(E):e.unshift(E)}function m(p,f){e.length>1&&e.sort(p||oM),i.length>1&&i.sort(f||Dp),s.length>1&&s.sort(f||Dp)}function d(){for(let p=t,f=n.length;p<f;p++){let _=n[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:m}}function aM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Np,n.set(i,[o])):s>=r.length?(o=new Np,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function lM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new ce};break;case"SpotLight":e={position:new J,direction:new J,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function cM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var hM=0;function uM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fM(n){let t=new lM,e=cM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);let s=new J,r=new Ye,o=new Ye;function a(c){let m=0,d=0,p=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let f=0,_=0,v=0,g=0,x=0,E=0,L=0,T=0,S=0,C=0,N=0,M=0,A=0,U=0;c.sort(uM);for(let $=0,z=c.length;$<z;$++){let O=c[$],k=O.color,K=O.intensity,q=O.distance,st=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ds?st=O.shadow.map.texture:st=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)m+=k.r*K,d+=k.g*K,p+=k.b*K;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(O.sh.coefficients[Z],K);U++}else if(O.isSunLight){let Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[_]=ot,i.sunShadowMap[_]=st;let Ct=nt.getViewportCount();for(let pt=0;pt<Ct;pt++)i.sunShadowMatrix[v+pt]=nt.getMatrix(pt),i.sunShadowCascade[v+pt]=nt._cascadeData[pt];v+=Ct,_++}i.sun[f]=Z,f++}else if(O.isDirectionalLight){let Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,i.directionalShadow[g]=ot,i.directionalShadowMap[g]=st,i.directionalShadowMatrix[g]=O.shadow.matrix,S++}i.directional[g]=Z,g++}else if(O.isSpotLight){let Z=t.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(k).multiplyScalar(K),Z.distance=q,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,i.spot[E]=Z;let nt=O.shadow;if(O.map&&(i.spotLightMap[M]=O.map,M++,nt.updateMatrices(O),O.castShadow&&A++),i.spotLightMatrix[E]=nt.matrix,O.castShadow){let ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,i.spotShadow[E]=ot,i.spotShadowMap[E]=st,N++}E++}else if(O.isRectAreaLight){let Z=t.get(O);Z.color.copy(k).multiplyScalar(K),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),i.rectArea[L]=Z,L++}else if(O.isPointLight){let Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,ot.shadowCameraNear=nt.camera.near,ot.shadowCameraFar=nt.camera.far,i.pointShadow[x]=ot,i.pointShadowMap[x]=st,i.pointShadowMatrix[x]=O.shadow.matrix,C++}i.point[x]=Z,x++}else if(O.isHemisphereLight){let Z=t.get(O);Z.skyColor.copy(O.color).multiplyScalar(K),Z.groundColor.copy(O.groundColor).multiplyScalar(K),i.hemi[T]=Z,T++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Bt.LTC_FLOAT_1,i.rectAreaLTC2=Bt.LTC_FLOAT_2):(i.rectAreaLTC1=Bt.LTC_HALF_1,i.rectAreaLTC2=Bt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=d,i.ambient[2]=p;let B=i.hash;(B.sunLength!==f||B.directionalLength!==g||B.pointLength!==x||B.spotLength!==E||B.rectAreaLength!==L||B.hemiLength!==T||B.numSunShadows!==_||B.numDirectionalShadows!==S||B.numPointShadows!==C||B.numSpotShadows!==N||B.numSpotMaps!==M||B.numLightProbes!==U)&&(i.sun.length=f,i.directional.length=g,i.spot.length=E,i.rectArea.length=L,i.point.length=x,i.hemi.length=T,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=U,B.sunLength=f,B.directionalLength=g,B.pointLength=x,B.spotLength=E,B.rectAreaLength=L,B.hemiLength=T,B.numSunShadows=_,B.numDirectionalShadows=S,B.numPointShadows=C,B.numSpotShadows=N,B.numSpotMaps=M,B.numLightProbes=U,i.version=hM++)}function l(c,m){let d=0,p=0,f=0,_=0,v=0,g=0,x=m.matrixWorldInverse;for(let E=0,L=c.length;E<L;E++){let T=c[E];if(T.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(x),d++}else if(T.isDirectionalLight){let S=i.directional[p];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),p++}else if(T.isSpotLight){let S=i.spot[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),_++}else if(T.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),o.identity(),r.copy(T.matrixWorld),r.premultiply(x),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),f++}else if(T.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(x),g++}}}return{setup:a,setupView:l,state:i}}function Up(n){let t=new fM(n),e=[],i=[],s=[];function r(p){d.camera=p,e.length=0,i.length=0,s.length=0}function o(p){e.push(p)}function a(p){i.push(p)}function l(p){s.push(p)}function c(){t.setup(e)}function m(p){t.setupView(e,p)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:m,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function dM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Up(n),t.set(s,[a])):r>=o.length?(a=new Up(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
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
}`,gM=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],xM=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Fp=new Ye,yo=new J,iu=new J;function _M(n,t,e){let i=new Qr,s=new _e,r=new _e,o=new Je,a=new Za,l=new Ja,c={},m=e.maxTextureSize,d={[cs]:In,[In]:cs,[Jn]:Jn},p=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let _=new cn;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Be(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo;let x=this.type;this.render=function(C,N,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===Id&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lo);let A=n.getRenderTarget(),U=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Ti),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let z=x!==this.type;z&&N.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(k=>k.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,k=C.length;O<k;O++){let K=C[O],q=K.shadow;if(q===void 0){oe("WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let st=q.getFrameExtents();s.multiply(st),r.copy(q.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/st.x),s.x=r.x*st.x,q.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/st.y),s.y=r.y*st.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===sr){if(K.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Nn(s.x,s.y,{format:ds,type:ci,minFilter:on,magFilter:on,generateMipmaps:!1}),q.map.texture.name=K.name+".shadowMap",q.map.depthTexture=new rs(s.x,s.y,li),q.map.depthTexture.name=K.name+".shadowMapDepth",q.map.depthTexture.format=bi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=dn,q.map.depthTexture.magFilter=dn}else K.isPointLight?(q.map=new tc(s.x),q.map.depthTexture=new Ya(s.x,ai)):(q.map=new Nn(s.x,s.y),q.map.depthTexture=new rs(s.x,s.y,ai)),q.map.depthTexture.name=K.name+".shadowMap",q.map.depthTexture.format=bi,this.type===lo?(q.map.depthTexture.compareFunction=Z?Jl:Zl,q.map.depthTexture.minFilter=on,q.map.depthTexture.magFilter=on):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=dn,q.map.depthTexture.magFilter=dn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let nt=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();K.isPointLight!==!0&&q.updateMatrices(K,M);for(let ot=0;ot<nt;ot++){let Ct=q.getCamera(ot);if(K.isPointLight){let pt=q.camera,St=q.matrix,gt=K.distance||pt.far;gt!==pt.far&&(pt.far=gt,pt.updateProjectionMatrix()),yo.setFromMatrixPosition(K.matrixWorld),pt.position.copy(yo),iu.copy(pt.position),iu.add(gM[ot]),pt.up.copy(xM[ot]),pt.lookAt(iu),pt.updateMatrixWorld(),St.makeTranslation(-yo.x,-yo.y,-yo.z),Fp.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Fp,pt.coordinateSystem,pt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,ot),n.clear();else{ot===0&&(n.setRenderTarget(q.map),n.clear());let pt=q.getViewport(ot);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),$.viewport(o)}i=q.getFrustum(ot),T(N,M,Ct,K,this.type)}q.isPointLightShadow!==!0&&this.type===sr&&E(q,M),q.needsUpdate=!1}x=this.type,g.needsUpdate=!1,n.setRenderTarget(A,U,B)};function E(C,N){let M=t.update(v);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null?C.mapPass=new Nn(s.x,s.y,{format:ds,type:ci}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),p.uniforms.shadow_pass.value=C.map.depthTexture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,M,p,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,M,f,v,null)}function L(C,N,M,A){let U=null,B=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)U=B;else if(U=M.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let $=U.uuid,z=N.uuid,O=c[$];O===void 0&&(O={},c[$]=O);let k=O[z];k===void 0&&(k=U.clone(),O[z]=k,N.addEventListener("dispose",S)),U=k}if(U.visible=N.visible,U.wireframe=N.wireframe,A===sr?U.side=N.shadowSide!==null?N.shadowSide:N.side:U.side=N.shadowSide!==null?N.shadowSide:d[N.side],U.alphaMap=N.alphaMap,U.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,U.map=N.map,U.clipShadows=N.clipShadows,U.clippingPlanes=N.clippingPlanes,U.clipIntersection=N.clipIntersection,U.displacementMap=N.displacementMap,U.displacementScale=N.displacementScale,U.displacementBias=N.displacementBias,U.wireframeLinewidth=N.wireframeLinewidth,U.linewidth=N.linewidth,M.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let $=n.properties.get(U);$.light=M}return U}function T(C,N,M,A,U){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===sr)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);let z=t.update(C),O=C.material;if(Array.isArray(O)){let k=z.groups;for(let K=0,q=k.length;K<q;K++){let st=k[K],Z=O[st.materialIndex];if(Z&&Z.visible){let nt=L(C,Z,A,U);C.onBeforeShadow(n,C,N,M,z,nt,st),n.renderBufferDirect(M,null,z,nt,C,st),C.onAfterShadow(n,C,N,M,z,nt,st)}}}else if(O.visible){let k=L(C,O,A,U);C.onBeforeShadow(n,C,N,M,z,k,null),n.renderBufferDirect(M,null,z,k,C,null),C.onAfterShadow(n,C,N,M,z,k,null)}}let $=C.children;for(let z=0,O=$.length;z<O;z++)T($[z],N,M,A,U)}function S(C){C.target.removeEventListener("dispose",S);for(let M in c){let A=c[M],U=C.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function yM(n,t){function e(){let G=!1,At=new Je,ut=null,It=new Je(0,0,0,0);return{setMask:function(Ut){ut!==Ut&&!G&&(n.colorMask(Ut,Ut,Ut,Ut),ut=Ut)},setLocked:function(Ut){G=Ut},setClear:function(Ut,_t,$t,Wt,Oe){Oe===!0&&(Ut*=Wt,_t*=Wt,$t*=Wt),At.set(Ut,_t,$t,Wt),It.equals(At)===!1&&(n.clearColor(Ut,_t,$t,Wt),It.copy(At))},reset:function(){G=!1,ut=null,It.set(-1,0,0,0)}}}function i(){let G=!1,At=!1,ut=null,It=null,Ut=null;return{setReversed:function(_t){if(At!==_t){let $t=t.get("EXT_clip_control");_t?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),At=_t;let Wt=Ut;Ut=null,this.setClear(Wt)}},getReversed:function(){return At},setTest:function(_t){_t?et(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(_t){ut!==_t&&!G&&(n.depthMask(_t),ut=_t)},setFunc:function(_t){if(At&&(_t=hp[_t]),It!==_t){switch(_t){case Ca:n.depthFunc(n.NEVER);break;case Ra:n.depthFunc(n.ALWAYS);break;case Ia:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Pa:n.depthFunc(n.EQUAL);break;case La:n.depthFunc(n.GEQUAL);break;case Da:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}It=_t}},setLocked:function(_t){G=_t},setClear:function(_t){Ut!==_t&&(Ut=_t,At&&(_t=1-_t),n.clearDepth(_t))},reset:function(){G=!1,ut=null,It=null,Ut=null,At=!1}}}function s(){let G=!1,At=null,ut=null,It=null,Ut=null,_t=null,$t=null,Wt=null,Oe=null;return{setTest:function(Te){G||(Te?et(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(Te){At!==Te&&!G&&(n.stencilMask(Te),At=Te)},setFunc:function(Te,Fn,xn){(ut!==Te||It!==Fn||Ut!==xn)&&(n.stencilFunc(Te,Fn,xn),ut=Te,It=Fn,Ut=xn)},setOp:function(Te,Fn,xn){(_t!==Te||$t!==Fn||Wt!==xn)&&(n.stencilOp(Te,Fn,xn),_t=Te,$t=Fn,Wt=xn)},setLocked:function(Te){G=Te},setClear:function(Te){Oe!==Te&&(n.clearStencil(Te),Oe=Te)},reset:function(){G=!1,At=null,ut=null,It=null,Ut=null,_t=null,$t=null,Wt=null,Oe=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,m={},d={},p={},f=new WeakMap,_=[],v=null,g=!1,x=null,E=null,L=null,T=null,S=null,C=null,N=null,M=new ce(0,0,0),A=0,U=!1,B=null,$=null,z=null,O=null,k=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,st=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=st>=2);let nt=null,ot={},Ct=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),St=new Je().fromArray(Ct),gt=new Je().fromArray(pt);function yt(G,At,ut,It){let Ut=new Uint8Array(4),_t=n.createTexture();n.bindTexture(G,_t),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<ut;$t++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,It,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(At+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return _t}let W={};W[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(js),Jt(!1),se(_h),et(n.CULL_FACE),Qt(Ti);function et(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function xt(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function zt(G,At){return p[G]!==At?(n.bindFramebuffer(G,At),p[G]=At,G===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=At),G===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=At),!0):!1}function mt(G,At){let ut=_,It=!1;if(G){ut=f.get(At),ut===void 0&&(ut=[],f.set(At,ut));let Ut=G.textures;if(ut.length!==Ut.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let _t=0,$t=Ut.length;_t<$t;_t++)ut[_t]=n.COLOR_ATTACHMENT0+_t;ut.length=Ut.length,It=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,It=!0);It&&n.drawBuffers(ut)}function at(G){return v!==G?(n.useProgram(G),v=G,!0):!1}let ae={[ws]:n.FUNC_ADD,[Ld]:n.FUNC_SUBTRACT,[Dd]:n.FUNC_REVERSE_SUBTRACT};ae[Nd]=n.MIN,ae[Ud]=n.MAX;let Lt={[Fd]:n.ZERO,[Od]:n.ONE,[Bd]:n.SRC_COLOR,[bh]:n.SRC_ALPHA,[Wd]:n.SRC_ALPHA_SATURATE,[Hd]:n.DST_COLOR,[kd]:n.DST_ALPHA,[zd]:n.ONE_MINUS_SRC_COLOR,[Sh]:n.ONE_MINUS_SRC_ALPHA,[Gd]:n.ONE_MINUS_DST_COLOR,[Vd]:n.ONE_MINUS_DST_ALPHA,[Xd]:n.CONSTANT_COLOR,[qd]:n.ONE_MINUS_CONSTANT_COLOR,[Yd]:n.CONSTANT_ALPHA,[$d]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(G,At,ut,It,Ut,_t,$t,Wt,Oe,Te){if(G===Ti){g===!0&&(xt(n.BLEND),g=!1);return}if(g===!1&&(et(n.BLEND),g=!0),G!==Pd){if(G!==x||Te!==U){if((E!==ws||S!==ws)&&(n.blendEquation(n.FUNC_ADD),E=ws,S=ws),Te)switch(G){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.ONE,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:le("WebGLState: Invalid blending: ",G);break}else switch(G){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vh:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",G);break}L=null,T=null,C=null,N=null,M.set(0,0,0),A=0,x=G,U=Te}return}Ut=Ut||At,_t=_t||ut,$t=$t||It,(At!==E||Ut!==S)&&(n.blendEquationSeparate(ae[At],ae[Ut]),E=At,S=Ut),(ut!==L||It!==T||_t!==C||$t!==N)&&(n.blendFuncSeparate(Lt[ut],Lt[It],Lt[_t],Lt[$t]),L=ut,T=It,C=_t,N=$t),(Wt.equals(M)===!1||Oe!==A)&&(n.blendColor(Wt.r,Wt.g,Wt.b,Oe),M.copy(Wt),A=Oe),x=G,U=!1}function re(G,At){G.side===Jn?xt(n.CULL_FACE):et(n.CULL_FACE);let ut=G.side===In;At&&(ut=!ut),Jt(ut),G.blending===rr&&G.transparent===!1?Qt(Ti):Qt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let It=G.stencilWrite;a.setTest(It),It&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Xe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(G){B!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),B=G)}function se(G){G!==Cd?(et(n.CULL_FACE),G!==$&&(G===_h?n.cullFace(n.BACK):G===Rd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),$=G}function Ve(G){G!==z&&(q&&n.lineWidth(G),z=G)}function Xe(G,At,ut){G?(et(n.POLYGON_OFFSET_FILL),(O!==At||k!==ut)&&(O=At,k=ut,o.getReversed()&&(At=-At),n.polygonOffset(At,ut))):xt(n.POLYGON_OFFSET_FILL)}function we(G){G?et(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function Ie(G){G===void 0&&(G=n.TEXTURE0+K-1),nt!==G&&(n.activeTexture(G),nt=G)}function H(G,At,ut){ut===void 0&&(nt===null?ut=n.TEXTURE0+K-1:ut=nt);let It=ot[ut];It===void 0&&(It={type:void 0,texture:void 0},ot[ut]=It),(It.type!==G||It.texture!==At)&&(nt!==ut&&(n.activeTexture(ut),nt=ut),n.bindTexture(G,At||W[G]),It.type=G,It.texture=At)}function He(){let G=ot[nt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(G){le("WebGLState:",G)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(G){le("WebGLState:",G)}}function y(){try{n.texSubImage2D(...arguments)}catch(G){le("WebGLState:",G)}}function Y(){try{n.texSubImage3D(...arguments)}catch(G){le("WebGLState:",G)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(G){le("WebGLState:",G)}}function ct(){try{n.compressedTexSubImage3D(...arguments)}catch(G){le("WebGLState:",G)}}function Tt(){try{n.texStorage2D(...arguments)}catch(G){le("WebGLState:",G)}}function Et(){try{n.texStorage3D(...arguments)}catch(G){le("WebGLState:",G)}}function lt(){try{n.texImage2D(...arguments)}catch(G){le("WebGLState:",G)}}function dt(){try{n.texImage3D(...arguments)}catch(G){le("WebGLState:",G)}}function Pt(G){return d[G]!==void 0?d[G]:n.getParameter(G)}function Kt(G,At){d[G]!==At&&(n.pixelStorei(G,At),d[G]=At)}function Nt(G){St.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),St.copy(G))}function Rt(G){gt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),gt.copy(G))}function te(G,At){let ut=c.get(At);ut===void 0&&(ut=new WeakMap,c.set(At,ut));let It=ut.get(G);It===void 0&&(It=n.getUniformBlockIndex(At,G.name),ut.set(G,It))}function Yt(G,At){let It=c.get(At).get(G);l.get(At)!==It&&(n.uniformBlockBinding(At,It,G.__bindingPointIndex),l.set(At,It))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},d={},nt=null,ot={},p={},f=new WeakMap,_=[],v=null,g=!1,x=null,E=null,L=null,T=null,S=null,C=null,N=null,M=new ce(0,0,0),A=0,U=!1,B=null,$=null,z=null,O=null,k=null,St.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:xt,bindFramebuffer:zt,drawBuffers:mt,useProgram:at,setBlending:Qt,setMaterial:re,setFlipSided:Jt,setCullFace:se,setLineWidth:Ve,setPolygonOffset:Xe,setScissorTest:we,activeTexture:Ie,bindTexture:H,unbindTexture:He,compressedTexImage2D:me,compressedTexImage3D:F,texImage2D:lt,texImage3D:dt,pixelStorei:Kt,getParameter:Pt,updateUBOMapping:te,uniformBlockBinding:Yt,texStorage2D:Tt,texStorage3D:Et,texSubImage2D:y,texSubImage3D:Y,compressedTexSubImage2D:tt,compressedTexSubImage3D:ct,scissor:Nt,viewport:Rt,reset:ue}}function vM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,m=new WeakMap,d=new Set,p,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,y){return _?new OffscreenCanvas(F,y):Xr("canvas")}function g(F,y,Y){let tt=1,ct=me(F);if((ct.width>Y||ct.height>Y)&&(tt=Y/Math.max(ct.width,ct.height)),tt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Tt=Math.floor(tt*ct.width),Et=Math.floor(tt*ct.height);p===void 0&&(p=v(Tt,Et));let lt=y?v(Tt,Et):p;return lt.width=Tt,lt.height=Et,lt.getContext("2d").drawImage(F,0,0,Tt,Et),oe("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Tt+"x"+Et+")."),lt}else return"data"in F&&oe("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),F;return F}function x(F){return F.generateMipmaps}function E(F){n.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(F,y,Y,tt,ct,Tt=!1){if(F!==null){if(n[F]!==void 0)return n[F];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Et;tt&&(Et=t.get("EXT_texture_norm16"),Et||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=y;if(y===n.RED&&(Y===n.FLOAT&&(lt=n.R32F),Y===n.HALF_FLOAT&&(lt=n.R16F),Y===n.UNSIGNED_BYTE&&(lt=n.R8),Y===n.UNSIGNED_SHORT&&Et&&(lt=Et.R16_EXT),Y===n.SHORT&&Et&&(lt=Et.R16_SNORM_EXT)),y===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.R8UI),Y===n.UNSIGNED_SHORT&&(lt=n.R16UI),Y===n.UNSIGNED_INT&&(lt=n.R32UI),Y===n.BYTE&&(lt=n.R8I),Y===n.SHORT&&(lt=n.R16I),Y===n.INT&&(lt=n.R32I)),y===n.RG&&(Y===n.FLOAT&&(lt=n.RG32F),Y===n.HALF_FLOAT&&(lt=n.RG16F),Y===n.UNSIGNED_BYTE&&(lt=n.RG8),Y===n.UNSIGNED_SHORT&&Et&&(lt=Et.RG16_EXT),Y===n.SHORT&&Et&&(lt=Et.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RG16UI),Y===n.UNSIGNED_INT&&(lt=n.RG32UI),Y===n.BYTE&&(lt=n.RG8I),Y===n.SHORT&&(lt=n.RG16I),Y===n.INT&&(lt=n.RG32I)),y===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),Y===n.UNSIGNED_INT&&(lt=n.RGB32UI),Y===n.BYTE&&(lt=n.RGB8I),Y===n.SHORT&&(lt=n.RGB16I),Y===n.INT&&(lt=n.RGB32I)),y===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(lt=n.RGBA32UI),Y===n.BYTE&&(lt=n.RGBA8I),Y===n.SHORT&&(lt=n.RGBA16I),Y===n.INT&&(lt=n.RGBA32I)),y===n.RGB&&(Y===n.UNSIGNED_SHORT&&Et&&(lt=Et.RGB16_EXT),Y===n.SHORT&&Et&&(lt=Et.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(lt=n.R11F_G11F_B10F)),y===n.RGBA){let dt=Tt?Gr:ve.getTransfer(ct);Y===n.FLOAT&&(lt=n.RGBA32F),Y===n.HALF_FLOAT&&(lt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(lt=dt===Fe?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Et&&(lt=Et.RGBA16_EXT),Y===n.SHORT&&Et&&(lt=Et.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function S(F,y){let Y;return F?y===null||y===ai||y===ar?Y=n.DEPTH24_STENCIL8:y===li?Y=n.DEPTH32F_STENCIL8:y===or&&(Y=n.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===ar?Y=n.DEPTH_COMPONENT24:y===li?Y=n.DEPTH_COMPONENT32F:y===or&&(Y=n.DEPTH_COMPONENT16),Y}function C(F,y){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==dn&&F.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?y.mipmaps.length:1}function N(F){let y=F.target;y.removeEventListener("dispose",N),A(y),y.isVideoTexture&&m.delete(y),y.isHTMLTexture&&d.delete(y)}function M(F){let y=F.target;y.removeEventListener("dispose",M),B(y)}function A(F){let y=i.get(F);if(y.__webglInit===void 0)return;let Y=F.source,tt=f.get(Y);if(tt){let ct=tt[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&U(F),Object.keys(tt).length===0&&f.delete(Y)}i.remove(F)}function U(F){let y=i.get(F);n.deleteTexture(y.__webglTexture);let Y=F.source,tt=f.get(Y);delete tt[y.__cacheKey],o.memory.textures--}function B(F){let y=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let ct=0;ct<y.__webglFramebuffer[tt].length;ct++)n.deleteFramebuffer(y.__webglFramebuffer[tt][ct]);else n.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)n.deleteFramebuffer(y.__webglFramebuffer[tt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=F.textures;for(let tt=0,ct=Y.length;tt<ct;tt++){let Tt=i.get(Y[tt]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),o.memory.textures--),i.remove(Y[tt])}i.remove(F)}let $=0;function z(){$=0}function O(){return $}function k(F){$=F}function K(){let F=$;return F>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,F}function q(F){let y=[];return y.push(F.wrapS),y.push(F.wrapT),y.push(F.wrapR||0),y.push(F.magFilter),y.push(F.minFilter),y.push(F.anisotropy),y.push(F.internalFormat),y.push(F.format),y.push(F.type),y.push(F.generateMipmaps),y.push(F.premultiplyAlpha),y.push(F.flipY),y.push(F.unpackAlignment),y.push(F.colorSpace),y.join()}function st(F,y){let Y=i.get(F);if(F.isVideoTexture&&H(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){let tt=F.image;if(tt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(Y,F,y);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+y)}function Z(F,y){let Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){xt(Y,F,y);return}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+y)}function nt(F,y){let Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){xt(Y,F,y);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+y)}function ot(F,y){let Y=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Y.__version!==F.version){zt(Y,F,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+y)}let Ct={[Ua]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[Fa]:n.MIRRORED_REPEAT},pt={[dn]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},St={[ep]:n.NEVER,[op]:n.ALWAYS,[np]:n.LESS,[Zl]:n.LEQUAL,[ip]:n.EQUAL,[Jl]:n.GEQUAL,[sp]:n.GREATER,[rp]:n.NOTEQUAL};function gt(F,y){if(y.type===li&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===fl||y.magFilter===ho||y.magFilter===us||y.minFilter===on||y.minFilter===fl||y.minFilter===ho||y.minFilter===us)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,Ct[y.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,Ct[y.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,Ct[y.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,pt[y.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,St[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===dn||y.minFilter!==ho&&y.minFilter!==us||y.type===li&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function yt(F,y){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,y.addEventListener("dispose",N));let tt=y.source,ct=f.get(tt);ct===void 0&&(ct={},f.set(tt,ct));let Tt=q(y);if(Tt!==F.__cacheKey){ct[Tt]===void 0&&(ct[Tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ct[Tt].usedTimes++;let Et=ct[F.__cacheKey];Et!==void 0&&(ct[F.__cacheKey].usedTimes--,Et.usedTimes===0&&U(y)),F.__cacheKey=Tt,F.__webglTexture=ct[Tt].texture}return Y}function W(F,y,Y){return Math.floor(Math.floor(F/Y)/y)}function et(F,y,Y,tt){let Tt=F.updateRanges;if(Tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,Y,tt,y.data);else{Tt.sort((Kt,Nt)=>Kt.start-Nt.start);let Et=0;for(let Kt=1;Kt<Tt.length;Kt++){let Nt=Tt[Et],Rt=Tt[Kt],te=Nt.start+Nt.count,Yt=W(Rt.start,y.width,4),ue=W(Nt.start,y.width,4);Rt.start<=te+1&&Yt===ue&&W(Rt.start+Rt.count-1,y.width,4)===Yt?Nt.count=Math.max(Nt.count,Rt.start+Rt.count-Nt.start):(++Et,Tt[Et]=Rt)}Tt.length=Et+1;let lt=e.getParameter(n.UNPACK_ROW_LENGTH),dt=e.getParameter(n.UNPACK_SKIP_PIXELS),Pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Kt=0,Nt=Tt.length;Kt<Nt;Kt++){let Rt=Tt[Kt],te=Math.floor(Rt.start/4),Yt=Math.ceil(Rt.count/4),ue=te%y.width,G=Math.floor(te/y.width),At=Yt,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,ue,G,At,ut,Y,tt,y.data)}F.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,lt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Pt)}}function xt(F,y,Y){let tt=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=n.TEXTURE_3D);let ct=yt(F,y),Tt=y.source;e.bindTexture(tt,F.__webglTexture,n.TEXTURE0+Y);let Et=i.get(Tt);if(Tt.version!==Et.__version||ct===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ut=ve.getPrimaries(ve.workingColorSpace),It=y.colorSpace===ki?null:ve.getPrimaries(y.colorSpace),Ut=y.colorSpace===ki||ut===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let dt=g(y.image,!1,s.maxTextureSize);dt=He(y,dt);let Pt=r.convert(y.format,y.colorSpace),Kt=r.convert(y.type),Nt=T(y.internalFormat,Pt,Kt,y.normalized,y.colorSpace,y.isVideoTexture);gt(tt,y);let Rt,te=y.mipmaps,Yt=y.isVideoTexture!==!0,ue=Et.__version===void 0||ct===!0,G=Tt.dataReady,At=C(y,dt);if(y.isDepthTexture)Nt=S(y.format===fs,y.type),ue&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Nt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Pt,Kt,null));else if(y.isDataTexture)if(te.length>0){Yt&&ue&&e.texStorage2D(n.TEXTURE_2D,At,Nt,te[0].width,te[0].height);for(let ut=0,It=te.length;ut<It;ut++)Rt=te[ut],Yt?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Rt.width,Rt.height,Pt,Kt,Rt.data):e.texImage2D(n.TEXTURE_2D,ut,Nt,Rt.width,Rt.height,0,Pt,Kt,Rt.data);y.generateMipmaps=!1}else Yt?(ue&&e.texStorage2D(n.TEXTURE_2D,At,Nt,dt.width,dt.height),G&&et(y,dt,Pt,Kt)):e.texImage2D(n.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Pt,Kt,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Yt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Nt,te[0].width,te[0].height,dt.depth);for(let ut=0,It=te.length;ut<It;ut++)if(Rt=te[ut],y.format!==Kn)if(Pt!==null)if(Yt){if(G)if(y.layerUpdates.size>0){let Ut=qh(Rt.width,Rt.height,y.format,y.type);for(let _t of y.layerUpdates){let $t=Rt.data.subarray(_t*Ut/Rt.data.BYTES_PER_ELEMENT,(_t+1)*Ut/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,_t,Rt.width,Rt.height,1,Pt,$t)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Rt.width,Rt.height,dt.depth,Pt,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Nt,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Rt.width,Rt.height,dt.depth,Pt,Kt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Nt,Rt.width,Rt.height,dt.depth,0,Pt,Kt,Rt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Yt&&ue&&e.texStorage2D(n.TEXTURE_2D,At,Nt,te[0].width,te[0].height);for(let ut=0,It=te.length;ut<It;ut++)Rt=te[ut],y.format!==Kn?Pt!==null?Yt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Rt.width,Rt.height,Pt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Nt,Rt.width,Rt.height,0,Rt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Rt.width,Rt.height,Pt,Kt,Rt.data):e.texImage2D(n.TEXTURE_2D,ut,Nt,Rt.width,Rt.height,0,Pt,Kt,Rt.data)}else if(y.isDataArrayTexture)if(Yt){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Nt,dt.width,dt.height,dt.depth),G)if(y.layerUpdates.size>0){let ut=qh(dt.width,dt.height,y.format,y.type);for(let It of y.layerUpdates){let Ut=dt.data.subarray(It*ut/dt.data.BYTES_PER_ELEMENT,(It+1)*ut/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,It,dt.width,dt.height,1,Pt,Kt,Ut)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Kt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,Pt,Kt,dt.data);else if(y.isData3DTexture)Yt?(ue&&e.texStorage3D(n.TEXTURE_3D,At,Nt,dt.width,dt.height,dt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Kt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,Pt,Kt,dt.data);else if(y.isFramebufferTexture){if(ue)if(Yt)e.texStorage2D(n.TEXTURE_2D,At,Nt,dt.width,dt.height);else{let ut=dt.width,It=dt.height;for(let Ut=0;Ut<At;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,Nt,ut,It,0,Pt,Kt,null),ut>>=1,It>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),dt.parentNode!==ut){ut.appendChild(dt),d.add(y),ut.onpaint=It=>{let Ut=It.changedElements;for(let _t of d)Ut.includes(_t.image)&&(_t.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,dt);else{let Ut=n.RGBA,_t=n.RGBA,$t=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ut,_t,$t,dt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(te.length>0){if(Yt&&ue){let ut=me(te[0]);e.texStorage2D(n.TEXTURE_2D,At,Nt,ut.width,ut.height)}for(let ut=0,It=te.length;ut<It;ut++)Rt=te[ut],Yt?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Pt,Kt,Rt):e.texImage2D(n.TEXTURE_2D,ut,Nt,Pt,Kt,Rt);y.generateMipmaps=!1}else if(Yt){if(ue){let ut=me(dt);e.texStorage2D(n.TEXTURE_2D,At,Nt,ut.width,ut.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Kt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Nt,Pt,Kt,dt);x(y)&&E(tt),Et.__version=Tt.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function zt(F,y,Y){if(y.image.length!==6)return;let tt=yt(F,y),ct=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+Y);let Tt=i.get(ct);if(ct.version!==Tt.__version||tt===!0){e.activeTexture(n.TEXTURE0+Y);let Et=ve.getPrimaries(ve.workingColorSpace),lt=y.colorSpace===ki?null:ve.getPrimaries(y.colorSpace),dt=y.colorSpace===ki||Et===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,Kt=y.image[0]&&y.image[0].isDataTexture,Nt=[];for(let _t=0;_t<6;_t++)!Pt&&!Kt?Nt[_t]=g(y.image[_t],!0,s.maxCubemapSize):Nt[_t]=Kt?y.image[_t].image:y.image[_t],Nt[_t]=He(y,Nt[_t]);let Rt=Nt[0],te=r.convert(y.format,y.colorSpace),Yt=r.convert(y.type),ue=T(y.internalFormat,te,Yt,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,At=Tt.__version===void 0||tt===!0,ut=ct.dataReady,It=C(y,Rt);gt(n.TEXTURE_CUBE_MAP,y);let Ut;if(Pt){G&&At&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ue,Rt.width,Rt.height);for(let _t=0;_t<6;_t++){Ut=Nt[_t].mipmaps;for(let $t=0;$t<Ut.length;$t++){let Wt=Ut[$t];y.format!==Kn?te!==null?G?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t,0,0,Wt.width,Wt.height,te,Wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t,ue,Wt.width,Wt.height,0,Wt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t,0,0,Wt.width,Wt.height,te,Yt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t,ue,Wt.width,Wt.height,0,te,Yt,Wt.data)}}}else{if(Ut=y.mipmaps,G&&At){Ut.length>0&&It++;let _t=me(Nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ue,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Kt){G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Nt[_t].width,Nt[_t].height,te,Yt,Nt[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Nt[_t].width,Nt[_t].height,0,te,Yt,Nt[_t].data);for(let $t=0;$t<Ut.length;$t++){let Oe=Ut[$t].image[_t].image;G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t+1,0,0,Oe.width,Oe.height,te,Yt,Oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t+1,ue,Oe.width,Oe.height,0,te,Yt,Oe.data)}}else{G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,te,Yt,Nt[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,te,Yt,Nt[_t]);for(let $t=0;$t<Ut.length;$t++){let Wt=Ut[$t];G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t+1,0,0,te,Yt,Wt.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t+1,ue,te,Yt,Wt.image[_t])}}}x(y)&&E(n.TEXTURE_CUBE_MAP),Tt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function mt(F,y,Y,tt,ct,Tt){let Et=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),dt=T(Y.internalFormat,Et,lt,Y.normalized,Y.colorSpace),Pt=i.get(y),Kt=i.get(Y);if(Kt.__renderTarget=y,!Pt.__hasExternalTextures){let Nt=Math.max(1,y.width>>Tt),Rt=Math.max(1,y.height>>Tt);ct===n.TEXTURE_3D||ct===n.TEXTURE_2D_ARRAY?e.texImage3D(ct,Tt,dt,Nt,Rt,y.depth,0,Et,lt,null):e.texImage2D(ct,Tt,dt,Nt,Rt,0,Et,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),Ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,ct,Kt.__webglTexture,0,we(y)):(ct===n.TEXTURE_2D||ct>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,ct,Kt.__webglTexture,Tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(F,y,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,F),y.depthBuffer){let tt=y.depthTexture,ct=tt&&tt.isDepthTexture?tt.type:null,Tt=S(y.stencilBuffer,ct),Et=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we(y),Tt,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,we(y),Tt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,F)}else{let tt=y.textures;for(let ct=0;ct<tt.length;ct++){let Tt=tt[ct],Et=r.convert(Tt.format,Tt.colorSpace),lt=r.convert(Tt.type),dt=T(Tt.internalFormat,Et,lt,Tt.normalized,Tt.colorSpace);Ie(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we(y),dt,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,we(y),dt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,dt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(F,y,Y){let tt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=i.get(y.depthTexture);if(ct.__renderTarget=y,(!ct.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,y.depthTexture.addEventListener("dispose",N)),ct.__webglTexture===void 0){ct.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),gt(n.TEXTURE_CUBE_MAP,y.depthTexture);let Pt=r.convert(y.depthTexture.format),Kt=r.convert(y.depthTexture.type),Nt;y.depthTexture.format===bi?Nt=n.DEPTH_COMPONENT24:y.depthTexture.format===fs&&(Nt=n.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Nt,y.width,y.height,0,Pt,Kt,null)}}else st(y.depthTexture,0);let Tt=ct.__webglTexture,Et=we(y),lt=tt?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,dt=y.depthTexture.format===fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===bi)Ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,lt,Tt,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,dt,lt,Tt,0);else if(y.depthTexture.format===fs)Ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,lt,Tt,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,dt,lt,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(F){let y=i.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==F.depthTexture){let tt=F.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){let ct=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",ct)};tt.addEventListener("dispose",ct),y.__depthDisposeCallback=ct}y.__boundDepthTexture=tt}if(F.depthTexture&&!y.__autoAllocateDepthBuffer)if(Y)for(let tt=0;tt<6;tt++)ae(y.__webglFramebuffer[tt],F,tt);else{let tt=F.texture.mipmaps;tt&&tt.length>0?ae(y.__webglFramebuffer[0],F,0):ae(y.__webglFramebuffer,F,0)}else if(Y){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=n.createRenderbuffer(),at(y.__webglDepthbuffer[tt],F,!1);else{let ct=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=y.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,Tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,Tt)}}else{let tt=F.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),at(y.__webglDepthbuffer,F,!1);else{let ct=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,Tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(F,y,Y){let tt=i.get(F);y!==void 0&&mt(tt.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Lt(F)}function re(F){let y=F.texture,Y=i.get(F),tt=i.get(y);F.addEventListener("dispose",M);let ct=F.textures,Tt=F.isWebGLCubeRenderTarget===!0,Et=ct.length>1;if(Et||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=y.version,o.memory.textures++),Tt){Y.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[lt]=[];for(let dt=0;dt<y.mipmaps.length;dt++)Y.__webglFramebuffer[lt][dt]=n.createFramebuffer()}else Y.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)Y.__webglFramebuffer[lt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Et)for(let lt=0,dt=ct.length;lt<dt;lt++){let Pt=i.get(ct[lt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&Ie(F)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let lt=0;lt<ct.length;lt++){let dt=ct[lt];Y.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[lt]);let Pt=r.convert(dt.format,dt.colorSpace),Kt=r.convert(dt.type),Nt=T(dt.internalFormat,Pt,Kt,dt.normalized,dt.colorSpace,F.isXRRenderTarget===!0),Rt=we(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,Nt,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),at(Y.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),gt(n.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)mt(Y.__webglFramebuffer[lt][dt],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else mt(Y.__webglFramebuffer[lt],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);x(y)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,dt=ct.length;lt<dt;lt++){let Pt=ct[lt],Kt=i.get(Pt),Nt=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Nt=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Nt,Kt.__webglTexture),gt(Nt,Pt),mt(Y.__webglFramebuffer,F,Pt,n.COLOR_ATTACHMENT0+lt,Nt,0),x(Pt)&&E(Nt)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(lt=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),gt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)mt(Y.__webglFramebuffer[dt],F,y,n.COLOR_ATTACHMENT0,lt,dt);else mt(Y.__webglFramebuffer,F,y,n.COLOR_ATTACHMENT0,lt,0);x(y)&&E(lt),e.unbindTexture()}F.depthBuffer&&Lt(F)}function Jt(F){let y=F.textures;for(let Y=0,tt=y.length;Y<tt;Y++){let ct=y[Y];if(x(ct)){let Tt=L(F),Et=i.get(ct).__webglTexture;e.bindTexture(Tt,Et),E(Tt),e.unbindTexture()}}}let se=[],Ve=[];function Xe(F){if(F.samples>0){if(Ie(F)===!1){let y=F.textures,Y=F.width,tt=F.height,ct=n.COLOR_BUFFER_BIT,Tt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(F),lt=y.length>1;if(lt)for(let Pt=0;Pt<y.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let dt=F.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ct|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ct|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[Pt]);let Kt=i.get(y[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,Y,tt,0,0,Y,tt,ct,n.NEAREST),l===!0&&(se.length=0,Ve.length=0,se.push(n.COLOR_ATTACHMENT0+Pt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(se.push(Tt),Ve.push(Tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let Pt=0;Pt<y.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[Pt]);let Kt=i.get(y[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let y=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function we(F){return Math.min(s.maxSamples,F.samples)}function Ie(F){let y=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(F){let y=o.render.frame;m.get(F)!==y&&(m.set(F,y),F.update())}function He(F,y){let Y=F.colorSpace,tt=F.format,ct=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==Hr&&Y!==ki&&(ve.getTransfer(Y)===Fe?(tt!==Kn||ct!==kn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",Y)),y}function me(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=O,this.setTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=nt,this.setTextureCube=ot,this.rebindTextures=Qt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function MM(n,t){function e(i,s=ki){let r,o=ve.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dh)return n.BYTE;if(i===Nh)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===Oh)return n.ALPHA;if(i===Bh)return n.RGB;if(i===Kn)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===zh)return n.RED;if(i===gl)return n.RED_INTEGER;if(i===ds)return n.RG;if(i===xl)return n.RG_INTEGER;if(i===_l)return n.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===vl||i===Ml||i===bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===wl||i===Al||i===Tl||i===El||i===go||i===Cl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sl||i===wl)return o===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Al)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tl)return r.COMPRESSED_R11_EAC;if(i===El)return r.COMPRESSED_SIGNED_R11_EAC;if(i===go)return r.COMPRESSED_RG11_EAC;if(i===Cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rl||i===Il||i===Pl||i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Vl||i===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ol)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===Wl||i===Xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Gl)return o===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ql||i===Yl||i===xo||i===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
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

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new no(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Sn({vertexShader:bM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Si{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,m=null,d=null,p=null,f=null,_=null,v=typeof XRWebGLBinding<"u",g=new uu,x={},E=e.getContextAttributes(),L=null,T=null,S=[],C=[],N=new _e,M=null,A=null,U=new Mn;U.viewport=new Je;let B=new Mn;B.viewport=new Je;let $=[U,B],z=new ll,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=S[W];return et===void 0&&(et=new er,S[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=S[W];return et===void 0&&(et=new er,S[W]=et),et.getGripSpace()},this.getHand=function(W){let et=S[W];return et===void 0&&(et=new er,S[W]=et),et.getHandSpace()};function K(W){let et=C.indexOf(W.inputSource);if(et===-1)return;let xt=S[et];xt!==void 0&&(xt.update(W.inputSource,W.frame,c||o),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",st);for(let W=0;W<S.length;W++){let et=C[W];et!==null&&(C[W]=null,S[W].disconnect(et))}O=null,k=null,g.reset();for(let W in x)delete x[W];if(t.setRenderTarget(L),f=null,p=null,d=null,s=null,T=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(N.width,N.height,!1),A!==null){let W=A.camera;W.fov=A.fov,W.zoom=A.zoom,W.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",q),s.addEventListener("inputsourceschange",st),E.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,zt=null,mt=null;E.depth&&(mt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=E.stencil?fs:bi,zt=E.stencil?ar:ai);let at={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(at),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),T=new Nn(p.textureWidth,p.textureHeight,{format:Kn,type:kn,depthTexture:new rs(p.textureWidth,p.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let xt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(W){for(let et=0;et<W.removed.length;et++){let xt=W.removed[et],zt=C.indexOf(xt);zt>=0&&(C[zt]=null,S[zt].disconnect(xt))}for(let et=0;et<W.added.length;et++){let xt=W.added[et],zt=C.indexOf(xt);if(zt===-1){for(let at=0;at<S.length;at++)if(at>=C.length){C.push(xt),zt=at;break}else if(C[at]===null){C[at]=xt,zt=at;break}if(zt===-1)break}let mt=S[zt];mt&&mt.connect(xt)}}let Z=new J,nt=new J;function ot(W,et,xt){Z.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(xt.matrixWorld);let zt=Z.distanceTo(nt),mt=et.projectionMatrix.elements,at=xt.projectionMatrix.elements,ae=mt[14]/(mt[10]-1),Lt=mt[14]/(mt[10]+1),Qt=(mt[9]+1)/mt[5],re=(mt[9]-1)/mt[5],Jt=(mt[8]-1)/mt[0],se=(at[8]+1)/at[0],Ve=ae*Jt,Xe=ae*se,we=zt/(-Jt+se),Ie=we*-Jt;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ie),W.translateZ(we),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),mt[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let H=ae+we,He=Lt+we,me=Ve-Ie,F=Xe+(zt-Ie),y=Qt*Lt/He*H,Y=re*Lt/He*H;W.projectionMatrix.makePerspective(me,F,y,Y,H,He),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Ct(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let et=W.near,xt=W.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),z.near=B.near=U.near=et,z.far=B.far=U.far=xt,(O!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,k=z.far),z.layers.mask=W.layers.mask|6,U.layers.mask=z.layers.mask&-5,B.layers.mask=z.layers.mask&-3;let zt=W.parent,mt=z.cameras;Ct(z,zt);for(let at=0;at<mt.length;at++)Ct(mt[at],zt);mt.length===2?ot(z,U,B):z.projectionMatrix.copy(U.projectionMatrix),A===null&&W.isPerspectiveCamera&&(A={camera:W,fov:W.fov,zoom:W.zoom}),pt(W,z,zt)};function pt(W,et,xt){xt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ba*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(W){return x[W]};let St=null;function gt(W,et){if(m=et.getViewerPose(c||o),_=et,m!==null){let xt=m.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let zt=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,zt=!0);for(let Lt=0;Lt<xt.length;Lt++){let Qt=xt[Lt],re=null;if(f!==null)re=f.getViewport(Qt);else{let se=d.getViewSubImage(p,Qt);re=se.viewport,Lt===0&&(t.setRenderTargetTextures(T,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(T))}let Jt=$[Lt];Jt===void 0&&(Jt=new Mn,Jt.layers.enable(Lt),Jt.viewport=new Je,$[Lt]=Jt),Jt.matrix.fromArray(Qt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Qt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(re.x,re.y,re.width,re.height),Lt===0&&(z.matrix.copy(Jt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),zt===!0&&z.cameras.push(Jt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Lt=d.getDepthInformation(xt[0]);Lt&&Lt.isValid&&Lt.texture&&g.init(Lt,s.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Lt=0;Lt<xt.length;Lt++){let Qt=xt[Lt].camera;if(Qt){let re=x[Qt];re||(re=new no,x[Qt]=re);let Jt=d.getCameraImage(Qt);re.sourceTexture=Jt}}}}for(let xt=0;xt<S.length;xt++){let zt=C[xt],mt=S[xt];zt!==null&&mt!==void 0&&mt.update(zt,et,c||o)}St&&St(W,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}let yt=new Op;yt.setAnimationLoop(gt),this.setAnimationLoop=function(W){St=W},this.dispose=function(){}}},wM=new Ye,Gp=new de;Gp.set(-1,0,0,0,1,0,0,0,1);function AM(n,t){function e(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function i(g,x){x.color.getRGB(g.fogColor.value,Gh(n)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,E,L,T){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),d(g,x)):x.isMeshPhongMaterial?(r(g,x),m(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),p(g,x),x.isMeshPhysicalMaterial&&f(g,x,T)):x.isMeshMatcapMaterial?(r(g,x),_(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),v(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(o(g,x),x.isLineDashedMaterial&&a(g,x)):x.isPointsMaterial?l(g,x,E,L):x.isSpriteMaterial?c(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,e(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===In&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,e(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===In&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,e(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,e(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let E=t.get(x),L=E.envMap,T=E.envMapRotation;L&&(g.envMap.value=L,g.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Gp),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,g.aoMapTransform))}function o(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform))}function a(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,E,L){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*E,g.scale.value=L*.5,x.map&&(g.map.value=x.map,e(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function c(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function m(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function d(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function p(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function f(g,x,E){g.ior.value=x.ior,x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===In&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,x){x.matcap&&(g.matcap.value=x.matcap)}function v(g,x){let E=t.get(x).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){let C=S.program;i.uniformBlockBinding(T,C)}function c(T,S){let C=s[T.id];C===void 0&&(g(T),C=m(T),s[T.id]=C,T.addEventListener("dispose",E));let N=S.program;i.updateUBOMapping(T,N);let M=t.render.frame;r[T.id]!==M&&(p(T),r[T.id]=M)}function m(T){let S=d();T.__bindingPointIndex=S;let C=n.createBuffer(),N=T.__size,M=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,N,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,C),C}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){let S=s[T.id],C=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let M=0,A=C.length;M<A;M++){let U=C[M];if(Array.isArray(U))for(let B=0,$=U.length;B<$;B++)f(U[B],M,B,N);else f(U,M,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,S,C,N){if(v(T,S,C,N)===!0){let M=T.__offset,A=T.value;if(Array.isArray(A)){let U=0;for(let B=0;B<A.length;B++){let $=A[B],z=x($);_($,T.__data,U),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,T.__data)}}function _(T,S,C){typeof T=="number"||typeof T=="boolean"?S[0]=T:T.isMatrix3?(S[0]=T.elements[0],S[1]=T.elements[1],S[2]=T.elements[2],S[3]=0,S[4]=T.elements[3],S[5]=T.elements[4],S[6]=T.elements[5],S[7]=0,S[8]=T.elements[6],S[9]=T.elements[7],S[10]=T.elements[8],S[11]=0):ArrayBuffer.isView(T)?S.set(new T.constructor(T.buffer,T.byteOffset,S.length)):T.toArray(S,C)}function v(T,S,C,N){let M=T.value,A=S+"_"+C;if(N[A]===void 0)return typeof M=="number"||typeof M=="boolean"?N[A]=M:ArrayBuffer.isView(M)?N[A]=M.slice():N[A]=M.clone(),!0;{let U=N[A];if(typeof M=="number"||typeof M=="boolean"){if(U!==M)return N[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(U.equals(M)===!1)return U.copy(M),!0}}return!1}function g(T){let S=T.uniforms,C=0,N=16;for(let A=0,U=S.length;A<U;A++){let B=Array.isArray(S[A])?S[A]:[S[A]];for(let $=0,z=B.length;$<z;$++){let O=B[$],k=Array.isArray(O.value)?O.value:[O.value];for(let K=0,q=k.length;K<q;K++){let st=k[K],Z=x(st),nt=C%N,ot=nt%Z.boundary,Ct=nt+ot;C+=ot,Ct!==0&&N-Ct<Z.storage&&(C+=N-Ct),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=C,C+=Z.storage}}}let M=C%N;return M>0&&(C+=N-M),T.__size=C,T.__cache={},this}function x(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(S.boundary=16,S.storage=T.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",T),S}function E(T){let S=T.target;S.removeEventListener("dispose",E);let C=o.indexOf(S.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function L(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:L}}var EM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function CM(){return Ei===null&&(Ei=new Ga(EM,16,16,ds,ci),Ei.name="DFG_LUT",Ei.minFilter=on,Ei.magFilter=on,Ei.wrapS=Mi,Ei.wrapT=Mi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var ec=class{constructor(t={}){let{canvas:e=ap(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:f=kn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let v=f,g=new Set([_l,xl,gl]),x=new Set([kn,ai,or,ar,pl,ml]),E=new Uint32Array(4),L=new Int32Array(4),T=new J,S=null,C=null,N=[],M=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,B=!1,$=null,z=null,O=null,k=null;this._outputColorSpace=rn;let K=0,q=0,st=null,Z=-1,nt=null,ot=new Je,Ct=new Je,pt=null,St=new ce(0),gt=0,yt=e.width,W=e.height,et=1,xt=null,zt=null,mt=new Je(0,0,yt,W),at=new Je(0,0,yt,W),ae=!1,Lt=new Qr,Qt=!1,re=!1,Jt=new Ye,se=new J,Ve=new Je,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ie(){return st===null?et:1}let H=i;function He(w,V){return e.getContext(w,V)}let me,F,y,Y,tt,ct,Tt,Et,lt,dt,Pt,Kt,Nt,Rt,te,Yt,ue,G,At,ut,It,Ut,_t;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Fn,!1),H===null){let V="webgl2";if(H=He(V,w),H===null)throw He(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(w){throw e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),le("WebGLRenderer: "+w.message),w}function $t(){me=new Uy(H),me.init(),It=new MM(H,me),F=new Ay(H,me,t,It),y=new yM(H,me),F.reversedDepthBuffer&&p&&y.buffers.depth.setReversed(!0),z=H.createFramebuffer(),O=H.createFramebuffer(),k=H.createFramebuffer(),Y=new By(H),tt=new rM,ct=new vM(H,me,y,tt,F,It,Y),Tt=new Ny(U),Et=new kg(H),Ut=new Sy(H,Et),lt=new Fy(H,Et,Y,Ut),dt=new ky(H,lt,Et,Ut,Y),G=new zy(H,F,ct),te=new Ty(tt),Pt=new sM(U,Tt,me,F,Ut,te),Kt=new AM(U,tt),Nt=new aM,Rt=new dM(me),ue=new by(U,Tt,y,dt,_,l),Yt=new _M(U,dt,F),_t=new TM(H,Y,F,y),At=new wy(H,me,Y),ut=new Oy(H,me,Y),Y.programs=Pt.programs,U.capabilities=F,U.extensions=me,U.properties=tt,U.renderLists=Nt,U.shadowMap=Yt,U.state=y,U.info=Y}v!==kn&&(A=new Hy(v,e.width,e.height,a,s,r));let Wt=new fu(U,H);this.xr=Wt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(yt,W,!1))},this.getSize=function(w){return w.set(yt,W)},this.setSize=function(w,V,it=!0){if(Wt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=w,W=V,e.width=Math.floor(w*et),e.height=Math.floor(V*et),it===!0&&(e.style.width=w+"px",e.style.height=V+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(yt*et,W*et).floor()},this.setDrawingBufferSize=function(w,V,it){yt=w,W=V,et=it,e.width=Math.floor(w*it),e.height=Math.floor(V*it),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(v===kn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ot)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,V,it,j){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,V,it,j),y.viewport(ot.copy(mt).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,V,it,j){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,V,it,j),y.scissor(Ct.copy(at).multiplyScalar(et).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){y.setScissorTest(ae=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,it=!0){let j=0;if(w){let Q=!1;if(st!==null){let Ft=st.texture.format;Q=g.has(Ft)}if(Q){let Ft=st.texture.type,Vt=x.has(Ft),Ot=ue.getClearColor(),Xt=ue.getClearAlpha(),Zt=Ot.r,fe=Ot.g,pe=Ot.b;Vt?(E[0]=Zt,E[1]=fe,E[2]=pe,E[3]=Xt,H.clearBufferuiv(H.COLOR,0,E)):(L[0]=Zt,L[1]=fe,L[2]=pe,L[3]=Xt,H.clearBufferiv(H.COLOR,0,L))}else j|=H.COLOR_BUFFER_BIT}V&&(j|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),$=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),ue.dispose(),Nt.dispose(),Rt.dispose(),tt.dispose(),Tt.dispose(),dt.dispose(),Ut.dispose(),_t.dispose(),Pt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Dt),Wt.removeEventListener("sessionend",Ho),ye.stop()};function Oe(w){w.preventDefault(),qr("WebGLRenderer: Context Lost."),B=!0}function Te(){qr("WebGLRenderer: Context Restored."),B=!1;let w=Y.autoReset,V=Yt.enabled,it=Yt.autoUpdate,j=Yt.needsUpdate,Q=Yt.type;$t(),Y.autoReset=w,Yt.enabled=V,Yt.autoUpdate=it,Yt.needsUpdate=j,Yt.type=Q}function Fn(w){le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xn(w){let V=w.target;V.removeEventListener("dispose",xn),Vo(V)}function Vo(w){Sr(w),tt.remove(w)}function Sr(w){let V=tt.get(w).programs;V!==void 0&&(V.forEach(function(it){Pt.releaseProgram(it)}),w.isShaderMaterial&&Pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,it,j,Q,Ft){V===null&&(V=Xe);let Vt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ot=Pe(w,V,it,j,Q);y.setMaterial(j,Vt);let Xt=it.index,Zt=1;if(j.wireframe===!0){if(Xt=lt.getWireframeAttribute(it),Xt===void 0)return;Zt=2}let fe=it.drawRange,pe=it.attributes.position,qt=fe.start*Zt,Ae=(fe.start+fe.count)*Zt;Ft!==null&&(qt=Math.max(qt,Ft.start*Zt),Ae=Math.min(Ae,(Ft.start+Ft.count)*Zt)),Xt!==null?(qt=Math.max(qt,0),Ae=Math.min(Ae,Xt.count)):pe!=null&&(qt=Math.max(qt,0),Ae=Math.min(Ae,pe.count));let Ke=Ae-qt;if(Ke<0||Ke===1/0)return;Ut.setup(Q,j,Ot,it,Xt);let Ue,Ee=At;if(Xt!==null&&(Ue=Et.get(Xt),Ee=ut,Ee.setIndex(Ue)),Q.isMesh)j.wireframe===!0?(y.setLineWidth(j.wireframeLinewidth*Ie()),Ee.setMode(H.LINES)):Ee.setMode(H.TRIANGLES);else if(Q.isLine){let an=j.linewidth;an===void 0&&(an=1),y.setLineWidth(an*Ie()),Q.isLineSegments?Ee.setMode(H.LINES):Q.isLineLoop?Ee.setMode(H.LINE_LOOP):Ee.setMode(H.LINE_STRIP)}else Q.isPoints?Ee.setMode(H.POINTS):Q.isSprite&&Ee.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Ee.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let an=Q._multiDrawStarts,Ht=Q._multiDrawCounts,ln=Q._multiDrawCount,Me=Xt?Et.get(Xt).bytesPerElement:1,Pn=tt.get(j).currentProgram.getUniforms();for(let Ln=0;Ln<ln;Ln++)Pn.setValue(H,"_gl_DrawID",Ln),Ee.render(an[Ln]/Me,Ht[Ln])}else if(Q.isInstancedMesh)Ee.renderInstances(qt,Ke,Q.count);else if(it.isInstancedBufferGeometry){let an=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ht=Math.min(it.instanceCount,an);Ee.renderInstances(qt,Ke,Ht)}else Ee.render(qt,Ke)};function Wn(w,V,it,j){$!==null&&w.isNodeMaterial&&$.setObject(j,w),Qt===!0&&te.setState(w,it,!1),w.transparent===!0&&w.side===Jn&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,mi(w,V,j),w.side=cs,w.needsUpdate=!0,mi(w,V,j),w.side=Jn):mi(w,V,j)}this.compile=function(w,V,it=null){it===null&&(it=w),$!==null&&$.renderStart(w,V,it),C=Rt.get(it),C.init(V),M.push(C),it.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(C.pushLight(Q),Q.castShadow&&C.pushShadow(Q))}),w!==it&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(C.pushLight(Q),Q.castShadow&&C.pushShadow(Q))}),C.setupLights(),$!==null&&$.updateLights(C.state.lightsArray),re=this.localClippingEnabled,Qt=te.init(this.clippingPlanes,re),Qt===!0&&te.setGlobalState(this.clippingPlanes,V),$!==null&&Yt.render(C.state.shadowsArray,it,V);let j=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ft=Q.material;if(Ft)if(Array.isArray(Ft))for(let Vt=0;Vt<Ft.length;Vt++){let Ot=Ft[Vt];Wn(Ot,it,V,Q),j.add(Ot)}else Wn(Ft,it,V,Q),j.add(Ft)}),C=M.pop(),$!==null&&$.renderEnd(),j},this.compileAsync=function(w,V,it=null){let j=this.compile(w,V,it);return new Promise(Q=>{function Ft(){if(j.forEach(function(Vt){let Xt=tt.get(Vt).currentProgram;(Xt===void 0||Xt.isReady())&&j.delete(Vt)}),j.size===0){Q(w);return}setTimeout(Ft,10)}me.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Di=null;function wt(w){Di&&Di(w)}function Dt(){ye.stop()}function Ho(){ye.start()}let ye=new Op;ye.setAnimationLoop(wt),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(w){Di=w,Wt.setAnimationLoop(w),w===null?ye.stop():ye.start()},Wt.addEventListener("sessionstart",Dt),Wt.addEventListener("sessionend",Ho),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;$!==null&&$.renderStart(w,V);let it=Wt.enabled===!0&&Wt.isPresenting===!0,j=A!==null&&(st===null||it)&&A.begin(U,st);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(V),V=Wt.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,V,st),C=Rt.get(w,M.length),C.init(V),C.state.textureUnits=ct.getTextureUnits(),M.push(C),Jt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Lt.setFromProjectionMatrix(Jt,ri,V.reversedDepth),re=this.localClippingEnabled,Qt=te.init(this.clippingPlanes,re),S=Nt.get(w,N.length),S.init(),N.push(S),Wt.enabled===!0&&Wt.isPresenting===!0){let Vt=U.xr.getDepthSensingMesh();Vt!==null&&wr(Vt,V,-1/0,U.sortObjects)}wr(w,V,0,U.sortObjects),S.finish(),$!==null&&$.updateLights(C.state.lightsArray),U.sortObjects===!0&&S.sort(xt,zt),we=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,we&&ue.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&te.beginShadows();let Q=C.state.shadowsArray;if(Yt.render(Q,w,V),Qt===!0&&te.endShadows(),(j&&A.hasRenderPass())===!1){let Vt=S.opaque,Ot=S.transmissive;if(C.setupLights(),V.isArrayCamera){let Xt=V.cameras;if(Ot.length>0)for(let Zt=0,fe=Xt.length;Zt<fe;Zt++){let pe=Xt[Zt];Ar(Vt,Ot,w,pe)}we&&ue.render(w);for(let Zt=0,fe=Xt.length;Zt<fe;Zt++){let pe=Xt[Zt];Go(S,w,pe,pe.viewport)}}else Ot.length>0&&Ar(Vt,Ot,w,V),we&&ue.render(w),Go(S,w,V)}st!==null&&q===0&&(ct.updateMultisampleRenderTarget(st),ct.updateRenderTargetMipmap(st)),j&&A.end(U),w.isScene===!0&&w.onAfterRender(U,w,V),Ut.resetDefaultState(),Z=-1,nt=null,M.pop(),M.length>0?(C=M[M.length-1],ct.setTextureUnits(C.state.textureUnits),Qt===!0&&te.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?S=N[N.length-1]:S=null,$!==null&&$.renderEnd()};function wr(w,V,it,j){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)C.pushLightProbeGrid(w);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Lt)){j&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Jt);let Vt=dt.update(w),Ot=w.material;Ot.visible&&S.push(w,Vt,Ot,it,Ve.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Lt))){let Vt=dt.update(w),Ot=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Ve.copy(Vt.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ot)){let Xt=Vt.groups;for(let Zt=0,fe=Xt.length;Zt<fe;Zt++){let pe=Xt[Zt],qt=Ot[pe.materialIndex];qt&&qt.visible&&S.push(w,Vt,qt,it,Ve.z,pe,V)}}else Ot.visible&&S.push(w,Vt,Ot,it,Ve.z,null,V)}}let Ft=w.children;for(let Vt=0,Ot=Ft.length;Vt<Ot;Vt++)wr(Ft[Vt],V,it,j)}function Go(w,V,it,j){let{opaque:Q,transmissive:Ft,transparent:Vt}=w;C.setupLightsView(it),Qt===!0&&te.setGlobalState(U.clippingPlanes,it),j&&y.viewport(ot.copy(j)),Q.length>0&&_n(Q,V,it),Ft.length>0&&_n(Ft,V,it),Vt.length>0&&_n(Vt,V,it),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ar(w,V,it,j){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[j.id]===void 0){let qt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[j.id]=new Nn(1,1,{generateMipmaps:!0,type:qt?ci:kn,minFilter:us,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let Ft=C.state.transmissionRenderTarget[j.id],Vt=j.viewport||ot;Ft.setSize(Vt.z*U.transmissionResolutionScale,Vt.w*U.transmissionResolutionScale);let Ot=U.getRenderTarget(),Xt=U.getActiveCubeFace(),Zt=U.getActiveMipmapLevel();U.setRenderTarget(Ft),U.getClearColor(St),gt=U.getClearAlpha(),gt<1&&U.setClearColor(16777215,.5),U.clear(),we&&ue.render(it);let fe=U.toneMapping;U.toneMapping=oi;let pe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),C.setupLightsView(j),Qt===!0&&te.setGlobalState(U.clippingPlanes,j),_n(w,it,j),ct.updateMultisampleRenderTarget(Ft),ct.updateRenderTargetMipmap(Ft),me.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ae=0,Ke=V.length;Ae<Ke;Ae++){let Ue=V[Ae],{object:Ee,geometry:an,material:Ht,group:ln}=Ue;if(Ht.side===Jn&&Ee.layers.test(j.layers)){let Me=Ht.side;Ht.side=In,Ht.needsUpdate=!0,Tr(Ee,it,j,an,Ht,ln),Ht.side=Me,Ht.needsUpdate=!0,qt=!0}}qt===!0&&(ct.updateMultisampleRenderTarget(Ft),ct.updateRenderTargetMipmap(Ft))}U.setRenderTarget(Ot,Xt,Zt),U.setClearColor(St,gt),pe!==void 0&&(j.viewport=pe),U.toneMapping=fe}function _n(w,V,it){let j=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,Ft=w.length;Q<Ft;Q++){let Vt=w[Q],{object:Ot,geometry:Xt,group:Zt}=Vt,fe=Vt.material;fe.allowOverride===!0&&j!==null&&(fe=j),Ot.layers.test(it.layers)&&Tr(Ot,V,it,Xt,fe,Zt)}}function Tr(w,V,it,j,Q,Ft){$!==null&&Q.isNodeMaterial&&$.setObject(w,Q),w.onBeforeRender(U,V,it,j,Q,Ft),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(U,V,it,j,w,Ft),Q.transparent===!0&&Q.side===Jn&&Q.forceSinglePass===!1?(Q.side=In,Q.needsUpdate=!0,U.renderBufferDirect(it,V,j,Q,w,Ft),Q.side=cs,Q.needsUpdate=!0,U.renderBufferDirect(it,V,j,Q,w,Ft),Q.side=Jn):U.renderBufferDirect(it,V,j,Q,w,Ft),w.onAfterRender(U,V,it,j,Q,Ft)}function mi(w,V,it){V.isScene!==!0&&(V=Xe);let j=tt.get(w),Q=C.state.lights,Ft=C.state.shadowsArray,Vt=Q.state.version,Ot=Pt.getParameters(w,Q.state,Ft,V,it,C.state.lightProbeGridArray),Xt=Pt.getProgramCacheKey(Ot),Zt=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,j.fog=V.fog;let fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;j.envMap=Tt.get(w.envMap||j.environment,fe),j.envMapRotation=j.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Zt===void 0&&(w.addEventListener("dispose",xn),Zt=new Map,j.programs=Zt);let pe=Zt.get(Xt);if(pe!==void 0){if(j.currentProgram===pe&&j.lightsStateVersion===Vt)return Wo(w,Ot),pe}else Ot.uniforms=Pt.getUniforms(w),$!==null&&w.isNodeMaterial&&$.build(w,it,Ot),w.onBeforeCompile(Ot,U),pe=Pt.acquireProgram(Ot,Xt),Zt.set(Xt,pe),j.uniforms=Ot.uniforms;let qt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=te.uniform),Wo(w,Ot),j.needsLights=Cc(w),j.lightsStateVersion=Vt,j.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.sunLights.value=Q.state.sun,qt.sunLightShadows.value=Q.state.sunShadow,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.sunShadowMatrix.value=Q.state.sunShadowMatrix,qt.sunShadowCascade.value=Q.state.sunShadowCascade,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=C.state.lightProbeGridArray.length>0,j.currentProgram=pe,j.uniformsList=null,pe}function Er(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=hr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Wo(w,V){let it=tt.get(w);it.outputColorSpace=V.outputColorSpace,it.batching=V.batching,it.batchingColor=V.batchingColor,it.instancing=V.instancing,it.instancingColor=V.instancingColor,it.instancingMorph=V.instancingMorph,it.skinning=V.skinning,it.morphTargets=V.morphTargets,it.morphNormals=V.morphNormals,it.morphColors=V.morphColors,it.morphTargetsCount=V.morphTargetsCount,it.numClippingPlanes=V.numClippingPlanes,it.numIntersection=V.numClipIntersection,it.vertexAlphas=V.vertexAlphas,it.vertexTangents=V.vertexTangents,it.toneMapping=V.toneMapping}function Ec(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;T.setFromMatrixPosition(V.matrixWorld);for(let it=0,j=w.length;it<j;it++){let Q=w[it];if(Q.texture!==null&&Q.boundingBox.containsPoint(T))return Q}return null}function Pe(w,V,it,j,Q){V.isScene!==!0&&(V=Xe),ct.resetTextureUnits();let Ft=V.fog,Vt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?V.environment:null,Ot=st===null?U.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ve.workingColorSpace,Xt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Zt=Tt.get(j.envMap||Vt,Xt),fe=j.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pe=!!it.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),qt=!!it.morphAttributes.position,Ae=!!it.morphAttributes.normal,Ke=!!it.morphAttributes.color,Ue=oi;j.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ue=U.toneMapping);let Ee=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,an=Ee!==void 0?Ee.length:0,Ht=tt.get(j),ln=C.state.lights;if(Qt===!0&&(re===!0||w!==nt)){let ze=w===nt&&j.id===Z;te.setState(j,w,ze)}let Me=!1;j.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ln.state.version||Ht.outputColorSpace!==Ot||Q.isBatchedMesh&&Ht.batching===!1||!Q.isBatchedMesh&&Ht.batching===!0||Q.isBatchedMesh&&Ht.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ht.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ht.instancing===!1||!Q.isInstancedMesh&&Ht.instancing===!0||Q.isSkinnedMesh&&Ht.skinning===!1||!Q.isSkinnedMesh&&Ht.skinning===!0||Q.isInstancedMesh&&Ht.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ht.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ht.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ht.instancingMorph===!1&&Q.morphTexture!==null||Ht.envMap!==Zt||j.fog===!0&&Ht.fog!==Ft||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==te.numPlanes||Ht.numIntersection!==te.numIntersection)||Ht.vertexAlphas!==fe||Ht.vertexTangents!==pe||Ht.morphTargets!==qt||Ht.morphNormals!==Ae||Ht.morphColors!==Ke||Ht.toneMapping!==Ue||Ht.morphTargetsCount!==an||!!Ht.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Ht.__version=j.version);let Pn=Ht.currentProgram;Me===!0&&(Pn=mi(j,V,Q),$&&j.isNodeMaterial&&$.onUpdateProgram(j,Pn,Ht));let Ln=!1,Dn=!1,qi=!1,Ce=Pn.getUniforms(),$e=Ht.uniforms;if(y.useProgram(Pn.program)&&(Ln=!0,Dn=!0,qi=!0),j.id!==Z&&(Z=j.id,Dn=!0),Ht.needsLights){let ze=Ec(C.state.lightProbeGridArray,Q);Ht.lightProbeGrid!==ze&&(Ht.lightProbeGrid=ze,Dn=!0)}if(Ln||nt!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ce.setValue(H,"projectionMatrix",w.projectionMatrix),Ce.setValue(H,"viewMatrix",w.matrixWorldInverse);let gi=Ce.map.cameraPosition;gi!==void 0&&gi.setValue(H,se.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&Ce.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ce.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),nt!==w&&(nt=w,Dn=!0,qi=!0)}if(Ht.needsLights&&(ln.state.sunShadowMap.length>0&&Ce.setValue(H,"sunShadowMap",ln.state.sunShadowMap,ct),ln.state.directionalShadowMap.length>0&&Ce.setValue(H,"directionalShadowMap",ln.state.directionalShadowMap,ct),ln.state.spotShadowMap.length>0&&Ce.setValue(H,"spotShadowMap",ln.state.spotShadowMap,ct),ln.state.pointShadowMap.length>0&&Ce.setValue(H,"pointShadowMap",ln.state.pointShadowMap,ct)),Q.isSkinnedMesh){Ce.setOptional(H,Q,"bindMatrix"),Ce.setOptional(H,Q,"bindMatrixInverse");let ze=Q.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Ce.setValue(H,"boneTexture",ze.boneTexture,ct))}Q.isBatchedMesh&&(Ce.setOptional(H,Q,"batchingTexture"),Ce.setValue(H,"batchingTexture",Q._matricesTexture,ct),Ce.setOptional(H,Q,"batchingIdTexture"),Ce.setValue(H,"batchingIdTexture",Q._indirectTexture,ct),Ce.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ce.setValue(H,"batchingColorTexture",Q._colorsTexture,ct));let Xn=it.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&G.update(Q,it,Pn),(Dn||Ht.receiveShadow!==Q.receiveShadow)&&(Ht.receiveShadow=Q.receiveShadow,Ce.setValue(H,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&V.environment!==null&&($e.envMapIntensity.value=V.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=CM()),Dn){if(Ce.setValue(H,"toneMappingExposure",U.toneMappingExposure),Ht.needsLights&&Xo($e,qi),Ft&&j.fog===!0&&Kt.refreshFogUniforms($e,Ft),Kt.refreshMaterialUniforms($e,j,et,W,C.state.transmissionRenderTarget[w.id]),Ht.needsLights&&Ht.lightProbeGrid){let ze=Ht.lightProbeGrid;$e.probesSH.value=ze.texture,$e.probesMin.value.copy(ze.boundingBox.min),$e.probesMax.value.copy(ze.boundingBox.max),$e.probesResolution.value.copy(ze.resolution)}hr.upload(H,Er(Ht),$e,ct)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(hr.upload(H,Er(Ht),$e,ct),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ce.setValue(H,"center",Q.center),Ce.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ce.setValue(H,"normalMatrix",Q.normalMatrix),Ce.setValue(H,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let ze=j.uniformsGroups;for(let gi=0,qe=ze.length;gi<qe;gi++){let Le=ze[gi];_t.update(Le,Pn),_t.bind(Le,Pn)}}return Pn}function Xo(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Cc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(w,V,it){let j=tt.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),tt.get(w.texture).__webglTexture=V,tt.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:it,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let it=tt.get(w);it.__webglFramebuffer=V,it.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,it=0){st=w,K=V,q=it;let j=null,Q=!1,Ft=!1;if(w){let Ot=tt.get(w);if(Ot.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,Ot.__webglFramebuffer),ot.copy(w.viewport),Ct.copy(w.scissor),pt=w.scissorTest,y.viewport(ot),y.scissor(Ct),y.setScissorTest(pt),Z=-1;return}else if(Ot.__webglFramebuffer===void 0)ct.setupRenderTarget(w);else if(Ot.__hasExternalTextures)ct.rebindTextures(w,tt.get(w.texture).__webglTexture,tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let fe=w.depthTexture;if(Ot.__boundDepthTexture!==fe){if(fe!==null&&tt.has(fe)&&(w.width!==fe.image.width||w.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(w)}}let Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ft=!0);let Zt=tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[V])?j=Zt[V][it]:j=Zt[V],Q=!0):w.samples>0&&ct.useMultisampledRTT(w)===!1?j=tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?j=Zt[it]:j=Zt,ot.copy(w.viewport),Ct.copy(w.scissor),pt=w.scissorTest}else ot.copy(mt).multiplyScalar(et).floor(),Ct.copy(at).multiplyScalar(et).floor(),pt=ae;if(it!==0&&(j=z),y.bindFramebuffer(H.FRAMEBUFFER,j)&&y.drawBuffers(w,j),y.viewport(ot),y.scissor(Ct),y.setScissorTest(pt),Q){let Ot=tt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ot.__webglTexture,it)}else if(Ft){let Ot=V;for(let Xt=0;Xt<w.textures.length;Xt++){let Zt=tt.get(w.textures[Xt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Xt,Zt.__webglTexture,it,Ot)}}else if(w!==null&&it!==0){let Ot=tt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ot.__webglTexture,it)}Z=-1};function Ps(w){let V=tt.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=F.textureFormatReadable(w.format),V.__typeReadable=F.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,it,j,Q,Ft,Vt,Ot=0){if(!(w&&w.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){y.bindFramebuffer(H.FRAMEBUFFER,Xt);try{let Zt=w.textures[Ot],fe=Zt.format,pe=Zt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot);let qt=Ps(Zt);if(qt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-j&&it>=0&&it<=w.height-Q&&H.readPixels(V,it,j,Q,It.convert(fe),It.convert(pe),Ft)}finally{let Zt=st!==null?tt.get(st).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(w,V,it,j,Q,Ft,Vt,Ot=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(V>=0&&V<=w.width-j&&it>=0&&it<=w.height-Q){y.bindFramebuffer(H.FRAMEBUFFER,Xt);let Zt=w.textures[Ot],fe=Zt.format,pe=Zt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot);let qt=Ps(Zt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ae),H.bufferData(H.PIXEL_PACK_BUFFER,Ft.byteLength,H.STREAM_READ),H.readPixels(V,it,j,Q,It.convert(fe),It.convert(pe),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ke=st!==null?tt.get(st).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Ke);let Ue=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await cp(H,Ue,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ft),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ae),H.deleteSync(Ue),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,it=0){let j=Math.pow(2,-it),Q=Math.floor(w.image.width*j),Ft=Math.floor(w.image.height*j),Vt=V!==null?V.x:0,Ot=V!==null?V.y:0;ct.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Vt,Ot,Q,Ft),y.unbindTexture()},this.copyTextureToTexture=function(w,V,it=null,j=null,Q=0,Ft=0){let Vt,Ot,Xt,Zt,fe,pe,qt,Ae,Ke,Ue=w.isCompressedTexture?w.mipmaps[Ft]:w.image;if(it!==null)Vt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,Xt=it.isBox3?it.max.z-it.min.z:1,Zt=it.min.x,fe=it.min.y,pe=it.isBox3?it.min.z:0;else{let $e=Math.pow(2,-Q);Vt=Math.floor(Ue.width*$e),Ot=Math.floor(Ue.height*$e),w.isDataArrayTexture?Xt=Ue.depth:w.isData3DTexture?Xt=Math.floor(Ue.depth*$e):Xt=1,Zt=0,fe=0,pe=0}j!==null?(qt=j.x,Ae=j.y,Ke=j.z):(qt=0,Ae=0,Ke=0);let Ee=It.convert(V.format),an=It.convert(V.type),Ht;V.isData3DTexture?(ct.setTexture3D(V,0),Ht=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ct.setTexture2DArray(V,0),Ht=H.TEXTURE_2D_ARRAY):(ct.setTexture2D(V,0),Ht=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let ln=y.getParameter(H.UNPACK_ROW_LENGTH),Me=y.getParameter(H.UNPACK_IMAGE_HEIGHT),Pn=y.getParameter(H.UNPACK_SKIP_PIXELS),Ln=y.getParameter(H.UNPACK_SKIP_ROWS),Dn=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,Ue.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ue.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Zt),y.pixelStorei(H.UNPACK_SKIP_ROWS,fe),y.pixelStorei(H.UNPACK_SKIP_IMAGES,pe);let qi=w.isDataArrayTexture||w.isData3DTexture,Ce=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let $e=tt.get(w),Xn=tt.get(V),ze=tt.get($e.__renderTarget),gi=tt.get(Xn.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,ze.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let qe=0;qe<Xt;qe++)qi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(w).__webglTexture,Q,pe+qe),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(V).__webglTexture,Ft,Ke+qe)),H.blitFramebuffer(Zt,fe,Vt,Ot,qt,Ae,Vt,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||tt.has(w)){let $e=tt.get(w),Xn=tt.get(V);y.bindFramebuffer(H.READ_FRAMEBUFFER,O),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,k);for(let ze=0;ze<Xt;ze++)qi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.__webglTexture,Q,pe+ze):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$e.__webglTexture,Q),Ce?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xn.__webglTexture,Ft,Ke+ze):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Xn.__webglTexture,Ft),Q!==0?H.blitFramebuffer(Zt,fe,Vt,Ot,qt,Ae,Vt,Ot,H.COLOR_BUFFER_BIT,H.NEAREST):Ce?H.copyTexSubImage3D(Ht,Ft,qt,Ae,Ke+ze,Zt,fe,Vt,Ot):H.copyTexSubImage2D(Ht,Ft,qt,Ae,Zt,fe,Vt,Ot);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ce?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Ht,Ft,qt,Ae,Ke,Vt,Ot,Xt,Ee,an,Ue.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Ht,Ft,qt,Ae,Ke,Vt,Ot,Xt,Ee,Ue.data):H.texSubImage3D(Ht,Ft,qt,Ae,Ke,Vt,Ot,Xt,Ee,an,Ue):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ft,qt,Ae,Vt,Ot,Ee,an,Ue.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ft,qt,Ae,Ue.width,Ue.height,Ee,Ue.data):H.texSubImage2D(H.TEXTURE_2D,Ft,qt,Ae,Vt,Ot,Ee,an,Ue);y.pixelStorei(H.UNPACK_ROW_LENGTH,ln),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Me),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Pn),y.pixelStorei(H.UNPACK_SKIP_ROWS,Ln),y.pixelStorei(H.UNPACK_SKIP_IMAGES,Dn),Ft===0&&V.generateMipmaps&&H.generateMipmap(Ht),y.unbindTexture()},this.initRenderTarget=function(w){tt.get(w).__webglFramebuffer===void 0&&ct.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){K=0,q=0,st=null,y.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var RM=["top","side","bottom"],IM={slab_bottom:1,slab_top:1,stairs:1},Wp=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function PM(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],Wp[n.facing|0]]:null}function Xp(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let A of t){if(!A||typeof A.id!="string")throw new Error("block without id");if(!Number.isInteger(A.n)||A.n<0||A.n>255)throw new Error("bad n for "+A.id);if(i[A.n])throw new Error("duplicate n "+A.n+" ("+A.id+")");if(s[A.id])throw new Error("duplicate id "+A.id);let U=A.colors||{},B=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},A);if(B.placeable=B.n!==0&&!B.liquid,B.colors={top:U.top||"#888888",side:U.side||U.top||"#888888",bottom:U.bottom||U.top||"#888888"},B.opaque=B.solid&&!B.transparent&&!B.cutout&&!IM[B.shape],B.tile={},B.tileOf&&s[B.tileOf])B.tile=Object.assign({},s[B.tileOf].tile);else if(B.n!==0){let $={};for(let z of RM){let O=B.colors[z]+"|"+(B.pattern==="grass"||B.pattern==="log"||B.pattern==="lamp"||B.pattern==="table"||B.pattern==="stele"||B.pattern==="torch"||B.pattern==="bed"||B.pattern==="snow"||B.pattern==="lantern"||B.pattern==="bookshelf"||B.pattern==="hay"||B.pattern==="barrel"||B.pattern==="chest"||B.pattern==="farmland"?z:"");$[O]===void 0&&($[O]=r.length,r.push({block:B.id,face:z,color:B.colors[z],pattern:B.pattern,accent:B.accent||null,top:B.colors.top})),B.tile[z]=$[O]}}i[B.n]=B,s[B.id]=B}if(!s.air)throw new Error("registry needs air");for(let A of e){if(s[A.id])throw new Error("duplicate id "+A.id);s[A.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},A)}for(let A in s){let U=s[A].drops;if(U&&U!=="self"&&!s[U])throw new Error(A+" drops unknown "+U)}let o=A=>(typeof A=="number"?i[A]:s[A])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),m=new Uint8Array(256),d=new Uint8Array(256),p=new Uint8Array(256),f={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8},_=new Uint8Array(256),v=new Array(256).fill(null),g=new Uint8Array(256),x=new Uint8Array(256),E=new Uint8Array(256),L=new Uint8Array(256),T=new Uint8Array(256),S=new Int16Array(256).fill(-1),C=new Int16Array(256).fill(-1),N=new Int16Array(256).fill(-1);i.forEach((A,U)=>{A&&(g[U]=A.solid?1:0,x[U]=A.opaque?1:0,E[U]=A.transparent?1:0,L[U]=A.emissive?1:0,T[U]=A.liquid?1:0,a[U]=A.light!=null?A.light:A.emissive?15:0,l[U]=A.liquid?2:0,c[U]=f[A.shape]||0,m[U]=A.cutout?1:0,d[U]=A.climbable?1:0,p[U]=A.plant?1:0,_[U]=A.facing|0,A.solid&&(v[U]=PM(A)),U&&(S[U]=A.tile.top,C[U]=A.tile.side,N[U]=A.tile.bottom))});let M=(n&&n.blueprints||[]).map(A=>Object.assign({kind:"blueprint"},A));return{blocks:i.filter(Boolean),items:e.map(A=>s[A.id]),blueprints:M,tiles:r,get:o,toolOf:A=>{let U=A&&s[A];return U&&U.kind==="item"&&U.tool&&typeof U.tool=="object"?U.tool:null},num:A=>{let U=s[A];if(!U||U.kind!=="block")throw new Error("no block "+A);return U.n},name:A=>{let U=o(A);return U?U.name_zh:String(A)},maxStack:A=>{let U=s[A];return U?U.maxStack:64},dropOf:A=>{let U=i[A];return!U||!U.drops?null:U.drops==="self"?U.id:U.drops},breakTime:A=>{let U=i[A];return!U||U.hardness<0?1/0:.25+U.hardness*.55},flat:{solid:g,opaque:x,trans:E,emit:L,liquid:T,tileTop:S,tileSide:C,tileBottom:N,lightEmit:a,attn:l,shape:c,cutout:m,climb:d,plant:p,facing:_,boxes:v}}}var Vi=n=>Math.floor(n/16);var xe=(n,t,e)=>(t*16+e)*16+n;var Ri=(n,t)=>n+","+t,qp=n=>n.split(",").map(Number);function du(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Vi(n),s=Vi(e);return{cx:i,cz:s,i:xe(n-i*16,t,e-s*16)}}function Yp(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Vn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var fr=(n,t,e)=>Vn(n,t,0,e);function LM(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var pu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],DM=.5*(Math.sqrt(3)-1),Mo=(3-Math.sqrt(3))/6;function Ii(n){let t=LM(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*DM,a=Math.floor(s+o),l=Math.floor(r+o),c=(a+l)*Mo,m=s-(a-c),d=r-(l-c),p=m>d?1:0,f=1-p,_=m-p+Mo,v=d-f+Mo,g=m-1+2*Mo,x=d-1+2*Mo,E=a&255,L=l&255,T=0,S,C;return S=.5-m*m-d*d,S>0&&(C=pu[i[E+i[L]]&7],S*=S,T+=S*S*(C[0]*m+C[1]*d)),S=.5-_*_-v*v,S>0&&(C=pu[i[E+p+i[L+f]]&7],S*=S,T+=S*S*(C[0]*_+C[1]*v)),S=.5-g*g-x*x,S>0&&(C=pu[i[E+1+i[L+1]]&7],S*=S,T+=S*S*(C[0]*g+C[1]*x)),70*T}}function Hi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let l=0;l<i;l++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function mu(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),l=t(e-r),c=t(i-o),m=t(s-a),d=(f,_,v)=>Vn(n,r+f,o+_,a+v),p=(f,_,v)=>f+(_-f)*v;return p(p(p(d(0,0,0),d(1,0,0),l),p(d(0,1,0),d(1,1,0),l),c),p(p(d(0,0,1),d(1,0,1),l),p(d(0,1,1),d(1,1,1),l),c),m)}}var dr=160,hi=18,gu=[[0,1],[-1,0],[0,-1],[1,0]];function $p(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var NM=(n,t,e)=>e&1?[t,n]:[n,t];function Zp(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(l,c){let m=l+","+c;if(i.has(m))return i.get(m);let d=null,p=f=>Vn(n+909,l,f,c);if(p(0)<.45&&e&&e.houses&&e.houses.length){let f=Math.floor((l+.2+p(1)*.6)*dr),_=Math.floor((c+.2+p(2)*.6)*dr),v=t.biomeOf(f,_),g=t.height(f,_),x=(v==="plains"||v==="desert")&&Math.hypot(f,_)>110;if(x&&g>s+1)for(let E=0;E<16&&x;E++)for(let L of[7,14]){let T=t.height(f+Math.round(Math.cos(E*.39)*L),_+Math.round(Math.sin(E*.39)*L));(Math.abs(T-g)>3||T<=s)&&(x=!1)}else x=!1;if(x){let E=[],L=[],T=3+Math.floor(p(3)*4),S=(C,N,M,A)=>{let U=r[C];if(!U)return null;let[B,$]=NM(U.size[0],U.size[2],A),z={tpl:C,rot:A,x0:N-(B>>1),z0:M-($>>1),y:g,w:B,d:$,h:U.size[1]};return E.push(z),z};S("well",f,_,0),S("lamp_post",f+3,_+3,0),S("lamp_post",f-3,_-3,0);for(let C=0;C<T;C++){let N=C/T*Math.PI*2+p(10+C)*.5,M=9+p(20+C)*3,A=f+Math.round(Math.cos(N)*M),U=_+Math.round(Math.sin(N)*M),B=f-A,$=_-U,z=0,O=-1/0;gu.forEach((ot,Ct)=>{let pt=ot[0]*B+ot[1]*$;pt>O&&(O=pt,z=Ct)});let k=e.houses[Math.floor(p(30+C)*e.houses.length)],K=S(k,A,U,z);if(!K)continue;let q=r[k],[st,Z]=$p(q.door[0],q.door[1],q.size[0],q.size[2],z),nt={x:K.x0+st+gu[z][0],z:K.z0+Z+gu[z][1]};L.push({ax:f,az:_,bx:nt.x,bz:nt.z})}d={id:m,x:f,z:_,y:g,biome:v,structures:E,paths:L,villagers:2+Math.floor(p(4)*3)}}}return i.set(m,d),d}function a(l,c,m,d){let p=[];for(let f=Math.floor((c-hi)/dr);f<=Math.floor((d+hi)/dr);f++)for(let _=Math.floor((l-hi)/dr);_<=Math.floor((m+hi)/dr);_++){let v=o(_,f);v&&v.x+hi>=l&&v.x-hi<=m&&v.z+hi>=c&&v.z-hi<=d&&p.push(v)}return p}return{plan:o,around:a,chunk:(l,c)=>a(l*16,c*16,l*16+16-1,c*16+16-1)}}function Jp(n,t,e,i,s,r,o){let a=t*16,l=e*16,c=(_,v)=>_>=a&&_<a+16&&v>=l&&v<l+16,m=i.biome==="desert",d=m?s.desert||{}:{},p=_=>{let v=s.palette[_];if(!v)return null;let g=d[v]||v;return r.byId(g)},f=m?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let v=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let g=0;g<=v;g++){let x=Math.round(_.ax+(_.bx-_.ax)*g/v),E=Math.round(_.az+(_.bz-_.az)*g/v);if(!c(x,E))continue;let L=o.height(x,E),T=xe(x-a,L,E-l);n[T]&&n[T]!==r.water&&(n[T]=r.path);for(let S=L+1;S<Math.min(64,L+4);S++){let C=xe(x-a,S,E-l);(n[C]===r.leaves||n[C]===r.log||S===L+1)&&(n[C]=0)}}}for(let _ of i.structures){let v=s.templates[_.tpl];if(!v)continue;let[g,,x]=v.size;for(let E=0;E<x;E++)for(let L=0;L<g;L++){let[T,S]=$p(L,E,g,x,_.rot),C=_.x0+T,N=_.z0+S;if(!c(C,N))continue;let M=C-a,A=N-l;for(let U=_.y-1;U>Math.max(0,_.y-8);U--){let B=xe(M,U,A);if(n[B]&&n[B]!==r.water)break;n[B]=f}for(let U=_.y+v.size[1];U<Math.min(64,_.y+v.size[1]+3);U++)n[xe(M,U,A)]=0;v.layers.forEach((U,B)=>{let $=(U[E]||"")[L];if(!$||$===" ")return;let z=_.y+B;z>=64||(n[xe(M,z,A)]=$==="."?0:p($)||0)})}}}var Un=24;var jp={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},Kp=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],pr=112;function Qp(n,t,e){let i=z=>t.num(z),s=z=>{try{return i(z)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Ii(n),l=Ii(n+101),c=Ii(n+202),m=Ii(n+303),d=Ii(n+404),p=mu(n+505),f=mu(n+606);function _(z,O){let k=Hi(a,z/190,O/190,3),K=Hi(l,z/55,O/55,4),q=Math.max(0,Hi(c,z/130,O/130,2)-.1),st=27+k*9+K*6+q*q*75;return Math.max(4,Math.min(54,Math.floor(st)))}let v=Ii(n+808);function g(z,O){let k=_(z,O),K=Hi(v,z/900,O/900,2),q=Math.min(1,Math.max(0,(Math.hypot(z,O)-240)/80)),st=Math.min(1,Math.max(0,(-.18-K)/.17)),Z=st*st*(3-2*st)*q;return Z>0&&(k=Math.round(k*(1-Z)+(Un-14)*Z)),k<Un-1?Math.max(3,Math.floor(Un-1-(Un-1-k)*1.8)):k}function x(z,O){let k=(fr(n+3,z,O)-.5)*.025;return{t:Hi(m,z/420,O/420,2)+k,u:Hi(d,z/380,O/380,2)-k}}function E(z,O,k=g(z,O)){if(k<Un-1)return"ocean";let{t:K,u:q}=x(z,O);return K<-.3?"snow":K>.28&&q<.05?"desert":q>.12?"forest":"plains"}let L=null;function T(){if(L)return L;let z=(O,k)=>{let K=g(O,k);return K>=Un+2&&Math.abs(g(O+1,k)-K)<2&&Math.abs(g(O,k+1)-K)<2};for(let O=0;O<400;O+=2)for(let k=0;k<Math.max(1,O*2);k++){let K=k/Math.max(1,O*2)*Math.PI*2,q=Math.round(Math.cos(K)*O),st=Math.round(Math.sin(K)*O);if(z(q,st)&&z(q+3,st+2))return L={x:q+.5,y:g(q,st)+1,z:st+.5,stele:{x:q+3,y:g(q+3,st+2)+1,z:st+2},portal:{x:q-3,y:Math.max(Un+1,g(q-3,st+2))+1,z:st+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function S(z,O){let k=[],K=z*16,q=O*16,st=Math.floor((K-80)/pr),Z=Math.floor((K+16+80)/pr),nt=Math.floor((q-80)/pr),ot=Math.floor((q+16+80)/pr);for(let Ct=nt;Ct<=ot;Ct++)for(let pt=st;pt<=Z;pt++){let St=xt=>Vn(n+707,pt,xt,Ct);if(St(0)>.25)continue;let gt=(pt+St(1))*pr,yt=(Ct+St(2))*pr,W=St(3)*Math.PI,et=40+St(4)*30;k.push({ax:gt-Math.cos(W)*et/2,az:yt-Math.sin(W)*et/2,dx:Math.cos(W)*et,dz:Math.sin(W)*et,len:et,floor:7+Math.floor(St(5)*6),w:1.6+St(6)*1.2})}return k}function C(z,O){let k=new Uint8Array(16384),K=z*16,q=O*16,st=18,Z=new Int16Array(st*st);for(let gt=-1;gt<=16;gt++)for(let yt=-1;yt<=16;yt++)Z[(gt+1)*st+yt+1]=g(K+yt,q+gt);let nt=T(),ot=new Array(256);for(let gt=0;gt<16;gt++)for(let yt=0;yt<16;yt++){let W=K+yt,et=q+gt,xt=Z[(gt+1)*st+yt+1],zt=Math.max(Math.abs(Z[(gt+1)*st+yt]-xt),Math.abs(Z[(gt+1)*st+yt+2]-xt),Math.abs(Z[gt*st+yt+1]-xt),Math.abs(Z[(gt+2)*st+yt+1]-xt))>=3,mt=ot[gt*16+yt]=E(W,et,xt),at=xt<=Un+1,ae,Lt;mt==="ocean"||at||mt==="desert"?(ae=r.sand,Lt=r.sand):zt?(ae=r.stone,Lt=r.stone):mt==="snow"?(ae=r.snow,Lt=r.dirt):(ae=r.grass,Lt=r.dirt);for(let Qt=0;Qt<=xt;Qt++){let re;if(Qt===0?re=r.bedrock:Qt===xt?re=ae:Qt>=xt-3?re=Lt:mt==="desert"&&Qt>=xt-7?re=r.sandstone:re=r.stone,re===r.stone&&zt&&Qt>=xt-4){let Jt=Vn(n,W,Qt,et);Jt<.06?re=r.coal:Jt<.09?re=r.iron:Jt<.096&&(re=r.ruby)}k[xe(yt,Qt,gt)]=re}for(let Qt=xt+1;Qt<=Un;Qt++)k[xe(yt,Qt,gt)]=Qt===Un&&mt==="snow"?r.ice:r.water}N(k,z,O,Z,st);for(let gt=0;gt<Kp.length;gt++){let yt=Kp[gt],W=r[yt.ore];for(let et=0;et<yt.count;et++){let xt=ae=>Vn(n+31*gt+ae,z*977+et,ae,O*131+et);if(xt(9)>yt.chance)continue;let zt=Math.floor(xt(1)*16),mt=yt.y0+Math.floor(xt(2)*(yt.y1-yt.y0)),at=Math.floor(xt(3)*16);for(let ae=0;ae<yt.size;ae++){zt>=0&&zt<16&&at>=0&&at<16&&mt>0&&mt<64&&k[xe(zt,mt,at)]===r.stone&&(k[xe(zt,mt,at)]=W);let Lt=Math.floor(xt(10+ae)*6);Lt===0?zt++:Lt===1?zt--:Lt===2?mt++:Lt===3?mt--:Lt===4?at++:at--}}}let Ct=e?$.chunk(z,O):[];M(k,z,O,Z,st,ot,nt,Ct);for(let gt of Ct)Jp(k,z,O,gt,e,r,B);let pt=nt.stele;if(Math.floor(pt.x/16)===z&&Math.floor(pt.z/16)===O){let gt=pt.x-K,yt=pt.z-q;k[xe(gt,pt.y,yt)]=r.stele,k[xe(gt,pt.y+1,yt)]=r.stele}let St=nt.portal;if(r.portal&&St&&Math.floor(St.x/16)===z&&Math.floor(St.z/16)===O){let gt=St.x-K,yt=St.z-q;for(let W=Math.max(1,St.y-3);W<St.y;W++)(!k[xe(gt,W,yt)]||k[xe(gt,W,yt)]===r.water)&&(k[xe(gt,W,yt)]=r.stone);k[xe(gt,St.y,yt)]=r.portal,k[xe(gt,St.y+1,yt)]=r.portal}return k}function N(z,O,k,K,q){let st=O*16,Z=k*16,nt=4,ot=16/nt+1,Ct=64/nt+1,pt=new Float32Array(ot*ot*Ct);for(let yt=0;yt<Ct;yt++)for(let W=0;W<ot;W++)for(let et=0;et<ot;et++){let xt=st+et*nt,zt=yt*nt,mt=Z+W*nt,at=p(xt/22,zt/14,mt/22)-.5,ae=f(xt/22,zt/14,mt/22)-.5;pt[(yt*ot+W)*ot+et]=at*at+ae*ae}let St=(yt,W,et)=>pt[(W*ot+et)*ot+yt],gt=S(O,k);for(let yt=0;yt<16;yt++)for(let W=0;W<16;W++){let et=K[(yt+1)*q+W+1],xt=et<=Un+1,zt=xt?et-5:et,mt=W>>2,at=yt>>2,ae=(W&3)/nt,Lt=(yt&3)/nt;for(let Jt=3;Jt<=zt;Jt++){let se=Jt>>2,Ve=(Jt&3)/nt,Xe=St(mt,se,at)+(St(mt+1,se,at)-St(mt,se,at))*ae,we=St(mt,se,at+1)+(St(mt+1,se,at+1)-St(mt,se,at+1))*ae,Ie=St(mt,se+1,at)+(St(mt+1,se+1,at)-St(mt,se+1,at))*ae,H=St(mt,se+1,at+1)+(St(mt+1,se+1,at+1)-St(mt,se+1,at+1))*ae;if((Xe+(we-Xe)*Lt)*(1-Ve)+(Ie+(H-Ie)*Lt)*Ve<.008){let me=xe(W,Jt,yt);z[me]!==r.bedrock&&z[me]!==r.water&&(z[me]=0)}}if(!gt.length||xt)continue;let Qt=st+W,re=Z+yt;for(let Jt of gt){let se=Math.max(0,Math.min(1,((Qt-Jt.ax)*Jt.dx+(re-Jt.az)*Jt.dz)/(Jt.len*Jt.len))),Ve=Jt.ax+Jt.dx*se,Xe=Jt.az+Jt.dz*se,we=Math.hypot(Qt-Ve,re-Xe),Ie=Jt.w*Math.sin(Math.PI*se);if(we<Ie)for(let H=Jt.floor+Math.floor(we*2);H<=et;H++){let He=xe(W,H,yt);z[He]!==r.water&&(z[He]=0)}}}}function M(z,O,k,K,q,st,Z,nt){let ot=O*16,Ct=k*16;for(let pt=0;pt<16;pt++)for(let St=0;St<16;St++){let gt=ot+St,yt=Ct+pt,W=K[(pt+1)*q+St+1],et=st[pt*16+St];if(W+1>=64||Math.hypot(gt-Z.x,yt-Z.z)<48)continue;let xt=z[xe(St,W,pt)],zt=xe(St,W+1,pt);if(z[zt])continue;let mt=fr(n+11,gt,yt),at=fr(n+13,gt,yt);xt===r.grass?mt<.012&&o.length?z[zt]=o[Math.floor(at*o.length)]:mt<(et==="plains"?.1:.05)&&r.tallgrass?z[zt]=r.tallgrass:et==="forest"&&mt<.08&&r.fern?z[zt]=r.fern:et==="forest"&&mt<.084&&r.mushR&&(z[zt]=at<.5?r.mushR:r.mushB):xt===r.sand&&et==="desert"&&W>Un+1&&mt<.008&&r.deadbush&&(z[zt]=r.deadbush)}for(let pt=2;pt<14;pt++)for(let St=2;St<14;St++){let gt=ot+St,yt=Ct+pt,W=K[(pt+1)*q+St+1],et=st[pt*16+St],xt=z[xe(St,W,pt)];if(Math.abs(gt-Z.x)<7&&Math.abs(yt-Z.z)<7||nt.some(ae=>Math.abs(gt-ae.x)<hi+2&&Math.abs(yt-ae.z)<hi+2))continue;let zt=fr(n+7,gt,yt),mt=fr(n+9,gt,yt);if(et==="desert"&&xt===r.sand&&W>Un+1&&zt<.008&&r.cactus){let ae=1+Math.floor(mt*3);for(let Lt=W+1;Lt<=W+ae&&Lt<64;Lt++)z[xe(St,Lt,pt)]=r.cactus;continue}if(et==="snow"&&xt===r.snow&&zt<.02){U(z,St,pt,W,5+Math.floor(mt*3));continue}let at=et==="forest"?.035:et==="plains"?.003:0;xt===r.grass&&zt<at&&A(z,St,pt,W,gt,yt,4+Math.floor(mt*2))}}function A(z,O,k,K,q,st,Z){let nt=K+Z;if(!(nt+2>=64)){for(let ot=nt-2;ot<=nt+1;ot++){let Ct=ot>=nt?1:2;for(let pt=-Ct;pt<=Ct;pt++)for(let St=-Ct;St<=Ct;St++){if(Ct===2&&Math.abs(St)===2&&Math.abs(pt)===2&&Vn(n,q+St,ot,st+pt)<.6)continue;let gt=xe(O+St,ot,k+pt);z[gt]===r.air&&(z[gt]=r.leaves)}}z[xe(O,K,k)]=r.dirt;for(let ot=K+1;ot<=nt;ot++)z[xe(O,ot,k)]=r.log}}function U(z,O,k,K,q){let st=K+q;if(!(st+2>=64)){for(let Z=K+2;Z<=st+1;Z++){let nt=st+1-Z,ot=nt>=4?2:nt>=1?1:0;for(let Ct=-ot;Ct<=ot;Ct++)for(let pt=-ot;pt<=ot;pt++){if(ot===2&&Math.abs(pt)+Math.abs(Ct)>3)continue;let St=xe(O+pt,Z,k+Ct);z[St]===r.air&&(z[St]=r.sleaves)}}z[xe(O,K,k)]=r.dirt;for(let Z=K+1;Z<=st;Z++)z[xe(O,Z,k)]=r.slog}}let B={height:g,baseHeight:_,biomeOf:E,climate:x,genChunk:C,findSpawn:T,SEA:Un},$=Zp(n,B,e);return B.villages=$,B}function _u(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,m=t,d=t+s,p=e-a,f=e+a,_=Math.floor(l),v=Math.floor(c-1e-6),g=Math.floor(m),x=Math.floor(d-1e-6),E=Math.floor(p),L=Math.floor(f-1e-6),T=!1;for(let S=g;S<=x;S++)for(let C=E;C<=L;C++)for(let N=_;N<=v;N++){let M=r(N,S,C);if(!M)continue;let A=M===!0?UM:M;for(let U of A){let B=N+U[0],$=S+U[1],z=C+U[2],O=N+U[3],k=S+U[4],K=C+U[5];if(!(O<=l+1e-6||B>=c-1e-6||k<=m+1e-6||$>=d-1e-6||K<=p+1e-6||z>=f-1e-6)){if(!o)return!0;T=!0,o.push([B,$,z,O,k,K])}}}return T}var UM=[[0,0,0,1,1,1]],bo=(n,t,e,i,s,r)=>_u(n,t,e,i,s,r,null),tm=(n,t,e=.6,i=1.8)=>!bo(n.x,n.y,n.z,e,i,t);function sc(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,m=0,d=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,p=Math.max(1,Math.ceil(d/.3)),f=e/p,_=[];for(let v=0;v<p;v++){let g=t.y*f;g&&(_.length=0,_u(n.x,n.y+g,n.z,r,o,i,_)?(g<0?(n.y=Math.max(..._.map(x=>x[4])),c=!0):n.y=Math.min(..._.map(x=>x[1]))-o,t.y=0):n.y+=g);for(let x of["x","z"]){let E=t[x]*f;if(!E)continue;let L={x:n.x,y:n.y,z:n.z};if(L[x]+=E,_.length=0,!_u(L.x,L.y,L.z,r,o,i,_)){n[x]=L[x];continue}if(a&&(c||s.grounded)){let S=Math.max(..._.map(C=>C[4]));if(S-n.y>0&&S-n.y<=1.01&&!bo(L.x,S,L.z,r,o,i)&&!bo(n.x,S,n.z,r,o,i)){m+=S-n.y,n.y=S,n[x]=L[x];continue}}let T=x==="x"?0:2;n[x]=E>0?Math.min(..._.map(S=>S[T]))-l-1e-4:Math.max(..._.map(S=>S[T+3]))+l+1e-4,bo(n.x,n.y,n.z,r,o,i)&&(n[x]=L[x]-E),t[x]=0}}return!c&&t.y<=0&&bo(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:m}}function FM(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let m=[e+c[0],i+c[1],s+c[2]],d=[e+c[3],i+c[4],s+c[5]],p=0,f=1/0,_=-1,v=!0;for(let g=0;g<3&&v;g++){if(Math.abs(a[g])<1e-12){(o[g]<m[g]||o[g]>d[g])&&(v=!1);continue}let x=(m[g]-o[g])/a[g],E=(d[g]-o[g])/a[g];x>E&&([x,E]=[E,x]),x>p&&(p=x,_=g),E<f&&(f=E),p>f&&(v=!1)}if(v&&(!l||p<l.t)){let g=[0,0,0];_>=0&&(g[_]=-Math.sign(a[_])),l={t:p,face:_>=0?g:null}}}return l}function mr(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),m=Math.sign(t.y),d=Math.sign(t.z),p=c?Math.abs(1/t.x):1/0,f=m?Math.abs(1/t.y):1/0,_=d?Math.abs(1/t.z):1/0,v=c?(c>0?o+1-n.x:n.x-o)*p:1/0,g=m?(m>0?a+1-n.y:n.y-a)*f:1/0,x=d?(d>0?l+1-n.z:n.z-l)*_:1/0,E=[0,0,0],L=0;for(;L<=e;){let T=i(o,a,l);if(T&&s(T)){let S=r&&r(T);if(!S)return{x:o,y:a,z:l,n:T,face:E,dist:L};let C=FM(n,t,o,a,l,S);if(C&&C.t<=e)return{x:o,y:a,z:l,n:T,face:C.face||E,dist:C.t}}v<g&&v<x?(o+=c,L=v,v+=p,E=[-c,0,0]):g<x?(a+=m,L=g,g+=f,E=[0,-m,0]):(l+=d,L=x,x+=_,E=[0,0,-d])}return null}var wu={};xi(wu,{ACC:()=>im,BOOST:()=>yu,BRAKE:()=>rm,CONN:()=>ui,DECAY:()=>om,DIR:()=>wo,FRIC:()=>sm,MAX:()=>So,OPP:()=>xr,SLOPE_G:()=>vu,UP:()=>Pi,blockId:()=>Ao,connect:()=>oc,isStraight:()=>Mu,linked:()=>am,mount:()=>bu,next:()=>To,pos:()=>ac,shapeOf:()=>gr,step:()=>Su});var ui={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Pi={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},wo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},xr={n:"s",s:"n",e:"w",w:"e"},OM=["ns","ew","ne","nw","se","sw"],em={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},im=3,So=6,yu=11,sm=.8,rm=6,om=1.5,vu=2.5,Mu=n=>n==="ns"||n==="ew"||!!Pi[n],Ao=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),rc=(n,t)=>ui[n].find(e=>e!==t);function gr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":OM.find(e=>ui[e].includes(n)&&ui[e].includes(t))||null}function To(n,t,e,i,s,r){let[o,a]=wo[s];for(let l of Pi[r]===s?[1]:[0,-1]){let c=n(t+o,e+l,i+a);if(c&&ui[c.shape].includes(xr[s])&&Pi[c.shape]===xr[s]==(l===-1))return{x:t+o,y:e+l,z:i+a,r:c}}return null}function am(n,t,e,i){let s=n(t,e,i);return s?ui[s.shape].filter(r=>To(n,t,e,i,r,s.shape)):[]}function nm(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===xr[e]?"asc_"+e:null}return n.length===2?gr(n[0].d,n[1].d):gr(n[0].d)}function oc(n,t,e,i,s,r="n"){let o=[];for(let c of["n","e","s","w"]){let[m,d]=wo[c],p=xr[c];for(let f of[0,1,-1]){let _=t+m,v=e+f,g=i+d,x=n(_,v,g);if(!x)continue;if(ui[x.shape].includes(p)&&Pi[x.shape]===p==(f===-1)){o.push({d:c,dy:f,pri:0});break}let E=am(n,_,v,g);if(E.length>=2)continue;let L=null;if(f===-1?L=!E.length||E[0]===c?"asc_"+p:null:Pi[x.shape]&&E.includes(Pi[x.shape])||(L=E.length?gr(E[0],p):gr(p)),L&&(!x.powered||Mu(L))){o.push({d:c,dy:f,pri:1,ns:L,at:[_,v,g]});break}}}o.sort((c,m)=>c.pri-m.pri);let a=[];for(let c of o){if(a.length===2)break;let m=nm(a.concat([c]));!m||s&&!Mu(m)||a.push(c)}return{shape:a.length?nm(a):gr(r),updates:a.filter(c=>c.pri===1).map(c=>[c.at[0],c.at[1],c.at[2],c.ns])}}function bu(n,t,e,i,s,r,o=()=>!1){let a=ui[n],l=m=>wo[m][0]*s+wo[m][1]*r+(o(m)?.01:0),c=l(a[0])>=l(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:c===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function Su(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,ui[s.shape].includes(n.from)||(n.from=ui[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=rc(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,yu)),e>.1?n.v<So&&(n.v=Math.min(So,n.v+im*t)):e<-.1?n.v=Math.max(0,n.v-rm*t):n.v=Math.max(0,n.v-sm*t),n.v>So&&!s.powered&&(n.v=Math.max(So,n.v-om*t)),Pi[s.shape]&&(n.v+=(rc(s.shape,n.from)===Pi[s.shape]?-vu:vu)*t,n.v<0&&(n.from=rc(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=rc(s.shape,n.from),o=To(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=xr[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,yu));else{n.s=1,n.v=0;break}}return n}function ac(n){let t=ui[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=em[e],r=em[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[l,c,m]=a<.5?[s,o,a*2]:[o,r,a*2-1],d=l[0]+(c[0]-l[0])*m,p=l[1]+(c[1]-l[1])*m,f=Pi[n.shape],_=f?f==="n"?1-p:f==="s"?p:f==="e"?d:1-d:0,v=f?i===f?1:-1:0;return{x:n.x+d,y:n.y+_,z:n.z+p,yaw:Math.atan2(-(c[0]-l[0]),-(c[1]-l[1])),pitch:Math.atan2(v,1)*(f?1:0)}}var Ru={};xi(Ru,{WINDOW:()=>BM,create:()=>Au,reel:()=>Eu,roll:()=>Cu,tick:()=>Tu});var BM=1.3,lm=n=>3+n()*6;function Au(n=Math.random){return{phase:"wait",t:0,biteAt:lm(n),rnd:n}}function Tu(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=lm(n.rnd),"escape"):null}var Eu=n=>n&&n.phase==="bite"?"catch":"early";function Cu(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function cm(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function hm(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function um(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var fm=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function dm(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function pm(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[xe(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var mm=n=>btoa(String.fromCharCode.apply(null,n)),gm=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var kM=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],lc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=kM(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,gm(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=pm(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[l,c]=qp(r);for(let[m,d]of[...this.portals])Math.floor(d.x/16)===l&&Math.floor(d.z/16)===c&&this.portals.delete(m);for(let m=0;m<256;m++){let d=this.reg.get(a[m]);if(d&&(d.interact==="portal"||d.interact==="shadow_portal")){let p=l*16+m%16,f=c*16+Math.floor(m/16);this.portals.set(p+","+f,{x:p,z:f,name:d.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],l=o*4,c=.95+(o*2654435761>>>28)/16*.1;r.data[l]=a[0]*c,r.data[l+1]=a[1]*c,r.data[l+2]=a[2]*c,r.data[l+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,l=i-o/2/s,c=e+r/2/s,m=i+o/2/s;for(let d=Math.floor(l/16);d<=Math.floor(m/16);d++)for(let p=Math.floor(a/16);p<=Math.floor(c/16);p++){let f=this.tile(Ri(p,d));f&&t.drawImage(f,Math.round((p*16-a)*s),Math.round((d*16-l)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:l}}explored(t,e){return this.tops.has(Ri(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=mm(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function Iu(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var Du={};xi(Du,{ARENA_R:()=>Eo,H0:()=>fi,LAIR:()=>di,findFrame:()=>Lu,makeShadowTerrain:()=>Pu});var fi=22,di={x:0,z:40},Eo=14;function Pu(n,t){let e=d=>t.num(d),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Ii(n+11),r=Ii(n+23),o=(d,p)=>d<p?1:d<p+8?1-(d-p)/8:0;function a(d,p){let f=fi+Hi(s,d/64,p/64,3)*10,_=Math.max(o(Math.hypot(d-.5,p-.5),9),o(Math.hypot(d-di.x,p-di.z),Eo+2));return f=f*(1-_)+fi*_,Math.max(6,Math.min(54,Math.round(f)))}let l=new Set;for(let d=0;d<8;d++)l.add(Math.round(di.x+Math.cos(d*Math.PI/4)*Eo)+","+Math.round(di.z+Math.sin(d*Math.PI/4)*Eo));function c(d,p){let f=new Uint8Array(16384),_=d*16,v=p*16;for(let g=0;g<16;g++)for(let x=0;x<16;x++){let E=_+x,L=v+g,T=a(E,L),S=Math.hypot(E-.5,L-.5),C=Math.hypot(E-di.x,L-di.z);for(let N=0;N<=T;N++){let M=N===0?i.bedrock:N===T?i.moss:i.stone;if(M===i.stone){let A=Vn(n,E,N,L);N<16&&A<.014?M=i.ore:A>.995&&(M=i.vein)}f[xe(x,N,g)]=M}if(S>6&&Math.abs(r(E/30,L/30))<.035&&(f[xe(x,T,g)]=i.vein),C<Eo-1&&(f[xe(x,T,g)]=(Math.floor(E)+Math.floor(L))%2?i.bricks:i.stone),l.has(E+","+L)){for(let N=T+1;N<=T+4;N++)f[xe(x,N,g)]=i.bricks;f[xe(x,T+5,g)]=i.vein}if(L===0&&E>=-1&&E<=2)for(let N=fi+1;N<=fi+5;N++){let M=E>=0&&E<=1&&N>=fi+2&&N<=fi+4;f[xe(x,N,g)]=M?i.portal:i.frame}}return f}let m={x:1,y:fi+1,z:2.5,stele:{x:1,y:fi+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:c,findSpawn:()=>m,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function Lu(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let l=-4;l<=1;l++){let c=t+o[0]*a,m=i+o[1]*a,d=e+l,p=(v,g)=>[c+o[0]*v,d+g,m+o[1]*v],f=[];for(let v=0;v<2;v++)for(let g=0;g<3;g++)f.push(p(v,g));if(!f.every(v=>r(n(v[0],v[1],v[2]))))continue;let _=[];for(let v=0;v<3;v++)_.push(p(-1,v),p(2,v));for(let v=0;v<2;v++)_.push(p(v,-1),p(v,3));if(_.every(v=>n(v[0],v[1],v[2])===s)&&_.some(v=>v[0]===t&&v[1]===e&&v[2]===i))return f}return null}var Bu={};xi(Bu,{HOTBAR:()=>Nu,SIZE:()=>cc,add:()=>An,canAdd:()=>Io,count:()=>pi,craft:()=>Fu,craftable:()=>uc,createInventory:()=>Co,deserialize:()=>hc,moveBetween:()=>Ou,moveSlot:()=>Uu,remove:()=>Ro,serialize:()=>Po,takeFromSlot:()=>jn});var cc=36,Nu=9;function Co(n=36){return{slots:new Array(n).fill(null)}}function An(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function pi(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Ro(n,t,e){if(pi(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function jn(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Uu(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Io(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return An(s,t,e,i)===0}var Po=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function hc(n,t=36){let e=Co(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function uc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(pi(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Fu(n,t,e=()=>64,i){let s=uc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Ro(n,o,t.in[o]);return An(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function Ou(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function VM(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var _r=(n,t)=>n.owned.includes(t),xm=(n,t)=>n?t?2:1:0;function Hn(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Cs(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function _m(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function ym(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&_r(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Cs(n,e.price),n.owned.push(e.id),{ok:!0}):Io(t,e.id,e.qty,i)?(Cs(n,e.price),An(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var vm=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Mm(n){let t=VM(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function Sm(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function wm(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Hn(n,s),canSpend:s=>n.coins>=s,spend:async s=>Cs(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function Am(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var Wu={};xi(Wu,{createStory:()=>zu,currentMain:()=>Vu,dailyPicks:()=>Tm,dailyProgress:()=>Gu,restartTutorial:()=>ku,skipTutorial:()=>fc,tick:()=>Hu});function zu(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function Tm(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var ku=n=>{n.tut={step:0,base:null,done:!1}},fc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},Vu=(n,t)=>t.main[n.main]||null;function Hu(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=Tm(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(l=>l.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var Gu=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var Do=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],Lo=100,Em={choice:25,typed:40},WM=5,Xu=100;function Cm(){return{phase:0,hp:Lo,retry:[],done:!1}}function Rm(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(Lo,n.hp+WM),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?Em.typed:Em.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<Do.length-1?(n.phase++,n.hp=Lo,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var qu=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function qM(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new Zn(n);return e.colorSpace=rn,e}function Im(){let n=new mn,t=[],e=(a,l)=>{let c=new bn({color:a});return c.userData.base=new ce(a),c.userData.role=l,t.push(c),c},i=(a,l,c,m,d,p,f,_,v=n)=>{let g=new Be(new en(a,l,c),e(m,d));return g.position.set(p,f,_),v.add(g),g},s=qu[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new Be(new en(1.15,.72,.02),new bn({map:qM(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let l=new mn;return l.position.set(a*1,1.9,.2),n.add(l),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,l).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,l),l});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function Pm(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function Lm(n,t){let e=qu[Math.min(qu.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function YM(){return new Map}function Dm(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Yu(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function $M(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function Nm(n){let t=YM();for(let e in n||{})t.set(e,$M(n[e]));return t}var dc=16;var LA=18;var Wi=32;function Um(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var tn=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],bt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function ZM(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function ee(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Gi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}ee(n,o)}var JM=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function KM(n,t){let e=tn(t.color),i=Um(ZM(t.block+t.face)),s=Wi;if(JM.has(t.pattern)){jM(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=bt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?tn(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=bt(e,1.12);for(let d=0;d<4;d++)Gi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=bt(e,.96);for(let d=0;d<4;d++)Gi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let d=tn(t.top);n.fillStyle=bt(d);let p=[[0,0],[s,0]];for(let f=s;f>=0;f-=4)p.push([f,8+Math.round(i()*5)]);ee(n,p)}if(o==="stone"||o==="bedrock")for(let d=0;d<5;d++)n.fillStyle=bt(e,i()<.5?.9:1.08),Gi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let d=0;d<4;d++)n.fillStyle=bt(e,.92),Gi(n,i,i()*s,i()*s,5);n.fillStyle=bt(a);for(let d=0;d<5;d++)Gi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let d=0;d<26;d++)n.fillStyle=bt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let d=3;d<s;d+=7)n.fillStyle=bt(e,.82),n.fillRect(d,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=bt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let d=0;d<9;d++)n.fillStyle=bt(e,i()<.5?.78:1.15),Gi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.78),n.fillRect(0,d,s,1);n.fillStyle=bt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=bt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=bt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=bt([185,182,174]),ee(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=bt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",ee(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=bt(e,1.18,.72);for(let d=6;d<s;d+=10)n.fillRect(4+Math.floor(i()*10),d,10,2)}if(o==="gold"&&(n.fillStyle=bt(e,1.15),ee(n,[[0,0],[s,0],[0,s]]),n.fillStyle=bt(e,.9),ee(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=bt(tn("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=bt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=bt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=bt(tn("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=bt(tn("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=bt(a),n.fillRect(14,0,4,4)):(n.fillStyle=bt(tn(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=bt(a),n.fillRect(0,0,s,10),n.fillStyle=bt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=bt(tn("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=bt(a),n.fillRect(0,0,9,14))),o==="wool")for(let d=0;d<7;d++)n.fillStyle=bt(e,i()<.5?.94:1.04),Gi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=bt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(a,1.3),ee(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=bt(tn("#EFEBDD"),1,.8),ee(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=bt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let d=8;d<s;d+=9)n.fillStyle=bt(e,.9),n.fillRect(0,d,s,2);if(o==="cactus")if(t.face==="side"){for(let d=4;d<s;d+=8)n.fillStyle=bt(e,.82),n.fillRect(d,0,2,s);n.fillStyle=bt(tn("#EFEBDD"),1,.7);for(let d=0;d<6;d++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",ee(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",ee(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=bt(e,1.1),ee(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=bt(e,.92),ee(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=bt(e,.78);for(let d=0;d<s;d+=8){n.fillRect(0,d+7,s,1);let p=d/8%2?0:8;for(let f=p;f<s;f+=16)n.fillRect(f,d,1,8)}}if(o==="mossy"){n.fillStyle=bt(a);for(let d=0;d<6;d++)Gi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=bt(e,.6),ee(n,[[4,2],[12,14],[10,15],[3,4]]),ee(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=bt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=bt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=bt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=bt(e,1.08),ee(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=bt(tn("#D9CBB5"));for(let d=0;d<s;d+=8){n.fillRect(0,d+6,s,2);let p=d/8%2?0:8;for(let f=p;f<s;f+=16)n.fillRect(f,d,2,6)}}if(o==="checker"&&(n.fillStyle=bt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let d=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let p of[3,18]){let f=3;for(;f<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=d[Math.floor(i()*d.length)],n.fillRect(f,p+Math.floor(i()*3),_,11),f+=_+1}}n.fillStyle=bt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.8),n.fillRect(0,d,s,1);if(o==="hay")if(t.face==="side"){for(let d=3;d<s;d+=5)n.fillStyle=bt(e,.88),n.fillRect(d,0,1,s);n.fillStyle=bt(tn("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=bt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let d=5;d<s;d+=6)n.fillStyle=bt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=bt(tn("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=bt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=bt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=bt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),ee(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=bt(tn("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=bt(tn("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=bt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=bt(e),n.fillRect(0,0,s,s),n.fillStyle=bt(tn("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.85),n.fillRect(0,d,s,1);t.face==="side"&&(n.fillStyle=bt(a),n.fillRect(0,11,s,3),n.fillStyle=bt(tn("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let d=3;d<s;d+=6)n.fillStyle=bt(e,.72),n.fillRect(0,d,s,2);if(o==="furnace"){for(let d=0;d<4;d++)n.fillStyle=bt(e,i()<.5?.9:1.08),Gi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=bt(a),n.fillRect(8,15,s-16,11),n.fillStyle=bt(tn("#E0352B"),1,.85),ee(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=bt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=bt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=bt(a),ee(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let d=0;d<c.length;d+=4){let p=1+(i()-.5)*.09;c[d]=Math.min(255,c[d]*p),c[d+1]=Math.min(255,c[d+1]*p),c[d+2]=Math.min(255,c[d+2]*p)}n.putImageData(l,0,0);let m=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=m,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function Fm(n){let t=document.createElement("canvas");t.width=t.height=Wi*dc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Wi;let a=o.getContext("2d",{willReadFrequently:!0});KM(a,s),e.drawImage(o,r%dc*Wi,Math.floor(r/dc)*Wi),i[r]=o}),{canvas:t,tileCanvas:i}}function Om(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",ee(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",ee(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Wi,l=(c,m,d,p,f,_,v,g)=>{r.setTransform(m*a,d*a,p*a,f*a,_,v),r.drawImage(o[c],0,0),g&&(r.fillStyle=`rgba(20,24,20,${g})`,r.fillRect(0,0,Wi,Wi))};l(i.tile.top,20,10,-20,10,24,4,0),l(i.tile.side,20,10,0,22,4,14,.12),l(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,l="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,ee(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",ee(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,ee(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",ee(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,ee(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",ee(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,ee(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[c,m]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(c,m,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let c=0;c<4;c++)ee(r,[[0,-18+c*5],[-5,-14+c*5],[0,-12+c*5]]),ee(r,[[0,-18+c*5],[5,-14+c*5],[0,-12+c*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let c of[-8,0,8])r.fillRect(c-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,ee(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,ee(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,ee(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,ee(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),ee(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",ee(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),ee(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",ee(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,ee(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",ee(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=l,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,ee(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",ee(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let c of[-8,8])r.beginPath(),r.arc(c,10,4,0,7),r.fill()}else o==="saddle"?(r.fillStyle=a,ee(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3)):o==="gem"?(r.fillStyle=a,ee(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",ee(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:l,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&ee(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&ee(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),ee(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=l,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",ee(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",ee(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function Bm(){let n=Um(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Wi;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,l=6+n()*20,c=n()*Math.PI;ee(r,[[a,l],[a+Math.cos(c)*9,l+Math.sin(c)*9],[a+Math.cos(c+.3)*6,l+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function jM(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?tn(t.accent):e,a=(l,c,m)=>{n.fillStyle=m,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,bt(e)),n.fillStyle=bt(e,1.1),ee(n,[[16,26],[9,20],[15,22]]),ee(n,[[17,24],[24,18],[18,21]]),n.fillStyle=bt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;ee(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=bt(tn("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),m=14+Math.floor(i()*14);n.fillStyle=bt(e,i()<.5?.9:1.1),ee(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-m]])}else if(r==="deadbush")n.strokeStyle=bt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=bt(e),n.fillRect(14,18,4,14),n.fillStyle=bt(o),ee(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=bt(tn("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=bt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=bt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let m=0;m<5;m++){let d=5+m*5;n.fillStyle=bt(e),n.fillRect(d,s-c,2,c),l===3&&(n.fillStyle=bt(o),ee(n,[[d-2,s-c+9],[d+1,s-c-1],[d+4,s-c+9]]))}}else if(r==="rail"){let l=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[l];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let m=bt(tn("#8C6640")),d=bt(e),p=s*.33,f=s*.67;if(l==="ns"||l==="ew"){n.fillStyle=m;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=d,n.fillRect(p-1.5,0,3,s),n.fillRect(f-1.5,0,3,s),t.accent&&(n.fillStyle=bt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=m,n.lineWidth=3;for(let _=0;_<5;_++){let v=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(v)*(s-f-4),Math.sin(v)*(s-f-4)),n.lineTo(s+Math.cos(v)*(s-p+4),Math.sin(v)*(s-p+4)),n.stroke()}n.strokeStyle=d;for(let _ of[s-p,s-f])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=bt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var zm=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,km=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function QM(n,t){let e=Vi(n),i=Vi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,m=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,m)<=14&&s.push([e+o,i+r])}return s}function Hm(n){let t=new Zn(n);t.magFilter=on,t.minFilter=on,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new J(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new Sn({uniforms:e,vertexShader:zm,fragmentShader:km}),s=new Sn({uniforms:e,vertexShader:zm,fragmentShader:km,transparent:!0,depthWrite:!1,side:Jn});return{opaque:i,trans:s,uniforms:e,tex:t}}function Vm(n){let t=new cn;return t.setAttribute("position",new je(n.pos,3)),t.setAttribute("uv",new je(n.uv,2)),t.setAttribute("light",new je(n.light,1)),t.setAttribute("lt",new je(n.lt,2,!0)),t.setIndex(new je(n.index,1)),t.computeBoundingSphere(),t}var pc=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Ri(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Be(Vm(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Be(Vm(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Vi(t),s=Vi(e),r=Yp(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=Ri(l.cx,l.cz);if(this.chunks.has(c))continue;let m={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,m),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:m.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let m=c.cx-i,d=c.cz-s;if(m*m+d*d>o*o){for(let p of["o","t"])c[p]&&(this.scene.remove(c[p]),c[p].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,m]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(m-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(Ri(Vi(t),Vi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=du(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Ri(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=du(t,e,i);if(!r)return!1;let o=Ri(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,Dm(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[m,d]of QM(l,c))this.dirtyMesh.add(Ri(m,d));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var $u="hw_world",No=null;function Gm(n){n!==$u&&($u=n,No=null)}function Wm(){return No||(No=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open($u,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),No)}function Zu(n,t){return Wm().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var Ju=n=>Zu("readonly",t=>t.get(n)),Ku=n=>Zu("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Xm(n){let t=await Wm();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function qm(n){let t={};for(let e of n){let i=await Ju(e);i!==void 0&&(t[e]=i)}await Zu("readwrite",e=>e.clear()),await Ku(t)}function P(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Xi=n=>document.querySelector(n);var eb="../../",nb=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],ju=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],mc=null;function ib(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Qu(){return mc||(mc=(async()=>{for(let t of nb)await ib(eb+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw mc=null,n})),mc}async function $m(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=P("div",{class:"panel quiz"});n.append(r),r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:p},"\xD7")),P("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await Qu()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,l=[],c=0,m=0,d=0;function p(){n.hidden=!0,n.innerHTML="",i&&i()}function f(){l=o.buildQuiz({modules:["words","phrases","grammar","patterns"],types:ju,lv:1,count:s}),l.length||(l=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),c=0,m=0,d=0,_()}function _(){r.innerHTML="";let x=l[c],E=a.isTyped(x);n._q=x;let L=P("div",{class:"fb"}),T=P("div",{class:"q-body"});r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",P("small",{},`\u7B2C ${c+1} / ${l.length} \u984C`)),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:p},"\xD7")),P("div",{class:"q-type"},(a.TYPES[x.type]||"\u984C\u76EE")+(E?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),P("div",{class:"q-prompt"+(x.en?" en":"")},x.prompt),x.sub?P("div",{class:"q-sub"},x.sub):null,T,L);let S=!1,C=N=>{if(S)return;S=!0;let M=xm(N,E);e&&e(N),N&&(d++,m+=M,t&&t(M)),L.className="fb "+(N?"ok":"bad"),L.append(P("div",{},N?`\u7B54\u5C0D\u4E86\uFF01 +${M} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",N?null:P("b",{class:"en"},x.answer)),!N&&x.why?P("div",{class:"why"},x.why):null,P("button",{class:"btn",onclick:v},c+1<l.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(x.input==="type"){let N=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),M=()=>{S||!N.value.trim()||C(o.check(x,N.value).ok)};N.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"&&M()}),T.append(P("div",{class:"typerow"},N,P("button",{class:"btn",onclick:M},"\u9001\u51FA"))),setTimeout(()=>N.focus(),50)}else{let N=P("div",{class:"opts"});(x.options||[]).forEach(M=>N.append(P("button",{class:"opt"+(/[a-z]/i.test(M)?" en":""),onclick:A=>{if(S)return;let U=o.check(x,M).ok;A.currentTarget.classList.add(U?"ok":"bad"),C(U)}},M))),T.append(N)}}function v(){c++,c<l.length?_():g()}function g(){r.innerHTML="",r.append(P("div",{class:"p-head"},P("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:p},"\xD7")),P("p",{class:"big"},`\u7B54\u5C0D ${d} / ${l.length} \u984C\uFF0C\u62FF\u5230 ${m} \u91D1\u5E63`),P("div",{class:"row"},P("button",{class:"btn",onclick:f},"\u518D\u4F86\u4E00\u56DE"),P("button",{class:"btn ghost",onclick:p},"\u56DE\u53BB\u84CB\u623F\u5B50")))}f()}var Ym=new Set(ju);async function tf(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o}){n.innerHTML="",n.hidden=!1;let a=P("div",{class:"panel quiz"});n.append(a),a.append(P("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let l;try{l=await Qu()}catch{a.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let c=window.KE,m=null,d=i?new Set(i.filter(E=>Ym.has(E))):Ym;for(let E of t){let L=l.byId[E];if(L&&d.has(L.type)){m=l.get(E);break}}let p=!!m;m||(m=l.buildQuiz({modules:s||["words","phrases","grammar","patterns"],types:i?[...d]:ju,lv:1,count:1})[0]||l.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let f=c.isTyped(m);n._q=m,a.innerHTML="";let _=P("div",{class:"fb"}),v=P("div",{class:"q-body"});a.append(P("div",{class:"p-head"},P("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),P("div",{class:"q-type"},(p?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":c.TYPES[m.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),P("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?P("div",{class:"q-sub"},m.sub):null,v,_);let g=!1,x=E=>{g||(g=!0,_.className="fb "+(E?"ok":"bad"),_.append(P("div",{},E?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",E?null:P("b",{class:"en"},m.answer)),!E&&m.why?P("div",{class:"why"},m.why):null,P("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(E,f,m)}},"\u7E7C\u7E8C")))};if(m.input==="type"){let E=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),L=()=>{g||!E.value.trim()||x(l.check(m,E.value).ok)};E.addEventListener("keydown",T=>{T.stopPropagation(),T.key==="Enter"&&L()}),v.append(P("div",{class:"typerow"},E,P("button",{class:"btn",onclick:L},"\u9001\u51FA"))),setTimeout(()=>E.focus(),50)}else{let E=P("div",{class:"opts"});(m.options||[]).forEach(L=>E.append(P("button",{class:"opt"+(/[a-z]/i.test(L)?" en":""),onclick:T=>{if(g)return;let S=l.check(m,L).ok;T.currentTarget.classList.add(S?"ok":"bad"),x(S)}},L))),v.append(E)}}async function Zm(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=P("div",{class:"panel quiz"});n.append(i),i.append(P("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Qu()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,l=0,c=()=>{i.innerHTML="";let m=o[a];n._q=m;let d=P("div",{class:"fb"}),p=P("div",{class:"q-body"});i.append(P("div",{class:"p-head"},P("h2",{},t.title_zh+" ",P("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),P("div",{class:"q-type"},r.TYPES[m.type]||"\u984C\u76EE"),P("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?P("div",{class:"q-sub"},m.sub):null,p,d);let f=!1,_=v=>{f||(f=!0,v&&l++,d.className="fb "+(v?"ok":"bad"),d.append(P("div",{},v?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:P("b",{class:"en"},m.answer)),!v&&m.why?P("div",{class:"why"},m.why):null,P("button",{class:"btn",onclick:()=>{a++,a<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(l,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(m.input==="type"){let v=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{f||!v.value.trim()||_(s.check(m,v.value).ok)};v.addEventListener("keydown",x=>{x.stopPropagation(),x.key==="Enter"&&g()}),p.append(P("div",{class:"typerow"},v,P("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=P("div",{class:"opts"});(m.options||[]).forEach(g=>v.append(P("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:x=>{if(f)return;let E=s.check(m,g).ok;x.currentTarget.classList.add(E?"ok":"bad"),_(E)}},g))),p.append(v)}};c()}function Jm(n,t,e){let[i,s]=String(n).split(",").map(Number),r=m=>Vn(4242,i|0,t*7+m,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,l=Math.floor(r(2)*a.length),c=(l+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[l],a[c]]}}function Km(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?_r(n,e.blueprint)?{ok:!1,reason:"owned"}:(Cs(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Io(t,e.give,e.count,i)?(Cs(n,e.price),An(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var ef=(n,t,e)=>!!(n&&n[t.id]===e);function jm(n,t,e,i,s,r,o=()=>64){if(ef(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Hn(s,t.reward.coins|0);let a={};for(let l in t.reward.items||{}){let c=An(r,l,t.reward.items[l],o);c&&(a[l]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function nf(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var sf={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},gc=n=>n==="creative"?"creative":"survival",Qm=n=>sf[gc(n)].db;function t0(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function e0(n){let t=gc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function n0(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var i0=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var pf={};xi(pf,{BREED_CAP:()=>ff,LOVE_MS:()=>r0,MAX_STAGE:()=>ab,STAGE_SECONDS:()=>ob,armorMax:()=>s0,armorPoints:()=>Uo,canTill:()=>of,eat:()=>uf,equip:()=>lb,findMate:()=>df,harvest:()=>af,nearWater:()=>lf,reduceDamage:()=>hf,stageAt:()=>rf,wearArmor:()=>cf});var ob=60,ab=3;function rf(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var of=(n,t)=>(n==="grass"||n==="dirt")&&t;function af(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function lf(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let l of[0,-1])if(t(n(e+a,i+l,s+o)))return!0;return!1}function Uo(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var s0=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function cf(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?s0(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var hf=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function lb(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function uf(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var r0=3e4,ff=12;function df(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<r0&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var _f={};xi(_f,{apply:()=>yc,duck:()=>ps,muted:()=>Fo,rainLevel:()=>xf,scene:()=>gf,setVolume:()=>vc,sfx:()=>pn,state:()=>cb,toggleMute:()=>mf,unlock:()=>_c});var We=null,Rs=null,xc=null,yr=null,Gn=()=>window.HIAudio||null,a0=()=>Gn()?Gn().get():{muted:!1,music:.35,sfx:.7};function _c(){try{Gn()&&Gn().unlock()}catch{}if(!We){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;We=new n,Rs=We.createGain(),Rs.connect(We.destination),xc=We.createBuffer(1,We.sampleRate,We.sampleRate);let t=xc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}We.state==="suspended"&&We.resume(),yc()}function yc(){if(Rs){let n=a0();Rs.gain.setTargetAtTime(n.muted?0:n.sfx,We.currentTime,.03)}}var Fo=()=>a0().muted;function mf(){return Gn()&&Gn().toggle(),yc(),Fo()}function vc(n){Gn()&&Gn().set(n),yc()}function gf(n){try{Gn()&&Gn().scene(n)}catch{}}function ps(n){let t=Gn();t&&(n&&ps.id==null?ps.id=t.duckStart():!n&&ps.id!=null&&(t.duckEnd(ps.id),ps.id=null))}function l0(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Qn(n,t,e,i,s,r,o){let a=We.createOscillator(),l=We.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),l0(l,e,i,s,r),a.connect(l),l.connect(Rs),a.start(e),a.stop(e+i+r+.05)}function ms(n,t,e,i,s,r=1){let o=We.createBufferSource(),a=We.createBiquadFilter(),l=We.createGain();o.buffer=xc,a.type=n,a.frequency.value=t,a.Q.value=r,l0(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(Rs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var o0={wood:(n,t)=>{Qn("sine",190*t,n,.003,.16,.12,95*t),ms("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{ms("highpass",1800*t,n,.1,.06),Qn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{ms("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Qn("sine",1900*t,n,.002,.08,.25,1500*t),ms("highpass",4200,n,.06,.12)},soft:(n,t)=>{ms("bandpass",850*t,n,.09,.1,.8)}};function pn(n,t="soft"){if(!We||Fo())return;let e=We.currentTime+.005,i=o0[t]||o0.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{ms(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Qn("sine",880,e,.002,.07,.08,1320);break;case"chest":Qn("triangle",160,e,.02,.07,.3,120),Qn("sine",330,e+.12,.005,.05,.15);break;case"door":Qn("sawtooth",120,e,.03,.04,.3,160),ms("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>ms("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Qn("triangle",659,e,.005,.08,.15),Qn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Qn("sine",1319,e,.002,.08,.08),Qn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Qn("triangle",300,e,.005,.1,.18,200);break;default:break}}function xf(n){if(We){if(!yr&&n>.01){let t=We.createBufferSource(),e=We.createBiquadFilter(),i=We.createBiquadFilter(),s=We.createGain();t.buffer=xc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Rs),t.start(),yr={s:t,g:s}}yr&&yr.g.gain.setTargetAtTime(.06*n,We.currentTime,.4)}}var cb=()=>({ctx:We?We.state:"none",hi:Gn()?Gn().state():null,rain:yr?+yr.g.gain.value.toFixed(3):0});var wf={};xi(wf,{HI_SCENE:()=>vf,createWeather:()=>Mf,precipFor:()=>Sf,sceneFor:()=>yf,soundOf:()=>vr,stepWeather:()=>bf});function vr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function yf({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var vf={calm:"hub",night:"night",cave:"cave"};function Mf(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function bf(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function Sf(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var hb=[1,2,4,6,8];function Mc(n,t){if(t&&t.type==="rod"&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/hb[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Oo(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function c0(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var If={};xi(If,{collect:()=>Cf,createFurnace:()=>Af,dismantle:()=>Rf,start:()=>Tf,tick:()=>Ef});function Af(){return{fuel:0,jobs:[],done:{}}}function Tf(n,t,e,i=4){if(pi(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(pi(t,"coal")<1)return{ok:!1,reason:"fuel"};Ro(t,"coal",1),n.fuel+=i}return Ro(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function Ef(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function Cf(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=An(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function Rf(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Of={};xi(Of,{MAX_HP:()=>Bo,REGEN_EVERY:()=>fb,SAFE_FALL:()=>ub,createHealth:()=>Pf,damage:()=>Df,fallDamage:()=>Lf,hearts:()=>Ff,regen:()=>Nf,respawnPoint:()=>Uf});var Bo=20,ub=4,fb=4;function Pf(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Lf(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function Df(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Nf(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function Uf(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function Ff(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var bc={animal:8,quiz:4};function h0(){return{list:[],nextId:1}}var zo=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function u0(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function f0(n,t){return n<.2&&!t}function d0(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function p0(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let l=n.home.x-n.p.x,c=n.home.z-n.p.z,m=Math.hypot(l,c);if(m>10){n.yaw=Math.atan2(-l,-c),n.v.x=l/m*s.speed,n.v.z=c/m*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let l=a>1.6?s.speed:0;n.v.x=r/(a||1)*l,n.v.z=o/(a||1)*l;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function m0(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var g0=(n,t)=>n?(t?2:1)+1:0;function Sc(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,m=1/0;for(let d=0;d<3;d++){if(Math.abs(l[d])<1e-9){if(a[d]<r[d]||a[d]>o[d])return null;continue}let p=(r[d]-a[d])/l[d],f=(o[d]-a[d])/l[d];if(p>f&&([p,f]=[f,p]),c=Math.max(c,p),m=Math.min(m,f),c>m)return null}return c}function x0(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var _0=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function y0(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function v0(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),l={};Hn(i,o);for(let c in a){let m=An(e,c,a[c],s);m&&(l[c]=m)}return{ok:!0,coins:o,items:a,leftovers:l,name_zh:r.name_zh}}function M0(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Bf(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function b0(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Bf(n[e].map,n,t).ok?n[e]:null}var Li={};function Mr(n){return Li[n]||(Li[n]=new bn({color:n,transparent:!0}),Li[n].userData.base=new ce(n)),Li[n]}var ko=null;function mb(){if(ko)return ko;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),ko=new Zn(n),ko.colorSpace=rn,ko}function S0(n,t){let e=new mn,i=n.colors,[s,r]=n.size,o=(l,c,m,d,p,f,_,v)=>{let g=new Be(new en(l,c,m),v||Mr(d));return g.position.set(p,f,_),e.add(g),g},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let m=o(.2,.6,.22,i.leg,c,.6,0);m.geometry.translate(0,-.6/2,0),a.push(m)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Li.__face||(Li.__face=new bn({map:mb(),transparent:!0}),Li.__face.userData.base=new ce("#ffffff"));let c=[Mr(i.head),Mr(i.head),Mr(i.head),Mr(i.head),Mr(i.head),Li.__face],m=new Be(new en(s*.9,s*.8,s*.8),c);m.position.set(0,r*.72+s*.4,0),e.add(m),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=n.id==="chicken"?.25:.45,c=r-l-(n.id==="chicken"?.15:.25);o(s,c,n.id==="chicken"?s:s*1.35,i.body,0,l+c/2,0),i.patch&&o(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,l+c*.55,0);let m=n.id==="chicken"?.3:.45,d=o(m,m,m,i.head,0,l+c+m*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+m/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-m/2-.05));let p=n.id==="chicken"?.06:.18,f=n.id==="chicken"?0:s*.45,_=s*.3;for(let[v,g]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-_,-f],[_,-f],[-_,f],[_,f]]){let x=o(p,l,p,i.leg,v,l/2,g);x.geometry.translate(0,-l/2,0),x.position.y=l,a.push(x)}}return e.userData.legs=a,e}function w0(n){for(let t in Li){let e=Li[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function wc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var Ac="e1d79734ba",zf=new URLSearchParams(location.search),_b=720,Tc=5,T0={boat:-.85,minecart:-.6,horse:.75},E0=[[0,0,0,1,.1,1]],C0=[[0,0,0,1,.5,1]],yb=[[0,0,0,1,1,1]],vb=[[.3,0,.3,.7,.7,.7]],Mb=20261008,bb=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,h={touch:bb,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function Is(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function br(n,t){try{localStorage.setItem(n,t)}catch{}}async function Sb(){let n=gc(Is("hw_mode","survival")),t=e0(n),e=!t.creative&&Is("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=u=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(u)?u+"_s":u,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";Gm(Qm(n));let[r,o,a,l,c,m,d,p]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json"].map(u=>fetch(u,{cache:"no-cache"}).then(b=>b.json()))),f=Xp(r),_=o.recipes||[],v=u=>f.maxStack(u),g={};try{let[u,b,R,I,D,X,rt,ft,ht,Mt,Gt,ie,ne]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(De=>Ju(i(De))));g={meta:u,player:b,inv:R,coins:I,furnaces:D,claimed:X,quests:rt,chests:ft,crops:ht,achv:Mt,mapd:Gt,vehs:ie,storyd:ne,chunks:await Xm(s)}}catch(u){console.warn("save unavailable",u)}let x=g.meta&&g.meta.seed||Mb+sf[n].seedOffset,E=e==="shadow"?x+7777:x,L=e==="shadow"?Pu(E,f):Qp(x,f,c),T=Nm(Object.fromEntries(Object.entries(g.chunks||{}).map(([u,b])=>[u.slice(s.length),b]))),S=g.inv?hc(g.inv):Co();t.creative&&!g.inv&&i0.forEach((u,b)=>{f.get(u)&&(S.slots[b]={id:u,count:64})});let C=Mm(g.coins),N=cm(g.achv),M=d.achievements||[],A=zu(g.storyd);!g.storyd&&g.player&&fc(A,p);let U=u=>u==="look"?h.lookAcc||0:u==="walk"?h.walkAcc||0:N.stats[u]||0,B=Am(),$=wm(C,{mode:Is("hw_coin_source","local"),member:Sm(window)}),z=new lc(f,g.mapd),O=Pf(g.player&&g.player.hp!=null?g.player.hp:20);h.bed=g.player&&g.player.bed||null,h.horse=g.player&&g.player.horse||null;let k=l.portals||[],K=Array.isArray(g.claimed)?g.claimed.slice():[],q=g.furnaces||{},st=g.quests||{},Z=Object.fromEntries(Object.entries(g.chests||{}).map(([u,b])=>[u,hc(b,27)])),nt=g.crops||{};h.armor=g.player&&Array.isArray(g.player.armor)?g.player.armor.slice(0,4):[null,null,null,null],h.armorDur=g.player&&Array.isArray(g.player.armorDur)?g.player.armorDur.slice(0,4):[null,null,null,null];let ot=o.smelt||[],Ct=o.fuelPerCoal||4;g.meta&&typeof g.meta.time=="number"&&(h.time=g.meta.time);let pt=Xi("#c"),St=new ec({canvas:pt,antialias:!1,powerPreference:"high-performance"});St.setPixelRatio(Math.min(window.devicePixelRatio||1,h.touch?1.5:1.25));let gt=new Zr,yt=new ce("#EFEBDD");gt.background=yt;let W=new Mn(72,1,.08,200);W.rotation.order="YXZ";let et=Fm(f),xt=Om(f,et),zt=Hm(et.canvas),mt=new Worker("assets/hw-worker.js?v="+Ac),at=new pc({scene:gt,mats:zt,reg:f,worker:mt,diffs:T,onDirty:u=>{h.dirty.add(u),(h.mapDirty||(h.mapDirty=new Set)).add(u)}}),ae=Math.max(2,Math.min(6,parseInt(zf.get("rd")||Is("hw_rd",h.touch?"3":"4"),10)||4));at.setRenderDistance(ae),W.far=ae*16+40,W.updateProjectionMatrix();let Lt=await new Promise(u=>{let b=R=>{R.data.type==="ready"&&(mt.removeEventListener("message",b),u(R.data.spawn))};mt.addEventListener("message",b),mt.postMessage({type:"init",seed:E,dim:e,blocks:r,structures:c,diffs:Object.fromEntries([...T].map(([R,I])=>[R,Yu(I)]))})}),Qt=g.player&&g.player.dims&&g.player.dims[e];h.dimPos=g.player&&g.player.dims||{},g.player&&(e==="overworld"||Qt)?Object.assign(h,{p:Qt?{x:Qt.x,y:Qt.y,z:Qt.z}:{x:g.player.x,y:g.player.y,z:g.player.z},yaw:(Qt?Qt.yaw:g.player.yaw)||0,pitch:g.player.pitch||0,fly:!!g.player.fly&&!Qt,sel:g.player.sel|0}):(g.player&&(h.sel=g.player.sel|0),h.p={x:Lt.x,y:Lt.y,z:Lt.z},h.yaw=Math.atan2(-(Lt.stele.x+.5-Lt.x),-(Lt.stele.z+.5-Lt.z)),h.pitch=-.15);let re=new Ss(new io(new en(1.004,1.004,1.004)),new bs({color:1382164,transparent:!0,opacity:.45}));re.visible=!1,gt.add(re);let Jt=Bm().map(u=>new Zn(u)),se=new Be(new en(1.01,1.01,1.01),new bn({map:Jt[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));se.visible=!1,gt.add(se);let Ve=(u,b)=>{let R=document.createElement("canvas");R.width=R.height=64;let I=R.getContext("2d");I.fillStyle=u,I.beginPath(),I.arc(32,32,28,0,7),I.fill(),b&&(I.globalCompositeOperation="destination-out",I.beginPath(),I.arc(44,26,24,0,7),I.fill());let D=new Zn(R);return D.colorSpace=rn,D},Xe=new Ms(new ss({map:Ve("#F2C46B"),depthWrite:!1,fog:!1})),we=new Ms(new ss({map:Ve("#EDE6D0",!0),depthWrite:!1,fog:!1}));gt.add(Xe,we);let Ie=500,H=new Float32Array(Ie*6),He=new Float32Array(Ie*3),me=new Float32Array(Ie*3);for(let u=0;u<Ie;u++)me[u*3]=Math.random()*24-12,me[u*3+1]=Math.random()*16,me[u*3+2]=Math.random()*24-12;let F=new cn;F.setAttribute("position",new je(H,3));let y=new Ss(F,new bs({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));y.frustumCulled=!1,y.visible=!1,gt.add(y);let Y=new cn;Y.setAttribute("position",new je(He,3));let tt=new to(Y,new ir({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));tt.frustumCulled=!1,tt.visible=!1,gt.add(tt),h.weather=Mf();let ct=0;function Tt(u,b,R){if(y.visible=R==="rain",tt.visible=R==="snow",!!R){ct+=u;for(let I=0;I<Ie;I++){let D=me[I*3],X=me[I*3+2],rt=R==="rain"?16:1.6,ft=b.y+10-(me[I*3+1]+ct*rt)%16;if(R==="rain"){let ht=I*6;H[ht]=H[ht+3]=b.x+D,H[ht+2]=H[ht+5]=b.z+X,H[ht+1]=ft,H[ht+4]=ft-.45}else{let ht=I*3,Mt=Math.sin(ct*.8+I)*.4;He[ht]=b.x+D+Mt,He[ht+1]=ft,He[ht+2]=b.z+X+Mt*.6}}(R==="rain"?F:Y).attributes.position.needsUpdate=!0}}let Et=new mn,lt=(u,b,R,I,D,X,rt)=>{let ft=new Be(new en(u,b,R),new bn({color:I}));return ft.position.set(D,X,rt),ft.userData.base=new ce(I),Et.add(ft),ft},dt=lt(.24,.75,.26,"#26302A",-.14,.375,0),Pt=lt(.24,.75,.26,"#26302A",.14,.375,0);lt(.56,.7,.3,"#2F5A34",0,1.1,0);let Kt=lt(.18,.66,.2,"#E7CDA6",-.38,1.12,0),Nt=lt(.18,.66,.2,"#E7CDA6",.38,1.12,0);lt(.46,.42,.42,"#E7CDA6",0,1.66,0),lt(.5,.14,.46,"#151714",0,1.9,.02),lt(.12,.12,.05,"#E0352B",.16,1.92,-.24),[dt,Pt,Kt,Nt].forEach(u=>{u.geometry.translate(0,-u.geometry.parameters.height/2+.05,0),u.position.y+=u.geometry.parameters.height/2-.05}),Et.visible=!1,gt.add(Et);let Rt={},te=u=>Rt[u]||(Rt[u]=(()=>{let b=new Image;b.src=xt[u];let R=new gn(b);return R.colorSpace=rn,b.onload=()=>{R.needsUpdate=!0},new ss({map:R,depthWrite:!0,alphaTest:.3})})());function Yt(u,b,R,I){let D=new Ms(te(u));D.scale.set(.42,.42,1),gt.add(D),h.drops.push({id:u,s:D,p:{x:b,y:R,z:I},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let ue=(u,b,R)=>{let I=at.get(u,b,R);return f.flat.solid[I]===1&&(f.flat.boxes[I]||!0)},G=Object.fromEntries((a.mobs||[]).map(u=>[u.id,u])),At=h0(),ut=new Map,It=0;function Ut(u,b){for(let R=61;R>0;R--){let I=at.get(u,R,b);if(f.flat.solid[I])return at.get(u,R+1,b)||at.get(u,R+2,b)?null:{y:R+1,n:I};if(f.flat.liquid[I])return null}return null}function _t(u,b,R,I=7){for(let D=-I;D<=I;D++)for(let X=-I;X<=I;X++)for(let rt=-I;rt<=I;rt++)if(f.flat.lightEmit[at.get(u+rt,b+D,R+X)])return!0;return!1}function $t(u,b,R,I,D){let X=u0(At,u,{x:b+.5,y:R,z:I+.5}),rt=S0(u,D);return ut.set(X.id,rt),gt.add(rt),X}let Wt=new Set;function Oe(){for(let u of L.villages.around(h.p.x-64,h.p.z-64,h.p.x+64,h.p.z+64))if(!(Wt.has(u.id)||!at.ready(u.x,u.z))){Wt.add(u.id);for(let b=0;b<u.villagers;b++){let R=Jm(u.id,b,m),I=u.x+(b%2?2:-2),D=u.z+(b-1),X=Ut(I,D),rt=$t(G.villager,I,X?X.y:u.y+1,D,R.prof.color);Object.assign(rt,{home:{x:u.x,z:u.z},village:u.id,role:R})}}}function Te(u){if(G.villager&&Oe(),e==="overworld"&&h.horse&&!h.horseMob&&G.horse&&at.ready(h.horse.x,h.horse.z)){let rt=$t(G.horse,Math.floor(h.horse.x),h.horse.y,Math.floor(h.horse.z));rt.tame=!0,h.horse.saddled&&qf(rt),h.horseMob=rt}let b=Math.random()*Math.PI*2,R=14+Math.random()*14,I=Math.floor(h.p.x+Math.cos(b)*R),D=Math.floor(h.p.z+Math.sin(b)*R);if(!at.ready(I,D))return;let X=Ut(I,D);if(X)if(zo(At,"animal")<bc.animal&&X.n===f.num("grass")&&u>.3){let rt=Object.values(G).filter(Mt=>Mt.kind==="animal"&&(!Mt.biome||Mt.biome===L.biomeOf(I,D))),ft=rt[Math.floor(Math.random()*rt.length)],ht=1+Math.floor(Math.random()*3);for(let Mt=0;Mt<ht&&zo(At,"animal")<bc.animal;Mt++){let Gt=I+Mt%2,ie=D+(Mt>>1),ne=Ut(Gt,ie);ne&&$t(ft,Gt,ne.y,ie)}}else t.quizMobs&&zo(At,"quiz")<bc.quiz&&f0(u,_t(I,X.y,D))&&G.quizling&&$t(e==="shadow"&&G.shadowling?G.shadowling:G.quizling,I,X.y,D)}function Fn(u,b,R){It+=u,It>2.5&&h.started&&(It=0,Te(e==="shadow"?0:b));for(let I=At.list.length-1;I>=0;I--){let D=At.list[I],X=ut.get(D.id),rt=Math.hypot(D.p.x-h.p.x,D.p.z-h.p.z);if(D.riding){D.p.x=h.p.x,D.p.y=h.p.y,D.p.z=h.p.z,D.yaw=h.yaw,D.v.x=h.v.x,D.v.z=h.v.z,wc(X,D,R/1e3);continue}if(D.gone){D.goneT=(D.goneT||0)+u,wc(X,D,R/1e3),D.goneT>.35&&(gt.remove(X),ut.delete(D.id),At.list.splice(I,1));continue}if(d0(D,b,rt)){D.gone=!0,D.goneT=0,D.village&&Wt.delete(D.village);continue}if(!at.ready(D.p.x,D.p.z))continue;p0(D,h.p,u,Math.random),D.v.y-=20*u,D.v.y<-20&&(D.v.y=-20);let ft=sc(D.p,D.v,u,ue,{w:Math.min(.9,D.def.size[0]),h:D.def.size[1],canStep:!0,grounded:D.onGround});D.onGround=ft.onGround,f.flat.liquid[at.get(D.p.x,D.p.y+.3,D.p.z)]&&(D.v.y=2),wc(X,D,R/1e3)}w0(.35+.65*b)}function xn(u,b,R){let I,D;u==="screen"?(Yi.set(b/innerWidth*2-1,-(R/innerHeight)*2+1,.5).unproject(W).sub(W.position).normalize(),I={x:W.position.x,y:W.position.y,z:W.position.z},D={x:Yi.x,y:Yi.y,z:Yi.z}):(I=qo(),D=Rc());let X=u==="screen"?ti("screen",b,R):ti("center"),rt=null,ft=h.view==="tp"&&u==="screen"?8:4.5;X&&(ft=Math.min(ft,X.dist+.5));for(let ht of At.list){if(ht.gone||ht.riding)continue;let Mt=Sc(I,D,ht.p,ht.def.size[0],ht.def.size[1]);Mt!=null&&Mt<ft&&(ft=Mt,rt=ht)}for(let ht of h.vehicles){if(h.ride&&h.ride.veh===ht)continue;let Mt=Sc(I,D,ht.p,1.3,.9);Mt!=null&&Mt<ft&&(ft=Mt,rt=ht.m)}if(h.boss){let ht=Sc(I,D,h.boss.p,3.6,3.6);ht!=null&&ht<ft+1&&(ft=ht,rt=h.boss.m)}return rt}function Vo(){try{return x0(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Sr(u){if(u.kind==="vehicle"){Dc(u.veh);return}if(u.kind==="boss"){G0();return}if(u.type==="horse"){N0(u);return}if(u.kind==="villager"){if(!t.trading){Dt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}qi(u);return}if(u.kind==="animal"&&S.slots[h.sel]&&S.slots[h.sel].id==="wheat"){t.consume&&jn(S,h.sel,1),Pe();let R=Date.now();u.love=R,Dt(`${u.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let I=df(At.list,u,R);if(I&&zo(At,"animal")<ff){let D=$t(u.def,Math.floor((u.p.x+I.p.x)/2),Math.floor(u.p.y),Math.floor((u.p.z+I.p.z)/2));ut.get(D.id).scale.setScalar(.65),u.love=0,I.love=0,Dt(`\u751F\u4E86\u4E00\u96BB\u5C0F${u.def.name_zh}\uFF01`),h.stats.bred=(h.stats.bred||0)+1,ye("bred")}else I&&Dt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(u.kind==="animal"){let R=S.slots[h.sel],I=!!(R&&f.toolOf(R.id)&&f.toolOf(R.id).type==="sword"),D=m0(u,I,Math.random);if(u.v.y=4,u.v.x+=(u.p.x-h.p.x)*1.5,u.v.z+=(u.p.z-h.p.z)*1.5,I){let X=Oo(S,h.sel,f);X.broke&&Dt(`\u4F60\u7684${f.name(X.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Pe()}if(D&&D.drops)for(let X=0;X<D.drops.n;X++)Yt(D.drops.id,u.p.x,u.p.y+.6,u.p.z);return}if(u.busy)return;u.busy=!0,qn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let b=Vo().slice(0,30).sort(()=>Math.random()-.5);tf(wt.ov,{ids:b,onDone:(R,I)=>{if(h.overlay=null,u.busy=!1,R&&u.def.tough&&!u.hurt){u.hurt=!0,Dt("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(R){let D=g0(!0,I)+(u.def.tough?2:0);Hn(C,D),_n(),u.gone=!0,u.goneT=0,Dt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${D} \u91D1\u5E63`),h.dirtyMeta=!0,Tn(),h.stats.quizWins=(h.stats.quizWins||0)+1,ye("quiz_wins")}else if(R===!1){let D=h.p.x-u.p.x,X=h.p.z-u.p.z,rt=Math.hypot(D,X)||1;h.v.x=D/rt*7,h.v.z=X/rt*7,h.v.y=4.5,u.p.x-=D/rt*1.5,u.p.z-=X/rt*1.5,Dt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let Wn=(u,b,R)=>at.get(u,b,R),Di=(u,b,R)=>{let I=f.get(at.get(u,b,R));return I&&I.rail?{shape:I.rail,powered:!!I.powered}:null},wt=wb();function Dt(u){for(;wt.toasts.children.length>3;)wt.toasts.firstChild.remove();let b=P("div",{class:"toast"},u);wt.toasts.append(b),setTimeout(()=>b.remove(),2200)}function Ho(u){let b=P("div",{class:"toast ach"},P("i",{class:"badge"}),P("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",P("b",{},u.name_zh),u.coins&&t.coins?`\u3000+${u.coins} \u91D1\u5E63`:""));wt.toasts.append(b),setTimeout(()=>b.remove(),3500)}function ye(u,b=1){hm(N,u,b),h.dirtyMeta=!0;for(let R of um(N,M))Ho(R),R.coins&&t.coins&&(Hn(C,R.coins),_n())}function wr(u,b,R,I){ye("placed"),I==="torch"&&ye("place:torch");let D=h.recentPlaced||(h.recentPlaced=[]);D.push([u,b,R]),D.length>80&&D.shift(),!N.done.house&&dm(D,u,b,R)>=30&&ye("house")}function Go(){let u=!1;for(let b of ln())N.stats["boss:"+b]||(N.stats["boss:"+b]=1,u=!0);u&&ye("boss",0)}let Ar=C.coins;function _n(){C.coins>Ar&&pn("coin"),Ar=C.coins,wt.coins.textContent=C.coins}let Tr="";function mi(){let u=Ff(O.hp),b=u.join();b!==Tr&&(Tr=b,wt.hearts.innerHTML="",u.forEach(R=>wt.hearts.append(P("i",{class:"ht "+R}))))}function Er(u){if(h.dead||u<=0||!t.damage)return;let b=u,R=Uo(h.armor,f);if(u=hf(u,R),R&&(cf(h.armor,h.armorDur,f,b).forEach(X=>Dt(`\u4F60\u7684${f.name(X)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),Zt(),h.dirtyMeta=!0),u<=0)return;let I=Df(O,u);mi(),h.dirtyMeta=!0,pn("hurt"),wt.flash.classList.remove("on"),wt.flash.offsetWidth,wt.flash.classList.add("on"),I&&Wo()}function Wo(){Pr(!0),h.dead=!0,qn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="dead";let u=wt.ov;u.innerHTML="",u.hidden=!1,u.append(P("div",{class:"panel start"},P("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),P("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),P("button",{class:"btn big",onclick:Ec},h.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function Ec(){let u=Uf(h.bed,Lt,!!h.bed&&e==="overworld");h.p={x:u.x,y:u.y,z:u.z},h.v={x:0,y:0,z:0},h.fallTop=u.y,O.hp=20,h.dead=!1,mi(),Le(),h.dirtyMeta=!0,Dt(h.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function Pe(){wt.hotbar.innerHTML="";for(let b=0;b<9;b++){let R=S.slots[b];wt.hotbar.append(P("button",{class:"slot"+(b===h.sel?" on":""),"aria-label":R?f.name(R.id):"\u7A7A\u683C",onpointerdown:I=>{I.stopPropagation(),h.sel=b,Pe()}},R?P("img",{src:xt[R.id],alt:""}):null,R&&R.count>1?P("span",{class:"cnt"},R.count):null,Xo(R),P("span",{class:"key"},b+1)))}let u=S.slots[h.sel];wt.selName.textContent=u?f.name(u.id):""}function Xo(u){let b=c0(u,f);return!b||b.left>=b.max?null:P("span",{class:"dur"+(b.frac<.25?" low":"")},P("i",{style:"width:"+Math.round(b.frac*100)+"%"}))}function Cc(u=4){let b=new Set,R=Math.floor(h.p.x),I=Math.floor(h.p.y),D=Math.floor(h.p.z);for(let X=-u;X<=u;X++)for(let rt=-u;rt<=u;rt++)for(let ft=-u;ft<=u;ft++){let ht=at.get(R+ft,I+X,D+rt);ht&&b.add(f.get(ht).id)}return b}let Ps=()=>({near:Cc(),owned:new Set(C.owned)}),w=-1,V=null,it=null,j=u=>u==="inv"?S:u==="chest"?Z[it]:null,Q=(u,b)=>u==="armor"?h.armor[b]?{id:h.armor[b],count:1,dur:h.armorDur[b]}:null:j(u).slots[b];function Ft(u,b,R){if(!V){Q(u,b)&&(V={c:u,i:b}),R();return}let I=V;if(V=null,I.c===u&&I.i===b){R();return}if(u==="armor"||I.c==="armor"){let[D,X,rt,ft]=u==="armor"?[I.c,I.i,u,b]:[u,b,I.c,I.i];if(D==="armor"){R();return}let ht=j(D),Mt=ht.slots[X],Gt=Mt&&f.get(Mt.id),ie=h.armor[ft];if(Mt&&!(Gt.armor&&Gt.armor.slot===ft)){Dt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),R();return}let ne=h.armorDur[ft],De=ie?Number.isFinite(ne)?{id:ie,count:1,dur:ne}:{id:ie,count:1}:null;Mt?(h.armor[ft]=Mt.id,h.armorDur[ft]=Number.isFinite(Mt.dur)?Mt.dur:null,Mt.count>1?(Mt.count--,De&&An(ht,ie,1,v)):ht.slots[X]=De):ie&&(h.armor[ft]=null,h.armorDur[ft]=null,ht.slots[X]=De),Zt(),h.dirtyMeta=!0,Pe(),R();return}I.c===u?Uu(j(u),I.i,b,v):Ou(j(I.c),I.i,j(u),b,v),h.dirtyMeta=!0,Pe(),R()}let Vt=(u,b,R,I="")=>{let D=Q(u,b),X=V&&V.c===u&&V.i===b;return P("button",{class:"slot"+(X?" pick":"")+I,title:D?f.name(D.id):"",onclick:()=>Ft(u,b,R)},D?P("img",{src:xt[D.id],alt:""}):null,D&&D.count>1?P("span",{class:"cnt"},D.count):null,Xo(D))},Ot=["\u982D","\u8EAB","\u817F","\u8173"];function Xt(u){let b=Uo(h.armor,f);return P("div",{class:"armor-row"},Ot.map((R,I)=>P("div",{class:"armor-slot"},Vt("armor",I,u),P("small",{},R))),P("small",{class:"muted"},`\u8B77\u7532 ${b} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,b*4)}%\uFF09`))}function Zt(){if(wt.armor){let u=Uo(h.armor,f);wt.armor.textContent=u?`\u8B77\u7532 ${u}`:""}}function fe(){let u=wt.ov;u.innerHTML="",u.hidden=!1;let b=Z[it]||(Z[it]=Co(27)),R=P("div",{class:"inv-grid"});for(let X=0;X<27;X++)R.append(Vt("chest",X,fe));let I=P("div",{class:"inv-grid"});for(let X=9;X<36;X++)I.append(Vt("inv",X,fe));let D=P("div",{class:"inv-grid hbrow"});for(let X=0;X<9;X++)D.append(Vt("inv",X,fe," hb"));return u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u7BB1\u5B50"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),R,P("h3",{},"\u80CC\u5305"),I,D)),b}function pe(){let u=wt.ov;u.innerHTML="",u.hidden=!1;let b=P("div",{class:"inv-grid"}),R=ft=>Vt("inv",ft,pe,ft<9?" hb":"");for(let ft=9;ft<36;ft++)b.append(R(ft));let I=P("div",{class:"inv-grid hbrow"});for(let ft=0;ft<9;ft++)I.append(R(ft));let D=P("div",{class:"craft"},P("h3",{},"\u5408\u6210"));if(t.creative){let ft=P("div",{class:"craft"},P("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),P("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),ht=P("div",{class:"cat-grid"});n0(f).forEach(Mt=>ht.append(P("button",{class:"slot",title:f.name(Mt),onclick:()=>{S.slots[h.sel]={id:Mt,count:64},h.dirtyMeta=!0,Pe(),pe(),Dt(`${f.name(Mt)} \u653E\u9032\u7B2C ${h.sel+1} \u683C`)}},P("img",{src:xt[Mt],alt:""})))),ft.append(ht),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),b,I),ft)));return}let X=Ps(),rt={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};_.forEach(ft=>{let ht=uc(S,ft,X),Mt=ht.ok;ft.blueprint&&ht.reason==="blueprint"&&!Object.keys(ft.in).some(Gt=>Gt!=="stick"&&pi(S,Gt)>0)||D.append(P("div",{class:"rcp"+(Mt?"":" no")},P("img",{src:xt[ft.out.id],alt:""}),P("div",{class:"rcp-t"},P("b",{},`${ft.name_zh} \xD7${ft.out.count}`),P("small",{},Object.keys(ft.in).map(Gt=>`${f.name(Gt)} ${pi(S,Gt)}/${ft.in[Gt]}`).join("\u3001")+(rt[ht.reason]?"\u3000\xB7 "+rt[ht.reason]:""))),P("button",{class:"btn small",onclick:()=>{let Gt=Fu(S,ft,v,Ps());Gt.ok?(Dt(`\u505A\u597D\u4E86\uFF1A${ft.name_zh} \xD7${ft.out.count}`),h.dirtyMeta=!0,ye("craft:"+ft.out.id)):Dt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Gt.reason]||"\u6750\u6599\u4E0D\u5920"),pe(),Pe()}},"\u88FD\u4F5C")))}),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),Xt(pe),b,I),D)))}let qt=_m(f);function Ae(){let u=wt.ov;u.innerHTML="",u.hidden=!1;let b=P("div",{class:"shop"}),R=b0(k,ln());qt.filter(I=>!I.id.startsWith("portal_")||R&&I.id===R.block).forEach(I=>b.append(P("div",{class:"offer"+(I.locked?" locked":"")},P("img",{src:xt[I.id],alt:""}),P("div",{class:"of-t"},P("b",{},`${I.name_zh}${I.qty>1?" \xD7"+I.qty:""}`),P("small",{},I.locked?`\uFF08${I.locked}\uFF09`:`${I.price} \u91D1\u5E63${I.desc?"\u3000"+I.desc:""}`)),_r(C,I.id)?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",disabled:I.locked?!0:null,onclick:()=>Ke(I)},I.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5546\u5E97\u3000",P("span",{class:"coin"}),` ${C.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),b))}function Ke(u){let b=ym(C,S,u,v);b.ok?(ye("bought"),ye("buy:"+u.id),Dt(u.blueprint?`\u62FF\u5230 ${u.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${u.name_zh} \xD7${u.qty}`),h.dirtyMeta=!0,_n(),Pe(),Tn()):Dt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[b.reason]||"\u8CB7\u4E0D\u4E86"),Ae()}let Ue=null;function Ee(){let u=wt.ov,b=q[Ue]||(q[Ue]=Af());u.innerHTML="",u.hidden=!1;let R=b.jobs[0],I=P("div",{class:"shop"});ot.forEach(X=>{let rt=pi(S,X.in);I.append(P("div",{class:"offer"+(rt?"":" locked")},P("img",{src:xt[X.in],alt:""}),P("div",{class:"of-t"},P("b",{},`${f.name(X.in)} \u2192 ${f.name(X.out)}`),P("small",{},`\u6709 ${rt} \u500B \xB7 \u6BCF\u500B ${X.time} \u79D2`)),P("button",{class:"btn small",onclick:()=>{let ft=Tf(b,S,X,Ct);ft.ok||Dt(ft.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),h.dirtyMeta=!0,Pe(),Ee()}},"\u653E\u9032\u53BB")))});let D=Object.values(b.done).reduce((X,rt)=>X+rt,0);u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u7194\u7210"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,b.fuel-b.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${pi(S,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${Ct} \u500B\uFF09`),P("div",{class:"furnace-st"},R?`\u6B63\u5728\u71D2\uFF1A${f.name(R.in)}\uFF08\u9084\u8981 ${Math.ceil(R.left)} \u79D2\uFF0C\u6392\u968A ${b.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),P("div",{class:"row"},P("button",{class:"btn",disabled:D?null:!0,onclick:()=>{let X=Cf(b,S,v);X&&(Dt(`\u62FF\u51FA ${X} \u500B`),ye("smelted",X)),h.dirtyMeta=!0,Pe(),Ee()}},`\u62FF\u51FA\u4F86\uFF08${D}\uFF09`)),I))}let an=null,Ht=(u,b)=>{try{return JSON.parse(localStorage.getItem(u)||"null")||b}catch{return b}},ln=()=>M0(Ht("hw_portal_rewards",[]),Ht("hi_save",null),k),Me='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function Pn(){let u=k.find(D=>D.map===an),b=wt.ov;if(b.innerHTML="",b.hidden=!1,!u){Le();return}let R=Object.keys(u.reward.items).map(D=>`${f.name(D)} \xD7${u.reward.items[D]}`).join("\u3001"),I=Bf(u.map,k,ln());if(!I.ok){b.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("div",{class:"padlock",html:Me}),P("p",{class:"big"},`\u5148\u6253\u5012 ${I.need.boss_zh} \u624D\u80FD\u9032\u5165`),P("p",{class:"muted"},`\u5F9E\u300C${I.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${I.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Le},"\u77E5\u9053\u4E86"))));return}b.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${u.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${u.reward.coins} \u91D1\u5E63\u3001${R}\u3002`),P("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),P("div",{class:"row"},P("button",{class:"btn big",onclick:async()=>{await Tn(),h.leaving=_0(u.map),location.href=h.leaving}},"\u9032\u5165"),P("button",{class:"btn ghost",onclick:Le},"\u5148\u4E0D\u8981"))))}function Ln(){if(!t.portals)return 0;let u;try{u=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{u=[]}let b=y0(u,K);for(let R of b){let I=v0(R,k,S,C,v);if(K.push(R.id),!!I.ok){for(let D in I.leftovers)for(let X=0;X<I.leftovers[D];X++)Yt(D,h.p.x,h.p.y+1,h.p.z);Dt(`\u5F9E${I.name_zh}\u5E36\u56DE\u4F86\uFF1A${I.coins} \u91D1\u5E63\u3001${Object.keys(I.items).map(D=>f.name(D)+" \xD7"+I.items[D]).join("\u3001")}`)}}return b.length&&(_n(),Pe(),h.dirtyMeta=!0,Tn()),Go(),b.length}let Dn=null;function qi(u){Dn=u,u.busy=!0,qe("trade")}function Ce(){let u=Dn,b=wt.ov;if(!u)return Le();b.innerHTML="",b.hidden=!1;let R=u.role,I=nf(),D=P("div",{class:"shop"});R.prof.offers.forEach(rt=>{let ft=rt.blueprint||rt.give,ht=!!rt.blueprint,Mt=ht&&f.blueprints.find(ie=>ie.id===rt.blueprint),Gt=ht&&_r(C,rt.blueprint);D.append(P("div",{class:"offer"},P("img",{src:xt[ft],alt:""}),P("div",{class:"of-t"},P("b",{},ht?Mt.name_zh:`${f.name(ft)}${rt.count>1?" \xD7"+rt.count:""}`),P("small",{},`${rt.price} \u91D1\u5E63${ht?"\u3000"+(Mt.desc||""):""}`)),Gt?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",onclick:()=>{let ie=Km(C,S,rt,v);ie.ok?(pn("trade"),ye("traded"),ye("bought"),Dt(ht?`\u62FF\u5230 ${Mt.name_zh}\uFF01`:`\u8CB7\u5230 ${f.name(ft)} \xD7${rt.count}`),h.dirtyMeta=!0,_n(),Pe(),Tn()):Dt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[ie.reason]||"\u8CB7\u4E0D\u4E86"),Ce()}},"\u8CFC\u8CB7")))});let X=P("div",{class:"quests"});R.quests.forEach(rt=>{let ft=ef(st,rt,I),ht=Object.keys(rt.reward.items||{}).map(Mt=>`${f.name(Mt)} \xD7${rt.reward.items[Mt]}`).join("\u3001");X.append(P("div",{class:"offer quest"+(ft?" locked":"")},P("div",{class:"of-t"},P("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+rt.title_zh),P("small",{},`${rt.desc}\uFF0C\u7B54\u5C0D ${rt.need} \u984C \u2192 ${rt.reward.coins} \u91D1\u5E63\u3001${ht}`)),ft?P("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):P("button",{class:"btn small",onclick:()=>{h.overlay="quest",Zm(wt.ov,{quest:rt,onDone:Mt=>{if(h.overlay="trade",Mt>=0){let Gt=jm(st,rt,Mt,I,C,S,v);if(Gt.ok){for(let ie in Gt.leftovers)for(let ne=0;ne<Gt.leftovers[ie];ne++)Yt(ie,h.p.x,h.p.y+1,h.p.z);Dt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Gt.coins} \u91D1\u5E63\u3001${ht}`),_n(),Pe(),h.dirtyMeta=!0,Tn(),h.stats.quests=(h.stats.quests||0)+1,ye("quests")}else Dt(`\u7B54\u5C0D ${Mt} \u984C\uFF0C\u8981 ${rt.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Ce()}})}},"\u63A5\u59D4\u8A17")))}),b.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6751\u6C11\u30FB${R.prof.name_zh}\u3000`,P("span",{class:"coin"}),` ${C.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("h3",{},"\u4EA4\u6613"),D,P("h3",{},"\u82F1\u6587\u59D4\u8A17"),P("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),X))}function $e(){let u=wt.ov;u.innerHTML="",u.hidden=!1;let b=P("b",{},at.rd),R=P("input",{type:"range",min:2,max:6,step:1,value:at.rd,oninput:I=>{b.textContent=I.target.value},onchange:I=>{let D=+I.target.value;at.setRenderDistance(D),W.far=D*16+40,W.updateProjectionMatrix(),br("hw_rd",D)}});u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u8A2D\u5B9A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",b,R),P("label",{class:"set"},"\u97F3\u6A02",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:I=>vc({music:+I.target.value,muted:!1})})),P("label",{class:"set"},"\u97F3\u6548",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:I=>{vc({sfx:+I.target.value,muted:!1}),pn("place","wood")}})),t.creative?P("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",P("input",{type:"checkbox",checked:Is("hw_weather","on")!=="off"?!0:null,onchange:I=>br("hw_weather",I.target.checked?"on":"off")})):null,P("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:gi},"\u91CD\u7F6E\u4E16\u754C"),t.creative?P("button",{class:"btn",onclick:()=>Xn("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):P("button",{class:"btn",onclick:ze},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),P("div",{id:"pinbox"}),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:()=>{ku(A),h.dirtyMeta=!0,Le(),zc(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),P("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),P("p",{},P("a",{class:"home-link",href:"../../#s/game",onclick:()=>{Tn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),P("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+($.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+Ac)))}async function Xn(u){await Tn(),br("hw_mode",u),h.resetting=!0,location.reload()}function ze(){let u=document.getElementById("pinbox"),b=window.KSParentPin;if(u.innerHTML="",!b||!b.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let R=P("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),I=()=>{let D=t0(b,R.value.trim());D.ok?Xn("creative"):(Dt(D.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),R.value="")};R.addEventListener("keydown",D=>{D.stopPropagation(),D.key==="Enter"&&I()}),u.append(P("div",{class:"pin-ask"},P("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),P("div",{class:"typerow"},R,P("button",{class:"btn",onclick:I},"\u78BA\u5B9A")))),setTimeout(()=>R.focus(),50)}async function gi(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){h.resetting=!0,br("hw_dim","overworld");try{await qm(["hw_coins"])}catch(u){console.warn(u)}location.reload()}}function qe(u){document.pointerLockElement&&document.exitPointerLock(),h.overlay=u,qn(),ye("open:"+u,1),u==="inv"?(w=-1,V=null,pe()):u==="shop"?Ae():u==="set"?$e():u==="furnace"?Ee():u==="portal"?Pn():u==="trade"?Ce():u==="chest"?(V=null,fe()):u==="map"?Oc():u==="ach"?k0():u==="quests"?$0():u==="quiz"&&$m(wt.ov,{onAnswer:()=>ye("stele_answers"),onReward:b=>{Hn(C,b),_n(),h.dirtyMeta=!0,Tn()},onClose:()=>{h.overlay=null}})}function Le(){wt.ov.hidden=!0,wt.ov.innerHTML="",h.overlay=null,Dn&&(Dn.busy=!1,Dn=null)}let kf=()=>{wt.btnSnd.textContent=Fo()?"\u{1F507}":"\u{1F50A}"};wt.btnSnd.onclick=()=>{_c(),mf(),kf()},["pointerdown","keydown"].forEach(u=>addEventListener(u,()=>_c(),{capture:!0,once:!0})),kf(),wt.btnInv.onclick=()=>h.overlay==="inv"?Le():qe("inv"),wt.btnShop.onclick=()=>h.overlay==="shop"?Le():qe("shop"),wt.btnSet.onclick=()=>h.overlay==="set"?Le():qe("set"),wt.btnView.onclick=()=>Vf(),wt.bRide.onclick=()=>Pr(),wt.bMap.onclick=()=>h.overlay==="map"?Le():qe("map"),wt.bQuest.onclick=()=>h.overlay==="quests"?Le():qe("quests"),wt.bAch.onclick=()=>h.overlay==="ach"?Le():qe("ach");function Vf(){h.view=h.view==="fp"?"tp":"fp",Dt(h.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Hf(){h.ride||(h.fly=!h.fly,h.v.y=0,wt.root.classList.toggle("flying",h.fly),Dt(h.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let Yi=new J;function Rc(){let u=Math.cos(h.pitch);return{x:-Math.sin(h.yaw)*u,y:Math.sin(h.pitch),z:-Math.cos(h.yaw)*u}}let qo=()=>({x:h.p.x,y:h.p.y+1.62+h.eyeOff+(h.ride?T0[h.ride.kind]:0),z:h.p.z}),Gf=u=>u&&!f.flat.liquid[u],Ic=u=>f.flat.boxes[u]||(f.flat.shape[u]===4?E0:f.flat.shape[u]===8?C0:null);function ti(u,b,R){if(u==="screen"){Yi.set(b/innerWidth*2-1,-(R/innerHeight)*2+1,.5).unproject(W).sub(W.position).normalize();let rt=W.position,ft=h.view==="tp"?rt.distanceTo(new J(h.p.x,h.p.y+1.62,h.p.z)):0,ht={x:rt.x,y:rt.y,z:rt.z},Mt={x:Yi.x,y:Yi.y,z:Yi.z};h.lastRay={o:ht,d:Mt};let Gt=mr(ht,Mt,Tc+1+ft,Wn,Gf,Ic);return Gt&&(Gt.at={x:ht.x+Mt.x*Gt.dist,y:ht.y+Mt.y*Gt.dist,z:ht.z+Mt.z*Gt.dist}),Gt}let I=qo(),D=Rc();h.lastRay={o:I,d:D};let X=mr(I,D,Tc,Wn,Gf,Ic);return X&&(X.at={x:I.x+D.x*X.dist,y:I.y+D.y*X.dist,z:I.z+D.z*X.dist}),X}function qn(){h.mining.active=!1,h.mining.k="",h.mining.t=0,se.visible=!1}function R0(u,b,R){pn("door");let I=f.get(at.get(u,b,R)),D=f.get(I.openAs||I.closeAs);if(!D)return;let X=ft=>{let ht=f.get(ft);return ht&&ht.interact==="door"},rt=b;for(;X(at.get(u,rt-1,R));)rt--;for(let ft=rt;X(at.get(u,ft,R));ft++)at.set(u,ft,R,D.n);h.dirtyMeta=!0}let Wf=()=>{let u=S.slots[h.sel];return u?f.toolOf(u.id):null};function I0(u){let b=u.n,R=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Mc(f.get(b),Wf());if(!at.set(u.x,u.y,u.z,0))return;B.sendBlock(u.x,u.y,u.z,0);let I=u.x+","+u.y+","+u.z,D=f.get(b);if(Z[I]){if(t.drops){for(let ht of Z[I].slots)if(ht)for(let Mt=0;Mt<ht.count;Mt++)Yt(ht.id,u.x+.5,u.y+.4,u.z+.5)}delete Z[I]}if(D&&D.crop){if(delete nt[I],t.drops)for(let ht of af(D.stage|0))for(let Mt=0;Mt<ht.n;Mt++)Yt(ht.id,u.x+.5,u.y+.3,u.z+.5);h.stats.harvested=(h.stats.harvested||0)+(D.stage===3?1:0),D.stage===3&&ye("harvested"),h.dirtyMeta=!0;return}let X=R.harvest?f.dropOf(b):null;X&&Yt(X,u.x+.5,u.y+.4,u.z+.5),t.drops&&D.pattern==="leaves"&&Math.random()<(d.appleChance||.1)?Yt("apple",u.x+.5,u.y+.4,u.z+.5):!R.harvest&&!R.creative&&Dt(`${f.name(b)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let rt=at.get(u.x,u.y+1,u.z);if(f.flat.plant[rt]){delete nt[u.x+","+(u.y+1)+","+u.z],at.set(u.x,u.y+1,u.z,0);let ht=t.drops&&f.dropOf(rt);ht&&Yt(ht,u.x+.5,u.y+1.3,u.z+.5)}if(f.get(b).interact==="door")for(let ht of[-1,1]){let Mt=at.get(u.x,u.y+ht,u.z);f.get(Mt)&&f.get(Mt).interact==="door"&&at.set(u.x,u.y+ht,u.z,0)}let ft=u.x+","+u.y+","+u.z;if(h.bed&&h.bed.x===u.x&&h.bed.y===u.y&&h.bed.z===u.z&&(h.bed=null,Dt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),q[ft]){let ht=Rf(q[ft]);for(let Mt in ht)for(let Gt=0;Gt<ht[Mt];Gt++)Yt(Mt,u.x+.5,u.y+.4,u.z+.5);delete q[ft]}if(R.usesTool){let ht=Oo(S,h.sel,f);ht.broke&&Dt(`\u4F60\u7684${f.name(ht.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Pe()}h.dirtyMeta=!0,h.stats.mined++,pn("break",vr(D)),ye("mined"),ye("mine:"+(D.pattern==="log"?"wood":D.id))}function Cr(u){let b=S.slots[h.sel],R=b&&f.get(b.id);if(R&&R.food)return t.damage?(uf(O,R.food,20)?(pn("eat"),jn(S,h.sel,1),mi(),Pe(),h.dirtyMeta=!0,Dt(`\u5403\u4E86${R.name_zh}\uFF0C\u597D\u98FD\uFF01`),h.stats.ate=(h.stats.ate||0)+1):Dt("\u73FE\u5728\u4E0D\u9913"),!0):(Dt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(R&&R.id==="shadow_flint"){if(!t.portals)return Dt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let kt=f.num("dark_crystal"),jt=u&&u.n===kt?Lu((Ne,Ze,Yn)=>at.get(Ne,Ze,Yn),u.x,u.y,u.z,kt):null;if(!jt)return Dt("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let be=f.num("shadow_portal");for(let Ne of jt)at.set(Ne[0],Ne[1],Ne[2],be);return ye("portal_lit"),jn(S,h.sel,1),Pe(),h.dirtyMeta=!0,Dt(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(R&&R.id==="fishing_rod")return h.fish?O0():F0(),!0;if(R&&R.place==="boat"){if(h.ride)return Dt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let kt=h.lastRay,jt=kt&&mr(kt.o,kt.d,Tc+1,Wn,Ne=>f.flat.liquid[Ne]||f.flat.solid[Ne]);if(!jt||!f.flat.liquid[jt.n]||at.get(jt.x,jt.y+1,jt.z))return Dt("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;h.p={x:jt.x+.5,y:jt.y+1-.15,z:jt.z+.5};let be=Pc("boat",h.p,h.yaw,{y:jt.y+1});return t.consume&&jn(S,h.sel,1),Pe(),Ir("boat",{y:jt.y+1,veh:be}),!0}if(R&&R.place==="minecart"){if(h.ride)return Dt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let kt=u&&f.get(u.n);if(!kt||!kt.rail)return Dt("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let jt=bu(kt.rail,u.x,u.y,u.z,-Math.sin(h.yaw),-Math.cos(h.yaw),Ze=>!!To(Di,u.x,u.y,u.z,Ze,kt.rail)),be=ac(jt),Ne=Pc("minecart",{x:be.x,y:be.y+.05,z:be.z},be.yaw,{st:jt});return t.consume&&jn(S,h.sel,1),Pe(),Ir("minecart",{st:jt,veh:Ne}),!0}if(!u)return!1;let I=f.get(u.n);if(I&&I.interact==="chest")return pn("chest"),it=u.x+","+u.y+","+u.z,qe("chest"),!0;let D=R&&f.toolOf(b.id);if(D&&D.type==="hoe"&&of(I.id,!at.get(u.x,u.y+1,u.z)||f.flat.plant[at.get(u.x,u.y+1,u.z)])){if(at.set(u.x,u.y+1,u.z,0),at.set(u.x,u.y,u.z,f.num("farmland")),t.consume){let kt=Oo(S,h.sel,f);kt.broke&&Dt(`\u4F60\u7684${f.name(kt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return Pe(),h.dirtyMeta=!0,!0}if(R&&R.place==="crop")return I.id!=="farmland"||u.face[1]!==1||at.get(u.x,u.y+1,u.z)?(Dt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(at.set(u.x,u.y+1,u.z,f.num("wheat_0")),nt[u.x+","+(u.y+1)+","+u.z]={t:Date.now(),wet:lf(Wn,kt=>f.flat.liquid[kt]===1,u.x,u.y,u.z)},t.consume&&jn(S,h.sel,1),Pe(),h.dirtyMeta=!0,h.stats.planted=(h.stats.planted||0)+1,!0);let X=f.get(u.n);if(X&&X.interact==="quiz")return t.coins?(qe("quiz"),!0):(Dt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let rt=S.slots[h.sel]&&f.get(S.slots[h.sel].id).placeable;if(X&&X.interact==="door")return R0(u.x,u.y,u.z),!0;if(X&&X.interact==="portal"&&!rt&&!t.portals)return Dt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(X&&X.interact==="portal"&&!rt)return an=X.portal,qe("portal"),!0;if(X&&X.interact==="bed"&&!rt&&e==="shadow")return Dt("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(X&&X.interact==="bed"&&!rt)return h.bed={x:u.x,y:u.y,z:u.z},h.dirtyMeta=!0,ye("bed"),Dt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(X&&X.interact==="craft"&&!rt)return qe("inv"),!0;if(X&&X.interact==="furnace"&&!rt)return Ue=u.x+","+u.y+","+u.z,qe("furnace"),!0;let ft=S.slots[h.sel];if(!ft)return Dt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let ht=f.get(ft.id);if(!ht||!ht.placeable)return Dt(`${f.name(ft.id)} \u4E0D\u80FD\u653E`),!1;if(ht.place==="slab"&&ht.fullAs&&u.n===ht.n&&u.face[1]===1&&at.set(u.x,u.y,u.z,f.num(ht.fullAs)))return t.consume&&jn(S,h.sel,1),Pe(),h.stats.placed++,h.dirtyMeta=!0,!0;let Mt=f.flat.plant[u.n]&&!f.flat.plant[ht.n],Gt=Mt?u.x:u.x+u.face[0],ie=Mt?u.y:u.y+u.face[1],ne=Mt?u.z:u.z+u.face[2];if(ie<0||ie>=64)return!1;let De=at.get(Gt,ie,ne);if(De&&!f.flat.liquid[De]&&!(Mt&&f.flat.plant[De]))return!1;let Re=.6/2;if(ht.solid&&Gt+1>h.p.x-Re&&Gt<h.p.x+Re&&ne+1>h.p.z-Re&&ne<h.p.z+Re&&ie+1>h.p.y&&ie<h.p.y+1.8)return!1;if(f.flat.plant[ht.n]&&!f.flat.solid[at.get(Gt,ie-1,ne)])return Dt(`${ht.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let nn=ht.n;if(ht.place==="slab"){let kt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&kt>.5)&&f.get(ht.id+"_top")&&(nn=f.num(ht.id+"_top"))}else if(ht.place==="stairs"){let kt=-Math.sin(h.yaw),jt=-Math.cos(h.yaw),be=Math.abs(kt)>Math.abs(jt)?kt>0?1:3:jt>0?2:0,Ne=f.get(ht.id+["","_e","_s","_w"][be]);Ne&&(nn=Ne.n)}let he=null;if(ht.place==="rail"){if(!f.flat.solid[at.get(Gt,ie-1,ne)])return Dt("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let kt=-Math.sin(h.yaw),jt=-Math.cos(h.yaw),be=oc(Di,Gt,ie,ne,!!ht.powered,Math.abs(kt)>Math.abs(jt)?"e":"n");nn=f.num(Ao(!!ht.powered,be.shape)),he=be.updates}if(!at.set(Gt,ie,ne,nn))return!1;if(B.sendBlock(Gt,ie,ne,nn),he)for(let[kt,jt,be,Ne]of he){let Ze=Di(kt,jt,be);Ze&&at.set(kt,jt,be,f.num(Ao(Ze.powered,Ne)))}return pn("place",vr(ht)),ht.interact==="door"&&!at.get(Gt,ie+1,ne)&&at.set(Gt,ie+1,ne,ht.n),t.consume&&jn(S,h.sel,1),h.dirtyMeta=!0,Pe(),h.stats.placed++,wr(Gt,ie,ne,ht.id),!0}let Rr={},Yo=u=>Rr[u]||(Rr[u]=(()=>{let b=new bn({color:u});return b.userData.base=new ce(u),b})());function P0(u){let b=new mn,R=(I,D,X,rt,ft,ht,Mt)=>{let Gt=new Be(new en(I,D,X),Yo(rt));Gt.position.set(ft,ht,Mt),b.add(Gt)};if(u==="boat"){R(.9,.08,1.5,"#8C6640",0,.04,0);for(let I of[-1,1])R(.08,.3,1.5,"#A97E4E",I*.45,.19,0),R(.9,.3,.08,"#A97E4E",0,.19,I*.75);R(.9,.06,.25,"#C49A63",0,.25,.1)}else{R(.9,.08,1.1,"#5E6660",0,.12,0);for(let I of[-1,1])R(.08,.45,1.1,"#8C8A84",I*.45,.35,0),R(.9,.45,.08,"#8C8A84",0,.35,I*.55),R(.06,.18,.18,"#26302A",I*.47,.1,.35),R(.06,.18,.18,"#26302A",I*.47,.1,-.35)}return b}h.vehicles=[];function Pc(u,b,R,I){let D=P0(u);D.rotation.order="YXZ",D.position.set(b.x,b.y,b.z),D.rotation.y=R,gt.add(D);let X=Object.assign({kind:u,p:{x:b.x,y:b.y,z:b.z},yaw:R,obj:D,hits:0},I);return X.m={kind:"vehicle",veh:X,id:-2},h.vehicles.push(X),X}function Lc(u){h.ride||h.dead||(h.p={x:u.p.x,y:u.p.y,z:u.p.z},u.kind==="boat"?Ir("boat",{y:u.y,veh:u}):(u.st.v=0,Ir("minecart",{st:u.st,veh:u})))}function Dc(u){if(!(h.ride&&h.ride.veh===u)){if(u.hits++,u.hits<2){Dt("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),u.obj.position.y=u.p.y+.15,setTimeout(()=>{u.obj.position.y=u.p.y},120);return}h.vehicles.splice(h.vehicles.indexOf(u),1),gt.remove(u.obj),Yt(u.kind,u.p.x,u.p.y+.5,u.p.z),h.dirtyMeta=!0,Dt(u.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let Ls=new mn,Xf=new bn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),Nc=[0,1].map(()=>{let u=new Be(new en(1,1,1),Xf);return Ls.add(u),u});Ls.visible=!1,gt.add(Ls);function L0(u){let b=S.slots[h.sel],R=b&&f.get(b.id);if(!u||!R||!R.placeable)return null;let I=f.get(u.n);if(I&&["chest","quiz","door"].includes(I.interact))return null;if(R.place==="slab"&&R.fullAs&&u.n===R.n&&u.face[1]===1)return{x:u.x,y:u.y,z:u.z,n:f.num(R.fullAs)};let D=f.flat.plant[u.n]&&!f.flat.plant[R.n],X=D?u.x:u.x+u.face[0],rt=D?u.y:u.y+u.face[1],ft=D?u.z:u.z+u.face[2];if(rt<0||rt>=64)return null;let ht=at.get(X,rt,ft);if(ht&&!f.flat.liquid[ht]&&!(D&&f.flat.plant[ht]))return null;let Mt=R.n;if(R.place==="slab"){let Gt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Gt>.5)&&f.get(R.id+"_top")&&(Mt=f.num(R.id+"_top"))}else if(R.place==="stairs"){let Gt=-Math.sin(h.yaw),ie=-Math.cos(h.yaw),ne=Math.abs(Gt)>Math.abs(ie)?Gt>0?1:3:ie>0?2:0,De=f.get(R.id+["","_e","_s","_w"][ne]);De&&(Mt=De.n)}else if(R.place==="rail"){if(!f.flat.solid[at.get(X,rt-1,ft)])return null;let Gt=-Math.sin(h.yaw),ie=-Math.cos(h.yaw);Mt=f.num(Ao(!!R.powered,oc(Di,X,rt,ft,!!R.powered,Math.abs(Gt)>Math.abs(ie)?"e":"n").shape))}return{x:X,y:rt,z:ft,n:Mt}}function D0(u){let b=L0(u);if(!b){Ls.visible=!1;return}let R=f.flat.shape[b.n],I=f.flat.boxes[b.n]||(R===4?E0:R===8?C0:R>=1&&R<=3?vb:yb);Nc.forEach((D,X)=>{let rt=I[X];D.visible=!!rt,rt&&(D.scale.set((rt[3]-rt[0])*.98,(rt[4]-rt[1])*.98,(rt[5]-rt[2])*.98),D.position.set(b.x+(rt[0]+rt[3])/2,b.y+(rt[1]+rt[4])/2,b.z+(rt[2]+rt[5])/2))}),Ls.visible=!0}function qf(u){u.saddled=!0;let b=ut.get(u.id);if(!b)return;let R=new Be(new en(.62,.1,.6),Yo("#5C3A24"));R.position.set(0,1.4,.05),b.add(R)}function Ir(u,b){let R=b.veh?b.veh.obj:null;h.ride=Object.assign({kind:u,obj:R,yaw:b.veh?b.veh.yaw:h.yaw},b),h.fly=!1,wt.root.classList.remove("flying"),h.v={x:0,y:0,z:0},wt.bRide.hidden=!1,qn(),ye("ride:"+u),ye("ride"),Dt({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[u])}function Pr(u){let b=h.ride;if(b){if(h.ride=null,wt.bRide.hidden=!0,b.veh&&(b.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},b.veh.yaw=b.yaw,b.st&&(b.st.v=0,b.veh.st=b.st)),b.kind==="horse"&&(b.m.riding=!1),b.kind==="minecart")h.p.y+=.2;else for(let[R,I]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let D={x:h.p.x+R,y:Math.floor(h.p.y+.5),z:h.p.z+I};if(tm(D,ue)&&f.flat.solid[at.get(D.x,D.y-1,D.z)]){h.p=D;break}}h.v={x:0,y:0,z:0},h.fallTop=h.p.y,u||Dt("\u4E0B\u4F86\u4E86")}}function N0(u){let b=S.slots[h.sel];if(!u.tame){b&&(b.id==="wheat"||b.id==="apple")?(t.consume&&jn(S,h.sel,1),Pe(),u.fed=(u.fed||0)+1,u.fed>=3?(u.tame=!0,h.horseMob=u,h.dirtyMeta=!0,Dt("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):Dt(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${u.fed}/3\uFF09`)):Dt("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!u.saddled){b&&b.id==="saddle"?(t.consume&&jn(S,h.sel,1),Pe(),qf(u),h.horseMob=u,h.dirtyMeta=!0,Dt("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):Dt("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}h.ride||(u.riding=!0,h.p={x:u.p.x,y:u.p.y,z:u.p.z},Ir("horse",{m:u}),h.stats.rodeHorse=(h.stats.rodeHorse||0)+1)}function U0(u,b,R,I,D,X,rt){let ft=h.ride;if(ft.kind==="boat"){let ht=(I*R+X*b)*7,Mt=(D*R+rt*b)*7,Gt=1-Math.exp(-2.5*u);h.v.x+=(ht-h.v.x)*Gt,h.v.z+=(Mt-h.v.z)*Gt,h.v.y=0;let ie=(Re,nn)=>f.flat.liquid[at.get(Re,ft.y-1,nn)]===1&&!f.flat.solid[at.get(Re,ft.y,nn)],ne=h.p.x+h.v.x*u,De=h.p.z+h.v.z*u;ie(ne+Math.sign(h.v.x)*.6,h.p.z)?h.p.x=ne:h.v.x=0,ie(h.p.x,De+Math.sign(h.v.z)*.6)?h.p.z=De:h.v.z=0,h.p.y=ft.y-.15,Math.hypot(h.v.x,h.v.z)>.3&&(ft.yaw=Math.atan2(-h.v.x,-h.v.z))}else{Su(ft.st,u,R,Di);let ht=ac(ft.st);h.p.x=ht.x,h.p.z=ht.z,h.p.y=ht.y+.05,ft.yaw=ht.yaw,ft.pitch=ht.pitch,h.v.x=h.v.z=h.v.y=0}h.fallTop=h.p.y}let Uc=(()=>{let u=new mn,b=new Be(new en(.16,.1,.16),Yo("#E0352B")),R=new Be(new en(.16,.08,.16),Yo("#EFEBDD"));return b.position.y=.05,R.position.y=-.04,u.add(b,R),u.visible=!1,gt.add(u),u})();function F0(){let u=h.lastRay,b=u&&mr(u.o,u.d,Tc+3,Wn,R=>f.flat.liquid[R]||f.flat.solid[R]);return!b||!f.flat.liquid[b.n]||at.get(b.x,b.y+1,b.z)?(Dt("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(h.fish=Au(Math.random),h.fish.at={x:b.x+.5,y:b.y+1,z:b.z+.5},Uc.visible=!0,Dt("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function Fc(){h.fish=null,Uc.visible=!1}function O0(){let u=Eu(h.fish);if(Fc(),u!=="catch"){Dt("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let b=d.fishing.loot,R=Cu(b,Math.random);if(R.coins&&!t.coins&&(R=b[0]),R.coins)Hn(C,R.coins),_n(),Dt(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${R.coins} \u91D1\u5E63`);else{let I=An(S,R.id,R.n,v);for(let D=0;D<I;D++)Yt(R.id,h.p.x,h.p.y+1,h.p.z);Dt(R.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${f.name(R.id)} \xD7${R.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&Oo(S,h.sel,f).broke&&Dt("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),Pe(),h.dirtyMeta=!0,pn("pickup"),ye("fish"),R.treasure&&ye("treasure")}let $i=2,$o=Is("hw_minimap","on")!=="off";function B0(u){$o=u,br("hw_minimap",u?"on":"off"),wt.mini.hidden=!u}wt.mini.hidden=!$o;function z0(){let u=wt.mini,b=u.getContext("2d");b.fillStyle="#D9D3C0",b.fillRect(0,0,u.width,u.height),z.draw(b,h.p.x,h.p.z,2,u.width,u.height),Iu(b,u.width/2,u.height/2,h.yaw,7,"#E0352B")}function Oc(){let u=wt.ov;u.innerHTML="",u.hidden=!1;let b=Math.max(240,Math.min(innerWidth-60,760)),R=Math.max(200,Math.min(innerHeight-200,540)),I=P("canvas",{class:"bigmap",width:b,height:R}),D=I.getContext("2d");D.fillStyle="#D9D3C0",D.fillRect(0,0,b,R);let{x0:X,z0:rt}=z.draw(D,h.p.x,h.p.z,$i,b,R),ft=(ne,De)=>[(ne-X)*$i,(De-rt)*$i],ht=(ne,De,Re,nn,he)=>{let[kt,jt]=ft(ne,De);kt<-20||jt<-20||kt>b+20||jt>R+20||(D.fillStyle=nn,D.strokeStyle=nn,D.lineWidth=3,he==="roof"?(D.beginPath(),D.moveTo(kt-8,jt+1),D.lineTo(kt,jt-7),D.lineTo(kt+8,jt+1),D.fill(),D.fillRect(kt-5,jt+1,10,7)):he==="ring"?(D.beginPath(),D.arc(kt,jt,6,0,7),D.stroke()):D.fillRect(kt-5,jt-5,10,10),D.font="bold 12px sans-serif",D.textAlign="center",D.strokeStyle="#EFEBDD",D.strokeText(Re,kt,jt-11),D.fillStyle="#26302A",D.fillText(Re,kt,jt-11))},Mt=Math.max(b,R)/$i;for(let ne of L.villages.around(h.p.x-Mt,h.p.z-Mt,h.p.x+Mt,h.p.z+Mt))z.explored(ne.x,ne.z)&&ht(ne.x,ne.z,"\u6751\u838A","#8C5A3A","roof");for(let ne of z.portals.values())ht(ne.x+.5,ne.z+.5,ne.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");ht(Lt.x,Lt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),h.bed&&ht(h.bed.x+.5,h.bed.z+.5,"\u5E8A","#E0352B");let[Gt,ie]=ft(h.p.x,h.p.z);Iu(D,Gt,ie,h.yaw,9,"#E0352B"),u.append(P("div",{class:"panel map"},P("div",{class:"p-head"},P("h2",{},"\u5730\u5716"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),I,P("div",{class:"row"},P("button",{class:"btn small",onclick:()=>{$i=Math.min(6,$i+1),Oc()}},"\u653E\u5927"),P("button",{class:"btn small",onclick:()=>{$i=Math.max(1,$i-1),Oc()}},"\u7E2E\u5C0F"),P("label",{class:"set inline"},P("input",{type:"checkbox",checked:$o?!0:null,onchange:ne=>B0(ne.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),P("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function k0(){let u=wt.ov;u.innerHTML="",u.hidden=!1;let b=M.filter(I=>N.done[I.id]).length,R=P("div",{class:"ach-list"});M.forEach(I=>{let D=!!N.done[I.id];R.append(P("div",{class:"ach-item"+(D?" done":"")},P("i",{class:"badge"}),P("div",{},P("b",{},I.name_zh),P("small",{},I.desc_zh+(D?"\u3000\u2713":`\uFF08${fm(N,I)}/${I.need}\uFF09`)+(I.coins?`\u3000\u734E\u52F5 ${I.coins} \u91D1\u5E63`:"")))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6210\u5C31\u3000${b} / ${M.length}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),R))}async function V0(u){h.travelling||(h.travelling=!0,Pr(!0),Fc(),qn(),Dt(u==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await Tn(!0),br("hw_dim",u),h.resetting=!0,location.reload())}function Bc(){let u=h.boss;u&&(wt.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${u.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${Do[u.st.phase].name_zh}`,wt.bossHp.style.width=Math.max(0,u.st.hp/Lo*100)+"%")}function H0(u){if(e!=="shadow"||N.stats.dragon)return;let b=di,R=Math.hypot(h.p.x-b.x,h.p.z-b.z);if(!h.boss&&R<60&&at.ready(b.x,b.z)){let X=Im();gt.add(X),h.boss={g:X,st:Cm(),p:{x:b.x+.5,y:fi+1.5,z:b.z+.5},m:{kind:"boss",id:-1},t:0}}let I=h.boss;if(!I)return;I.t+=u,I.g.position.set(I.p.x,I.p.y+Math.sin(I.t*1.6)*.25,I.p.z),I.g.rotation.y=Math.atan2(-(h.p.x-I.p.x),-(h.p.z-I.p.z)),Pm(I.g,I.t,u);let D=R<28;D===wt.bossbar.hidden&&(wt.bossbar.hidden=!D,D&&(Bc(),I.greeted||(I.greeted=!0,Dt("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function G0(){let u=h.boss;if(!u||u.busy)return;u.busy=!0,qn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let b=Do[u.st.phase],R=Vo().slice(0,40).sort(()=>Math.random()-.5);tf(wt.ov,{ids:u.st.retry.concat(R),types:b.types,modules:b.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${b.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(I,D,X)=>{h.overlay=null,u.busy=!1,I!=null&&Yf(I,D,X&&X.id)}})}function Yf(u,b,R){let I=h.boss;if(!I)return;let D=Rm(I.st,u,b,R);if(!u){let X=h.p.x-I.p.x,rt=h.p.z-I.p.z,ft=Math.hypot(X,rt)||1;h.v.x=X/ft*8,h.v.z=rt/ft*8,h.v.y=5,Dt("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),Bc();return}if(I.g.userData.hitT=.3,pn("hit","stone"),D.done){W0();return}D.phaseUp!=null?(Lm(I.g,D.phaseUp),Dt(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${D.phaseUp+1} \u968E\u6BB5\uFF1A${Do[D.phaseUp].name_zh}`)):Dt(b?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),Bc()}function W0(){gt.remove(h.boss.g),h.boss=null,wt.bossbar.hidden=!0,t.coins&&(Hn(C,Xu),_n()),ye("dragon"),Tn(),X0()}function X0(){qn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ending";let u=wt.ov;u.innerHTML="",u.hidden=!1;let b=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${Xu} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];u.append(P("div",{class:"ending"},P("div",{class:"paper sun"}),P("div",{class:"paper hill"}),P("div",{class:"paper hill b"}),P("div",{class:"credits"},P("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),b.map(R=>P("p",{},R)),P("button",{class:"btn big",onclick:Le},"\u7E7C\u7E8C\u5192\u96AA"))))}function q0(){if(!N.stats.village&&e==="overworld"){for(let u of L.villages.around(h.p.x-30,h.p.z-30,h.p.x+30,h.p.z+30))if(Math.hypot(u.x-h.p.x,u.z-h.p.z)<22){ye("village");break}}for(let u of Hu(A,p,U,nf())){if(h.dirtyMeta=!0,u.kind==="tut"){pn("pickup"),A.tut.done&&Dt("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let b=t.coins?u.q.coins|0:0;b&&(Hn(C,b),_n()),Dt((u.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+u.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+u.q.text)+(b?`\u3000+${b} \u91D1\u5E63`:""))}zc()}function Y0(u){if(u==="lair")return e==="shadow"?{x:di.x+.5,z:di.z+.5}:null;if(e!=="overworld")return null;if(u==="stele"&&Lt.stele)return{x:Lt.stele.x+.5,z:Lt.stele.z+.5};if(u==="portal"&&Lt.portal)return{x:Lt.portal.x+.5,z:Lt.portal.z+.5};if(u==="village"){if(!h.vilHint||Date.now()-h.vilHint.t>3e3){let b=null,R=1/0;for(let I of L.villages.around(h.p.x-400,h.p.z-400,h.p.x+400,h.p.z+400)){let D=Math.hypot(I.x-h.p.x,I.z-h.p.z);D<R&&(R=D,b=I)}h.vilHint={t:Date.now(),v:b}}return h.vilHint.v?{x:h.vilHint.v.x,z:h.vilHint.v.z}:null}return null}let $f="";function zc(u){let b=!A.tut.done&&p.tutorial[A.tut.step],R=Vu(A,p),I=b||R,D=b?A.tut.step+(h.touch?"t":"d"):"";if((u||D!==$f)&&($f=D,wt.tut.hidden=!b,wt.tut.innerHTML="",b&&wt.tut.append(P("b",{},`\u65B0\u624B\u6559\u5B78 ${A.tut.step+1}/${p.tutorial.length}`),P("span",{},b.text),P("small",{},h.touch?b.touch:b.desk),P("button",{class:"link",onclick:()=>{fc(A,p),h.dirtyMeta=!0,zc(!0)}},"\u8DF3\u904E\u6559\u5B78"))),wt.obj.hidden=!I||!h.started,!I)return;h.objTarget=Y0(I.hint),wt.objArrow.hidden=!h.objTarget;let X=h.objTarget?Math.round(Math.hypot(h.objTarget.x-h.p.x,h.objTarget.z-h.p.z)):0;wt.objText.textContent=(b?"":"\u4E3B\u7DDA\uFF1A")+(b?b.text:R.text)+(h.objTarget&&X>4?`\uFF08\u7D04 ${X} \u683C\uFF09`:"")}function $0(){let u=wt.ov;u.innerHTML="",u.hidden=!1;let b=P("div",{class:"quest-list"});p.main.forEach((I,D)=>b.append(P("div",{class:"quest-item"+(D<A.main?" done":D===A.main?" cur":"")},P("b",{},(D<A.main?"\u2713 ":"")+I.title),P("small",{},I.text+(I.coins&&t.coins?`\u3000\u734E\u52F5 ${I.coins} \u91D1\u5E63`:"")))));let R=P("div",{class:"quest-list"});(A.daily?A.daily.picks:[]).forEach(I=>{let D=p.daily.find(rt=>rt.id===I),X=A.daily.done.includes(I);R.append(P("div",{class:"quest-item"+(X?" done":" cur")},P("b",{},(X?"\u2713 ":"")+D.text),P("small",{},`${X?D.need:Gu(A,p,U,I)} / ${D.need}`+(D.coins&&t.coins?`\u3000\u734E\u52F5 ${D.coins} \u91D1\u5E63`:""))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5192\u96AA\u624B\u518A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),P("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),R,P("h3",{},`\u4E3B\u7DDA\u3000${Math.min(A.main,p.main.length)} / ${p.main.length}`),b,P("p",{class:"muted"},A.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${A.tut.step+1} \u6B65`))),setTimeout(()=>{let I=u.querySelector(".quest-item.cur");I&&I.scrollIntoView&&I.scrollIntoView({block:"nearest"})},0)}addEventListener("keydown",u=>{if(u.target&&u.target.tagName==="INPUT")return;let b=u.key.toLowerCase();if(b==="e"){h.overlay==="inv"?Le():!h.overlay&&qe("inv"),u.preventDefault();return}if(h.overlay!=="dead"&&!(h.overlay==="ask"||h.overlay==="quest")){if(b==="escape"&&h.overlay){h.overlay==="quiz"?(wt.ov.hidden=!0,wt.ov.innerHTML="",h.overlay=null):Le();return}if(!h.overlay){if(b==="shift"&&h.ride){Pr();return}h.keys[b]=!0,u.code==="Space"&&(h.keys[" "]=!0,u.preventDefault()),b>="1"&&b<="9"&&(h.sel=+b-1,Pe()),b==="f"&&Hf(),b==="v"&&Vf(),b==="m"&&qe("map"),b==="k"&&qe("ach"),b==="j"&&qe("quests")}}}),addEventListener("keyup",u=>{h.keys[u.key.toLowerCase()]=!1,u.code==="Space"&&(h.keys[" "]=!1)}),addEventListener("blur",()=>{h.keys={},qn()}),pt.addEventListener("mousedown",u=>{if(!(h.touch||h.overlay)){if(document.pointerLockElement!==pt){pt.requestPointerLock&&pt.requestPointerLock();return}if(u.button===0){let b=xn("center");if(b){Sr(b);return}h.mining.active=!0,h.mining.src="center"}if(u.button===2){let b=xn("center");if(b&&b.kind==="vehicle"){Lc(b.veh);return}Cr(ti("center")),h.placeRepeat=.3,h.rightHeld=!0}}}),addEventListener("mouseup",u=>{u.button===0&&qn(),u.button===2&&(h.rightHeld=!1)}),pt.addEventListener("contextmenu",u=>u.preventDefault()),addEventListener("mousemove",u=>{document.pointerLockElement===pt&&(h.yaw-=u.movementX*.0024,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-u.movementY*.0024)))}),addEventListener("wheel",u=>{h.overlay||h.touch||(h.sel=(h.sel+(u.deltaY>0?1:8))%9,Pe())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{wt.root.classList.toggle("locked",document.pointerLockElement===pt)});let Lr=new Map;function Z0(u){h.touch!==u&&(h.touch=u,wt.root.classList.toggle("touch",u),document.body.classList.toggle("is-touch",u))}wt.root.classList.toggle("touch",h.touch),document.body.classList.toggle("is-touch",h.touch),pt.addEventListener("pointerdown",u=>{if(u.pointerType!=="touch"||(Z0(!0),h.overlay))return;if(u.preventDefault(),u.clientX<innerWidth*.4&&u.clientY>innerHeight*.35&&!h.joy.active){h.joy={x:0,y:0,active:!0,id:u.pointerId,ox:u.clientX,oy:u.clientY},wt.joy.style.transform=`translate(${u.clientX-60}px, ${u.clientY-60}px)`,wt.joy.hidden=!1,wt.knob.style.transform="translate(0px,0px)",Lr.set(u.pointerId,{kind:"joy"});return}let b={kind:"look",x:u.clientX,y:u.clientY,sx:u.clientX,sy:u.clientY,t0:performance.now(),drag:!1,hold:!1};b.timer=setTimeout(()=>{if(b.drag)return;let R=xn("screen",b.x,b.y);if(R&&R.kind==="vehicle"){Dc(R.veh),b.vehHit=!0;return}b.hold=!0,h.mining.active=!0,h.mining.src="screen",h.mining.sx=b.x,h.mining.sy=b.y},280),Lr.set(u.pointerId,b),h.touchPress=b},{passive:!1}),addEventListener("pointermove",u=>{let b=Lr.get(u.pointerId);if(!b)return;if(b.kind==="joy"){let D=u.clientX-h.joy.ox,X=u.clientY-h.joy.oy,rt=Math.hypot(D,X),ft=55;rt>ft&&(D*=ft/rt,X*=ft/rt),h.joy.x=D/ft,h.joy.y=X/ft,wt.knob.style.transform=`translate(${D}px,${X}px)`;return}let R=u.clientX-b.x,I=u.clientY-b.y;b.x=u.clientX,b.y=u.clientY,!b.drag&&Math.hypot(b.x-b.sx,b.y-b.sy)>12&&(b.drag=!0,clearTimeout(b.timer),b.hold&&(qn(),b.hold=!1)),b.drag?(h.yaw-=R*.0055,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-I*.0055))):b.hold&&(h.mining.sx=b.x,h.mining.sy=b.y)});let Zf=u=>{let b=Lr.get(u.pointerId);if(b){if(Lr.delete(u.pointerId),h.touchPress===b&&(h.touchPress=null),b.kind==="joy"){h.joy={x:0,y:0,active:!1},wt.joy.hidden=!0;return}if(clearTimeout(b.timer),b.hold)qn();else if(!b.drag&&performance.now()-b.t0<280&&!h.overlay){let R=xn("screen",b.x,b.y);R&&R.kind==="vehicle"?Lc(R.veh):R?Sr(R):Cr(ti("screen",b.x,b.y))}}};addEventListener("pointerup",Zf),addEventListener("pointercancel",Zf);let Jf=(u,b,R)=>{u.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation(),b()}),u.addEventListener("pointerup",R),u.addEventListener("pointercancel",R),u.addEventListener("pointerleave",R)};Jf(wt.bJump,()=>{h.jumpHeld=!0},()=>{h.jumpHeld=!1}),Jf(wt.bDown,()=>{h.downHeld=!0},()=>{h.downHeld=!1}),wt.bFly.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),Hf()}),wt.bPlace.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),Cr(ti("center"))}),document.addEventListener("touchmove",u=>{u.target.closest(".scroll, .panel")||u.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(u=>document.addEventListener(u,b=>b.preventDefault(),{passive:!1})),wt.start.hidden=!1,wt.go.onclick=()=>{wt.start.hidden=!0,h.started=!0,h.paused=!1,wt.root.classList.add("started"),!h.touch&&pt.requestPointerLock&&pt.requestPointerLock()};async function Tn(u){if(h.resetting)return;h.ride&&h.ride.veh&&(h.ride.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},h.ride.veh.yaw=h.ride.yaw);let b={hw_meta:{v:1,seed:x,time:h.time,build:Ac},hw_player:{dims:Object.assign({},h.dimPos,{[e]:{x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw}}),x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,pitch:h.pitch,fly:h.fly,sel:h.sel,hp:O.hp,bed:h.bed,armor:h.armor,armorDur:h.armorDur,horse:h.horseMob&&!h.horseMob.gone?{x:h.horseMob.p.x,y:h.horseMob.p.y,z:h.horseMob.p.z,saddled:!!h.horseMob.saddled}:h.horse},hw_inventory:Po(S),hw_coins:vm(C),[i("hw_furnaces")]:q,[i("hw_chests")]:Object.fromEntries(Object.entries(Z).map(([R,I])=>[R,Po(I)])),[i("hw_crops")]:nt,hw_quests:st,hw_portal_claimed:K.slice(-200),hw_ach:N,hw_story:A,[i("hw_vehicles")]:h.vehicles.map(R=>({kind:R.kind,x:R.p.x,y:R.p.y,z:R.p.z,yaw:R.yaw,wy:R.y,st:R.st?{x:R.st.x,y:R.st.y,z:R.st.z,shape:R.st.shape,from:R.st.from,s:R.st.s}:null}))};z.dirty&&(u||Date.now()-(h.mapSavedAt||0)>3e4)&&(b[i("hw_map")]=z.serialize(),h.mapSavedAt=Date.now());for(let R of h.dirty){let I=T.get(R);I&&(b[s+R]=Yu(I))}h.dirty.clear(),h.dirtyMeta=!1;try{await Ku(b),h.lastSave=Date.now()}catch(R){console.warn("save failed",R)}}setInterval(()=>{h.started&&Tn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&Tn(!0)}),addEventListener("pagehide",()=>{h.started&&Tn(!0)}),h.stats={mined:0,placed:0};function Kf(){let u=innerWidth,b=innerHeight;St.setSize(u,b,!1),W.aspect=u/b,W.updateProjectionMatrix()}addEventListener("resize",Kf),Kf(),_n(),Pe(),mi(),Zt(),t.creative&&(Xi("#coinpill").hidden=!0,Xi("#modebadge").hidden=!1,wt.btnShop.hidden=!0,wt.hearts.hidden=!0),(Array.isArray(g.vehs)?g.vehs:[]).forEach(u=>{u&&(u.kind==="boat"||u.kind==="minecart"&&u.st)&&Pc(u.kind,u,u.yaw||0,u.kind==="boat"?{y:u.wy}:{st:Object.assign({v:0,lastIn:0},u.st)})}),Ln(),e==="shadow"&&(ye("shadow"),setTimeout(()=>Dt("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",u=>{u.persisted&&Ln()});let jf=performance.now(),Zo=0,kc=0,J0=new ce("#EFEBDD"),K0=new ce("#22302F"),j0=new ce("#E6B48C");function Qf(u){requestAnimationFrame(Qf);let b=(u-jf)/1e3;jf=u;let R=Math.min(.05,b);h.frames.push(b*1e3),h.frames.length>4e3&&h.frames.shift(),at.update(h.p.x,h.p.z);let I=at.ready(h.p.x,h.p.z);if(h.auto&&ng(R),h.started&&!h.overlay&&I&&tg(R),h.started&&I&&!h.travelling){let he=f.get(at.get(h.p.x,h.p.y+.2,h.p.z));he&&he.interact==="shadow_portal"?!h.portalLock&&t.portals&&(h.portalT=(h.portalT||0)+R,h.portalT>1&&V0(e==="shadow"?"overworld":"shadow")):(h.portalLock=!1,h.portalT=0)}h.started&&!h.dead&&Nf(O,R)&&(mi(),h.dirtyMeta=!0),h.time=(h.time+R/_b)%1;let D=h.time*Math.PI*2,X=Math.sin(D),rt=e==="shadow"?.42:Math.min(1,Math.max(0,(X+.12)/.42));yt.copy(K0).lerp(J0,rt);let ft=Math.max(0,1-Math.abs(X)/.3)*(rt>.05?1:.4);if(yt.lerp(j0,ft*.55),e==="shadow"&&yt.set("#1C2620"),!(t.creative&&Is("hw_weather","on")==="off")?bf(h.weather,R):h.weather.level=0,h.ambT=(h.ambT||0)+R,h.ambT>1){h.ambT=0;let he=Math.floor(h.p.x),kt=Math.floor(h.p.z),jt=!1;for(let Ne=2;Ne<14&&!jt;Ne++)f.flat.opaque[at.get(he,Math.floor(h.p.y)+Ne,kt)]&&(jt=!0);h.underground=jt&&h.p.y<L.height(he,kt)-4,h.biome=L.biomeOf(he,kt);let be=yf({day:rt,underground:h.underground});be!==h.musicScene&&(h.musicScene=be,gf(vf[be]))}let Mt=h.underground||e==="shadow"?null:Sf(h.biome,h.weather),Gt=Mt?h.weather.level:0;Gt&&yt.lerp(h.rainSky||(h.rainSky=new ce("#8E9590")),.45*Gt),Tt(R,W.position,Mt),xf(Mt==="rain"?Gt:0),ps(h.overlay==="quiz"||h.overlay==="ask"||h.overlay==="quest"),zt.uniforms.uDay.value=rt*(1-.3*Gt),zt.uniforms.uFog.value.set(...Q0(yt));let ie=qo();h.eyeOff*=Math.pow(5e-4,R);let ne=Rc();if(h.view==="tp"){let he=mr(ie,{x:-ne.x,y:-ne.y,z:-ne.z},4,Wn,jt=>f.flat.opaque[jt]===1),kt=he?Math.max(.4,he.dist-.25):4;W.position.set(ie.x-ne.x*kt,ie.y-ne.y*kt,ie.z-ne.z*kt)}else W.position.set(ie.x,ie.y,ie.z);W.rotation.set(h.pitch,h.yaw,0);let De=W.far*.8;if(Xe.position.set(W.position.x+Math.cos(D)*De,W.position.y+Math.sin(D)*De,W.position.z+.25*De),Xe.scale.setScalar(De*.14),we.position.set(W.position.x-Math.cos(D)*De,W.position.y-Math.sin(D)*De,W.position.z-.25*De),we.scale.setScalar(De*.1),Xe.visible=we.visible=e!=="shadow",Et.visible=h.view==="tp",Et.visible){Et.position.set(h.p.x,h.p.y+(h.ride?T0[h.ride.kind]:0),h.p.z),Et.rotation.y=h.yaw;let he=Math.hypot(h.v.x,h.v.z),kt=Math.sin(u/120)*Math.min(1,he/4)*.7;dt.rotation.x=kt,Pt.rotation.x=-kt,Kt.rotation.x=-kt,Nt.rotation.x=kt;let jt=.35+.65*rt;Et.children.forEach(be=>be.material.color.copy(be.userData.base).multiplyScalar(jt))}for(let he in Rt)Rt[he].color.setScalar(.4+.6*rt);Xf.color.setScalar(.5+.5*rt);for(let he in Rr)Rr[he].color.copy(Rr[he].userData.base).multiplyScalar(.35+.65*rt);h.ride&&h.ride.obj&&(h.ride.obj.position.set(h.p.x,h.p.y,h.p.z),h.ride.obj.rotation.y=h.ride.yaw,h.ride.obj.rotation.x=h.ride.pitch||0);let Re=h.started&&!h.overlay?h.mining.active&&h.mining.src==="screen"?ti("screen",h.mining.sx,h.mining.sy):ti("center"):null;if(Re){re.visible=!0;let he=Ic(Re.n);if(he){let kt=1,jt=1,be=1,Ne=0,Ze=0,Yn=0;for(let Ds of he)kt=Math.min(kt,Ds[0]),jt=Math.min(jt,Ds[1]),be=Math.min(be,Ds[2]),Ne=Math.max(Ne,Ds[3]),Ze=Math.max(Ze,Ds[4]),Yn=Math.max(Yn,Ds[5]);re.scale.set(Ne-kt,Ze-jt,Yn-be),re.position.set(Re.x+(kt+Ne)/2,Re.y+(jt+Ze)/2,Re.z+(be+Yn)/2)}else re.scale.set(1,1,1),re.position.set(Re.x+.5,Re.y+.5,Re.z+.5)}else re.visible=!1;let nn=h.touchPress;if(D0(!h.started||h.overlay||h.mining.active?null:h.touch?nn&&!nn.drag&&!nn.hold?ti("screen",nn.x,nn.y):null:Re),h.mining.active&&Re){let he=Re.x+","+Re.y+","+Re.z;he!==h.mining.k&&(h.mining.k=he,h.mining.t=0),h.mining.t+=R;let kt=t.creative?f.get(Re.n).hardness<0?1/0:t.breakTime:Mc(f.get(Re.n),Wf()).time;if(kt===1/0)se.visible=!1,h.mining.warned||(Dt(f.name(Re.n)+"\u6316\u4E0D\u52D5"),h.mining.warned=!0);else{h.mining.tick=(h.mining.tick||0)+R,h.mining.tick>.25&&(h.mining.tick=0,pn("hit",vr(f.get(Re.n))));let jt=h.mining.t/kt;se.visible=!0,se.position.copy(re.position),se.scale.copy(re.scale),se.material.map=Jt[Math.min(3,Math.floor(jt*4))],jt>=1&&(I0(Re),h.mining.k="",h.mining.t=0,se.visible=!1)}}else se.visible=!1,h.mining.active||(h.mining.warned=!1);if(h.rightHeld&&!h.overlay&&(h.placeRepeat-=R,h.placeRepeat<=0&&(Cr(ti("center")),h.placeRepeat=.25)),eg(R),h.fish){let he=Tu(h.fish,R),kt=S.slots[h.sel];!kt||kt.id!=="fishing_rod"||Math.hypot(h.p.x-h.fish.at.x,h.p.z-h.fish.at.z)>16?Fc():(he==="bite"?(Dt("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),pn("pickup")):he==="escape"&&Dt("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),Uc.position.set(h.fish.at.x,h.fish.at.y-.05+(h.fish.phase==="bite"?-.18:Math.sin(u/400)*.03),h.fish.at.z))}if(h.netT=(h.netT||0)+R,h.netT>.25&&(h.netT=0,B.sendState({x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,dim:e,ride:h.ride?h.ride.kind:null})),h.started){h.lookAcc=(h.lookAcc||0)+Math.min(1,Math.abs(h.yaw-(h.lastYaw??h.yaw))+Math.abs(h.pitch-(h.lastPitch??h.pitch))),h.lastYaw=h.yaw,h.lastPitch=h.pitch;let he=Math.hypot(h.p.x-(h.lastPx??h.p.x),h.p.z-(h.lastPz??h.p.z));he<2&&(h.walkAcc=(h.walkAcc||0)+he),h.lastPx=h.p.x,h.lastPz=h.p.z,h.storyT=(h.storyT||0)+R,h.storyT>.5&&(h.storyT=0,q0())}if(h.objTarget&&!wt.objArrow.hidden){let he=h.objTarget,kt=Math.atan2(-(he.x-h.p.x),-(he.z-h.p.z))-h.yaw;wt.objArrow.style.transform="rotate("+-kt+"rad)"}if(h.mapT=(h.mapT||0)+R,h.mapT>.3&&(h.mapT=0,z.scan(at,h.mapDirty),$o&&z0()),h.cropT=(h.cropT||0)+R,h.cropT>2){h.cropT=0;let he=Date.now();for(let kt in nt){let[jt,be,Ne]=kt.split(",").map(Number);if(!at.ready(jt,Ne))continue;let Ze=f.get(at.get(jt,be,Ne));if(!Ze||!Ze.crop){delete nt[kt];continue}let Yn=rf(nt[kt].t,he,nt[kt].wet);Yn>(Ze.stage|0)&&(at.set(jt,be,Ne,f.num("wheat_"+Yn)),h.dirtyMeta=!0)}}Fn(h.overlay?0:R,rt,u),H0(h.overlay?0:R);for(let he in q){let kt=q[he];kt.jobs.length&&(Ef(kt,R),h.dirtyMeta=!0,h.overlay==="furnace"&&he===Ue&&(h.furnUi=(h.furnUi||0)+R)>.5&&(h.furnUi=0,Ee()))}St.render(gt,W),Zo+=b,kc++,Zo>.5&&(wt.dbg&&(wt.dbg.textContent=`${Math.round(kc/Zo)} fps \xB7 \u5340\u584A ${at.stats.loaded} \xB7 ${jp[L.biomeOf(Math.floor(h.p.x),Math.floor(h.p.z))]} \xB7 ${h.p.x.toFixed(1)}, ${h.p.y.toFixed(1)}, ${h.p.z.toFixed(1)}`),Zo=0,kc=0),!I&&h.started?wt.loading.hidden=!1:wt.loading.hidden=!0}function Q0(u){let b=u.getHexString();return[parseInt(b.slice(0,2),16)/255,parseInt(b.slice(2,4),16)/255,parseInt(b.slice(4,6),16)/255]}function tg(u){let b=h.keys,R=(b.d?1:0)-(b.a?1:0),I=(b.w?1:0)-(b.s?1:0);h.joy.active&&(R=h.joy.x,I=-h.joy.y);let D=Math.min(1,Math.hypot(R,I));if(D>0){let Ze=Math.hypot(R,I);R=R/Ze*D,I=I/Ze*D}let X=-Math.sin(h.yaw),rt=-Math.cos(h.yaw),ft=Math.cos(h.yaw),ht=-Math.sin(h.yaw);if(h.ride&&h.ride.kind!=="horse"){U0(u,R,I,X,rt,ft,ht);return}let Mt=b.control||!h.fly&&b.shift||h.joy.active&&D>.92,Gt=Wn(h.p.x,h.p.y+.1,h.p.z),ie=Wn(h.p.x,h.p.y+1,h.p.z),ne=f.flat.liquid[Gt]===1||f.flat.liquid[ie]===1,De=h.fly?10:h.ride?8.5:ne?2.6:Mt?6.2:4.3,Re=(X*I+ft*R)*De,nn=(rt*I+ht*R)*De,he=b[" "]||h.jumpHeld,kt=h.fly&&b.shift||h.downHeld;if(h.fly)h.v.x=Re,h.v.z=nn,h.v.y=((he?1:0)-(kt?1:0))*8;else{let Ze=h.onGround?14:5,Yn=1-Math.exp(-Ze*u);h.v.x+=(Re-h.v.x)*Yn,h.v.z+=(nn-h.v.z)*Yn,ne?(h.v.y-=9*u,h.v.y<-3&&(h.v.y=-3),he&&(h.v.y=3.4)):f.flat.climb[Gt]||f.flat.climb[ie]?(h.v.y=he||I>.1?3.2:kt?-3:Math.max(h.v.y-28*u,-1.5),h.fallTop=h.p.y):(h.v.y-=28*u,h.v.y<-40&&(h.v.y=-40),he&&h.onGround&&(h.v.y=h.ride?10.5:8.6,h.onGround=!1))}let jt=h.onGround,be=sc(h.p,h.v,u,ue,{canStep:!h.fly,grounded:h.onGround});if(h.onGround=be.onGround,be.stepped&&(h.eyeOff-=be.stepped),h.fallTop==null||h.fly||ne||h.onGround&&jt?h.fallTop=h.p.y:h.onGround||(h.fallTop=Math.max(h.fallTop,h.p.y)),h.onGround&&!jt){let Ze=Lf(h.fallTop-h.p.y,{water:ne,flying:h.fly});Ze&&(Er(Ze),Dt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),h.fallTop=h.p.y}let Ne=Math.hypot(h.v.x,h.v.z);h.onGround&&!h.fly&&Ne>1&&(h.stepT=(h.stepT||0)+u*Ne,h.stepT>1.8&&(h.stepT=0,pn("step",vr(f.get(Wn(h.p.x,h.p.y-.5,h.p.z)))))),h.p.y<-20&&(h.p={x:Lt.x,y:Lt.y+1,z:Lt.z},h.v={x:0,y:0,z:0},h.fallTop=h.p.y)}function eg(u){let b=h.p.x,R=h.p.y+.9,I=h.p.z;for(let D=h.drops.length-1;D>=0;D--){let X=h.drops[D];X.age+=u;let rt=b-X.p.x,ft=R-X.p.y,ht=I-X.p.z,Mt=Math.hypot(rt,ft,ht);if(Mt<1.5&&X.age>.25&&An(S,X.id,1,v)===0){gt.remove(X.s),h.drops.splice(D,1),h.dirtyMeta=!0,Pe(),pn("pickup");continue}if(Mt<4.5&&X.age>.25?(X.v.x=rt/Mt*6,X.v.y=ft/Mt*6,X.v.z=ht/Mt*6,X.p.x+=X.v.x*u,X.p.y+=X.v.y*u,X.p.z+=X.v.z*u):(X.v.y-=18*u,X.v.x*=.9,X.v.z*=.9,sc(X.p,X.v,u,ue,{w:.25,h:.25})),X.age>300){gt.remove(X.s),h.drops.splice(D,1);continue}X.s.position.set(X.p.x,X.p.y+.2+Math.sin(X.age*3)*.06,X.p.z)}}h.auto=zf.get("auto")==="walk";let td=0;function ng(u){h.started||wt.go.click(),td+=u,h.keys.w=!0,h.keys[" "]=td%1.6<.15,h.yaw+=u*.08}window.HW={build:Ac,G:h,reg:f,inv:S,wallet:C,world:at,Inv:Bu,Aud:_f,Amb:wf,chests:Z,crops:nt,Farm:pf,clickSlot:Ft,MODE:n,RULE:t,switchMode:Xn,questState:st,tradesJson:m,spawnVillagers:Oe,terr:L,claimPortalRewards:Ln,portals:k,claimedIds:K,mobS:At,mobDefs:G,spawnMob:$t,hitMob:Sr,mobAt:xn,surfaceY:Ut,health:O,hurt:Er,Health:Of,furnaces:q,Smelt:If,smeltList:ot,recipes:_,craftCtx:Ps,breakInfo:Mc,start(){wt.go.click()},state(){return{pos:{...h.p},coins:C.coins,inv:Po(S),loaded:at.stats.loaded,stats:{...h.stats},overlay:h.overlay,fly:h.fly}},lookAt(u,b,R){let I=qo(),D=u-I.x,X=b-I.y,rt=R-I.z;h.yaw=Math.atan2(-D,-rt),h.pitch=Math.atan2(X,Math.hypot(D,rt))},target(){let u=ti("center");return u&&{x:u.x,y:u.y,z:u.z,n:u.n,face:u.face}},mine(u){u?(h.mining.active=!0,h.mining.src="center"):qn()},use(){return Cr(ti("center"))},key(u,b){h.keys[u]=b},open:qe,close:Le,save:Tn,spawn:Lt,dismount:Pr,Rail:wu,ach:N,mapv:z,Fish:Ru,bump:ye,bank:$,net:B,story:A,Story:Wu,QJ:p,DIM:e,bossDamage:Yf,Shadow:Du,hitVehicle:Dc,rideVehicle:Lc,ghostState:()=>({visible:Ls.visible,sy:Nc[0].scale.y,two:Nc[1].visible}),perf(){return{frames:h.frames.slice(),meshMs:at.stats.meshMs.slice(),genMs:at.stats.genMs.slice(),loaded:at.stats.loaded}},resetPerf(){h.frames.length=0,at.stats.meshMs.length=0,at.stats.genMs.length=0},info:()=>({calls:St.info.render.calls,tris:St.info.render.triangles,geos:St.info.memory.geometries,objs:gt.children.length}),ready:()=>at.ready(h.p.x,h.p.z)},requestAnimationFrame(Qf)}function wb(){let n=Xi("#ui"),t=e=>n.querySelector(e);return zf.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Xi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Xi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Xi("#start"),go:Xi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}Sb().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
