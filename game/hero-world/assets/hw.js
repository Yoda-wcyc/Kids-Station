(()=>{var _g=Object.defineProperty;var _i=(n,t)=>{for(var e in t)_g(n,e,{get:t[e],enumerable:!0})};var Ud=0,Mh=1,Fd=2;var ho=1,Od=2,lr=3,us=0,Rn=1,$n=2,Ti=0,cr=1,bh=2,Sh=3,wh=4,Bd=5;var Cs=100,zd=101,kd=102,Vd=103,Hd=104,Gd=200,Wd=201,Xd=202,qd=203,Ah=204,Eh=205,Yd=206,$d=207,Zd=208,Jd=209,Kd=210,jd=211,Qd=212,tp=213,ep=214,La=0,Da=1,Na=2,nr=3,Ua=4,Fa=5,Oa=6,Ba=7,Th=0,np=1,ip=2,ri=0,Ch=1,Rh=2,Ih=3,Ph=4,Lh=5,Dh=6,Nh=7;var Uh=300,fs=301,Rs=302,pl=303,ml=304,uo=306,za=1e3,bi=1001,ka=1002,hn=1003,sp=1004;var fo=1005;var sn=1006,gl=1007;var ds=1008;var Bn=1009,Fh=1010,Oh=1011,hr=1012,xl=1013,oi=1014,ai=1015,li=1016,_l=1017,yl=1018,ur=1020,Bh=35902,zh=35899,kh=1021,Vh=1022,Zn=1023,Si=1026,ps=1027,Hh=1028,vl=1029,ms=1030,Ml=1031;var bl=1033,po=33776,mo=33777,go=33778,xo=33779,Sl=35840,wl=35841,Al=35842,El=35843,Tl=36196,Cl=37492,Rl=37496,Il=37488,Pl=37489,_o=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,Ol=37812,Bl=37813,zl=37814,kl=37815,Vl=37816,Hl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,$l=36494,Zl=36495,Jl=36283,Kl=36284,yo=36285,jl=36286;var Gr=2300,Va=2301,Ra=2302,ph=2303,mh=2400,gh=2401,xh=2402;var rp=3200;var Gh=0,op=1,Hi="",nn="srgb",Wr="srgb-linear",Xr="linear",Ue="srgb";var Ia=7680;var ap=519,lp=512,cp=513,hp=514,Ql=515,up=516,fp=517,tc=518,dp=519,Wh=35044;var Xh="300 es",si=2e3,qr=2001;function yg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function vg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pp(){let n=Yr("canvas");return n.style.display="block",n}var ld={},ir=null;function $r(...n){let t="THREE."+n.shift();ir?ir("log",t,...n):console.log(t,...n)}function mp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function oe(...n){n=mp(n);let t="THREE."+n.shift();if(ir)ir("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function le(...n){n=mp(n);let t="THREE."+n.shift();if(ir)ir("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ws(...n){let t=n.join(" ");t in ld||(ld[t]=!0,oe(...n))}function gp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var xp={[La]:Da,[Na]:Oa,[Ua]:Ba,[nr]:Fa,[Da]:La,[Oa]:Na,[Ba]:Ua,[Fa]:nr},wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pa=Math.PI/180,Ha=180/Math.PI;function ns(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function Se(n,t,e){return Math.max(t,Math.min(e,n))}function Mg(n,t){return(n%t+t)%t}function Wc(n,t,e){return(1-e)*n+e*t}function vi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jh=class Jh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jh.prototype.isVector2=!0;var _e=Jh,Ai=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],p=i[s+2],d=i[s+3],m=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(d!==v||c!==m||l!==f||p!==_){let g=c*m+l*f+p*_+d*v;g<0&&(m=-m,f=-f,_=-_,v=-v,g=-g);let x=1-a;if(g<.9995){let T=Math.acos(g),L=Math.sin(T);x=Math.sin(x*T)/L,a=Math.sin(a*T)/L,c=c*x+m*a,l=l*x+f*a,p=p*x+_*a,d=d*x+v*a}else{c=c*x+m*a,l=l*x+f*a,p=p*x+_*a,d=d*x+v*a;let T=1/Math.sqrt(c*c+l*l+p*p+d*d);c*=T,l*=T,p*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=p,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],p=i[s+3],d=r[o],m=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+p*d+c*f-l*m,t[e+1]=c*_+p*m+l*d-a*f,t[e+2]=l*_+p*f+a*m-c*d,t[e+3]=p*_-a*d-c*m-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),p=a(s/2),d=a(r/2),m=c(i/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=m*p*d+l*f*_,this._y=l*f*d-m*p*_,this._z=l*p*_+m*f*d,this._w=l*p*d-m*f*_;break;case"YXZ":this._x=m*p*d+l*f*_,this._y=l*f*d-m*p*_,this._z=l*p*_-m*f*d,this._w=l*p*d+m*f*_;break;case"ZXY":this._x=m*p*d-l*f*_,this._y=l*f*d+m*p*_,this._z=l*p*_+m*f*d,this._w=l*p*d-m*f*_;break;case"ZYX":this._x=m*p*d-l*f*_,this._y=l*f*d+m*p*_,this._z=l*p*_-m*f*d,this._w=l*p*d+m*f*_;break;case"YZX":this._x=m*p*d+l*f*_,this._y=l*f*d+m*p*_,this._z=l*p*_-m*f*d,this._w=l*p*d-m*f*_;break;case"XZY":this._x=m*p*d-l*f*_,this._y=l*f*d-m*p*_,this._z=l*p*_+m*f*d,this._w=l*p*d+m*f*_;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],p=e[6],d=e[10],m=i+a+d;if(m>0){let f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(p-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(p-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+p)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,p=e._w;return this._x=i*p+o*a+s*l-r*c,this._y=s*p+o*c+r*a-i*l,this._z=r*p+o*l+i*c-s*a,this._w=o*p-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),p=Math.sin(l);c=Math.sin(c*l)/p,e=Math.sin(e*l)/p,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kh=class Kh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),p=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*p,this.y=i+c*p+a*l-r*d,this.z=s+c*d+r*p-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xc.copy(this).projectOnVector(t),this.sub(Xc)}reflect(t){return this.sub(Xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kh.prototype.isVector3=!0;var J=Kh,Xc=new J,cd=new Ai,jh=class jh{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=r,p[5]=c,p[6]=i,p[7]=o,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],p=i[4],d=i[7],m=i[2],f=i[5],_=i[8],v=s[0],g=s[3],x=s[6],T=s[1],L=s[4],E=s[7],S=s[2],C=s[5],N=s[8];return r[0]=o*v+a*T+c*S,r[3]=o*g+a*L+c*C,r[6]=o*x+a*E+c*N,r[1]=l*v+p*T+d*S,r[4]=l*g+p*L+d*C,r[7]=l*x+p*E+d*N,r[2]=m*v+f*T+_*S,r[5]=m*g+f*L+_*C,r[8]=m*x+f*E+_*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],p=t[8];return e*o*p-e*a*l-i*r*p+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],p=t[8],d=p*o-a*l,m=a*c-p*r,f=l*r-o*c,_=e*d+i*m+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*l-p*i)*v,t[2]=(a*i-s*o)*v,t[3]=m*v,t[4]=(p*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qc.makeScale(t,e)),this}rotate(t){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qc.makeRotation(-t)),this}translate(t,e){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jh.prototype.isMatrix3=!0;var fe=jh,qc=new fe,hd=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bg(){let n={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ue&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ue&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wr]:{primaries:t,whitePoint:i,transfer:Xr,toXYZ:hd,fromXYZ:ud,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:hd,fromXYZ:ud,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}var Me=bg();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bs,Ga=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bs===void 0&&(Bs=Yr("canvas")),Bs.width=t.width,Bs.height=t.height;let s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Bs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vi(e[i]/255)*255):e[i]=Vi(e[i]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sg=0,sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yc(s[o].image)):r.push(Yc(s[o]))}else r=Yc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Yc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ga.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var wg=0,$c=new J,gn=class n extends wi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=bi,s=bi,r=sn,o=ds,a=Zn,c=Bn,l=n.DEFAULT_ANISOTROPY,p=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=ns(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case za:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case za:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Uh;gn.DEFAULT_ANISOTROPY=1;var Qh=class Qh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],p=c[4],d=c[8],m=c[1],f=c[5],_=c[9],v=c[2],g=c[6],x=c[10];if(Math.abs(p-m)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(p+m)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(l+1)/2,E=(f+1)/2,S=(x+1)/2,C=(p+m)/4,N=(d+v)/4,b=(_+g)/4;return L>E&&L>S?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=C/i,r=N/i):E>S?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=b/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=N/r,s=b/r),this.set(i,s,r,e),this}let T=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(m-p)*(m-p));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(d-v)/T,this.z=(m-p)/T,this.w=Math.acos((l+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qh.prototype.isVector4=!0;var Ze=Qh,Wa=class extends wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new gn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Wa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Zr=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xa=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dl=class dl{constructor(t,e,i,s,r,o,a,c,l,p,d,m,f,_,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,p,d,m,f,_,v,g)}set(t,e,i,s,r,o,a,c,l,p,d,m,f,_,v,g){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=p,x[10]=d,x[14]=m,x[3]=f,x[7]=_,x[11]=v,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),p=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let m=o*p,f=o*d,_=a*p,v=a*d;e[0]=c*p,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=m-v*l,e[9]=-a*c,e[2]=v-m*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){let m=c*p,f=c*d,_=l*p,v=l*d;e[0]=m+v*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*p,e[9]=-a,e[2]=f*a-_,e[6]=v+m*a,e[10]=o*c}else if(t.order==="ZXY"){let m=c*p,f=c*d,_=l*p,v=l*d;e[0]=m-v*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*p,e[9]=v-m*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let m=o*p,f=o*d,_=a*p,v=a*d;e[0]=c*p,e[4]=_*l-f,e[8]=m*l+v,e[1]=c*d,e[5]=v*l+m,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let m=o*c,f=o*l,_=a*c,v=a*l;e[0]=c*p,e[4]=v-m*d,e[8]=_*d+f,e[1]=d,e[5]=o*p,e[9]=-a*p,e[2]=-l*p,e[6]=f*d+_,e[10]=m-v*d}else if(t.order==="XZY"){let m=o*c,f=o*l,_=a*c,v=a*l;e[0]=c*p,e[4]=-d,e[8]=l*p,e[1]=m*d+v,e[5]=o*p,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*p,e[10]=v*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ag,t,Eg)}lookAt(t,e,i){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ki.crossVectors(i,Un),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ki.crossVectors(i,Un)),Ki.normalize(),ta.crossVectors(Un,Ki),s[0]=Ki.x,s[4]=ta.x,s[8]=Un.x,s[1]=Ki.y,s[5]=ta.y,s[9]=Un.y,s[2]=Ki.z,s[6]=ta.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],p=i[1],d=i[5],m=i[9],f=i[13],_=i[2],v=i[6],g=i[10],x=i[14],T=i[3],L=i[7],E=i[11],S=i[15],C=s[0],N=s[4],b=s[8],A=s[12],U=s[1],B=s[5],$=s[9],z=s[13],O=s[2],V=s[6],K=s[10],q=s[14],st=s[3],Z=s[7],nt=s[11],ot=s[15];return r[0]=o*C+a*U+c*O+l*st,r[4]=o*N+a*B+c*V+l*Z,r[8]=o*b+a*$+c*K+l*nt,r[12]=o*A+a*z+c*q+l*ot,r[1]=p*C+d*U+m*O+f*st,r[5]=p*N+d*B+m*V+f*Z,r[9]=p*b+d*$+m*K+f*nt,r[13]=p*A+d*z+m*q+f*ot,r[2]=_*C+v*U+g*O+x*st,r[6]=_*N+v*B+g*V+x*Z,r[10]=_*b+v*$+g*K+x*nt,r[14]=_*A+v*z+g*q+x*ot,r[3]=T*C+L*U+E*O+S*st,r[7]=T*N+L*B+E*V+S*Z,r[11]=T*b+L*$+E*K+S*nt,r[15]=T*A+L*z+E*q+S*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],p=t[2],d=t[6],m=t[10],f=t[14],_=t[3],v=t[7],g=t[11],x=t[15],T=c*f-l*m,L=a*f-l*d,E=a*m-c*d,S=o*f-l*p,C=o*m-c*p,N=o*d-a*p;return e*(v*T-g*L+x*E)-i*(_*T-g*S+x*C)+s*(_*L-v*S+x*N)-r*(_*E-v*C+g*N)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],p=t[10];return e*(o*p-a*l)-i*(r*p-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],p=t[8],d=t[9],m=t[10],f=t[11],_=t[12],v=t[13],g=t[14],x=t[15],T=e*a-i*o,L=e*c-s*o,E=e*l-r*o,S=i*c-s*a,C=i*l-r*a,N=s*l-r*c,b=p*v-d*_,A=p*g-m*_,U=p*x-f*_,B=d*g-m*v,$=d*x-f*v,z=m*x-f*g,O=T*z-L*$+E*B+S*U-C*A+N*b;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/O;return t[0]=(a*z-c*$+l*B)*V,t[1]=(s*$-i*z-r*B)*V,t[2]=(v*N-g*C+x*S)*V,t[3]=(m*C-d*N-f*S)*V,t[4]=(c*U-o*z-l*A)*V,t[5]=(e*z-s*U+r*A)*V,t[6]=(g*E-_*N-x*L)*V,t[7]=(p*N-m*E+f*L)*V,t[8]=(o*$-a*U+l*b)*V,t[9]=(i*U-e*$-r*b)*V,t[10]=(_*C-v*E+x*T)*V,t[11]=(d*E-p*C-f*T)*V,t[12]=(a*A-o*B-c*b)*V,t[13]=(e*B-i*A+s*b)*V,t[14]=(v*L-_*S-g*T)*V,t[15]=(p*S-d*L+m*T)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,p=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,p*a+i,p*c-s*o,0,l*c-s*a,p*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,p=o+o,d=a+a,m=r*l,f=r*p,_=r*d,v=o*p,g=o*d,x=a*d,T=c*l,L=c*p,E=c*d,S=i.x,C=i.y,N=i.z;return s[0]=(1-(v+x))*S,s[1]=(f+E)*S,s[2]=(_-L)*S,s[3]=0,s[4]=(f-E)*C,s[5]=(1-(m+x))*C,s[6]=(g+T)*C,s[7]=0,s[8]=(_+L)*N,s[9]=(g-T)*N,s[10]=(1-(m+v))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=zs.set(s[0],s[1],s[2]).length(),a=zs.set(s[4],s[5],s[6]).length(),c=zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let l=1/o,p=1/a,d=1/c;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=p,ti.elements[5]*=p,ti.elements[6]*=p,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,e.setFromRotationMatrix(ti),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=si,c=!1){let l=this.elements,p=2*r/(e-t),d=2*r/(i-s),m=(e+t)/(e-t),f=(i+s)/(i-s),_,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===si)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===qr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=p,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=si,c=!1){let l=this.elements,p=2/(e-t),d=2/(i-s),m=-(e+t)/(e-t),f=-(i+s)/(i-s),_,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===si)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===qr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=p,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};dl.prototype.isMatrix4=!0;var qe=dl,zs=new J,ti=new qe,Ag=new J(0,0,0),Eg=new J(1,1,1),Ki=new J,ta=new J,Un=new J,fd=new qe,dd=new Ai,is=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],p=s[9],d=s[2],m=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,f),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dd.setFromEuler(this),this.setFromQuaternion(dd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};is.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tg=0,pd=new J,ks=new Ai,Fi=new qe,ea=new J,Ur=new J,Cg=new J,Rg=new Ai,md=new J(1,0,0),gd=new J(0,1,0),xd=new J(0,0,1),_d={type:"added"},Ig={type:"removed"},Vs={type:"childadded",child:null},Zc={type:"childremoved",child:null},Cn=class n extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new J,e=new is,i=new Ai,s=new J(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new fe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(md,t)}rotateY(t){return this.rotateOnAxis(gd,t)}rotateZ(t){return this.rotateOnAxis(xd,t)}translateOnAxis(t,e){return pd.copy(t).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(md,t)}translateY(t){return this.translateOnAxis(gd,t)}translateZ(t){return this.translateOnAxis(xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ea.copy(t):ea.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ur,ea,this.up):Fi.lookAt(ea,Ur,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Fi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_d),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ig),Zc.child=t,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_d),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Cg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Rg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,p=c.length;l<p;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),p=o(t.images),d=o(t.shapes),m=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),p.length>0&&(i.images=p),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let c=[];for(let l in a){let p=a[l];delete p.metadata,c.push(p)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new J(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),x=this._getHandJoint(l,v);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let p=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],m=p.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&m>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},na={h:0,s:0,l:0};function Jc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ce=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=i,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Me.workingColorSpace){if(t=Mg(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Jc(o,r,t+1/3),this.g=Jc(o,r,t),this.b=Jc(o,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function i(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let i=_p[t.toLowerCase()];return i!==void 0?this.setHex(i,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Me.workingToColorSpace(yn.copy(this),t),Math.round(Se(yn.r*255,0,255))*65536+Math.round(Se(yn.g*255,0,255))*256+Math.round(Se(yn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,p=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=p<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=p,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=nn){Me.workingToColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(na);let i=Wc(ji.h,na.h,e),s=Wc(ji.s,na.s,e),r=Wc(ji.l,na.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new ce;ce.NAMES=_p;var Kr=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new J,Oi=new J,Kc=new J,Bi=new J,Hs=new J,Gs=new J,yd=new J,jc=new J,Qc=new J,th=new J,eh=new Ze,nh=new Ze,ih=new Ze,Mi=class n{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ei.subVectors(s,e),Oi.subVectors(i,e),Kc.subVectors(t,e);let o=ei.dot(ei),a=ei.dot(Oi),c=ei.dot(Kc),l=Oi.dot(Oi),p=Oi.dot(Kc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let m=1/d,f=(l*c-a*p)*m,_=(o*p-a*c)*m;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(o,Bi.y),c.addScaledVector(a,Bi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,e),nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(eh,r.x),o.addScaledVector(nh,r.y),o.addScaledVector(ih,r.z),o}static isFrontFacing(t,e,i,s){return ei.subVectors(i,e),Oi.subVectors(t,e),ei.cross(Oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ei.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,i),Gs.subVectors(r,i),jc.subVectors(t,i);let c=Hs.dot(jc),l=Gs.dot(jc);if(c<=0&&l<=0)return e.copy(i);Qc.subVectors(t,s);let p=Hs.dot(Qc),d=Gs.dot(Qc);if(p>=0&&d<=p)return e.copy(s);let m=c*d-p*l;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Hs,o);th.subVectors(t,r);let f=Hs.dot(th),_=Gs.dot(th);if(_>=0&&f<=_)return e.copy(r);let v=f*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Gs,a);let g=p*_-f*d;if(g<=0&&d-p>=0&&f-_>=0)return yd.subVectors(r,s),a=(d-p)/(d-p+(f-_)),e.copy(s).addScaledVector(yd,a);let x=1/(g+v+m);return o=v*x,a=m*x,e.copy(i).addScaledVector(Hs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ss=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),sa.subVectors(this.max,Fr),Ws.subVectors(t.a,Fr),Xs.subVectors(t.b,Fr),qs.subVectors(t.c,Fr),Qi.subVectors(Xs,Ws),ts.subVectors(qs,Xs),vs.subVectors(Ws,qs);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-vs.z,vs.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,vs.z,0,-vs.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-vs.y,vs.x,0];return!sh(e,Ws,Xs,qs,sa)||(e=[1,0,0,0,1,0,0,0,1],!sh(e,Ws,Xs,qs,sa))?!1:(ra.crossVectors(Qi,ts),e=[ra.x,ra.y,ra.z],sh(e,Ws,Xs,qs,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zi=[new J,new J,new J,new J,new J,new J,new J,new J],ni=new J,ia=new ss,Ws=new J,Xs=new J,qs=new J,Qi=new J,ts=new J,vs=new J,Fr=new J,sa=new J,ra=new J,Ms=new J;function sh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),c=t.dot(Ms),l=e.dot(Ms),p=i.dot(Ms);if(Math.max(-Math.max(c,l,p),Math.min(c,l,p))>a)return!1}return!0}var en=new J,oa=new _e,Lg=0,Je=class extends wi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wh,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var jr=class extends Je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qr=class extends Je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Tn=class extends Je{constructor(t,e,i){super(new Float32Array(t),e,i)}},Dg=new ss,Or=new J,rh=new J,rs=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Dg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(rh)),this.expandByPoint(Or.copy(t.center).sub(rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ng=0,qn=new qe,oh=new Cn,Ys=new J,Fn=new ss,Br=new ss,cn=new J,rn=class n extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yg(t)?Qr:jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new fe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Fn.min,Br.min),Fn.expandByPoint(cn),cn.addVectors(Fn.max,Br.max),Fn.expandByPoint(cn)):(Fn.expandByPoint(Br.min),Fn.expandByPoint(Br.max))}Fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,p=a.count;l<p;l++)cn.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(t,l),cn.add(Ys)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Je(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let b=0;b<i.count;b++)a[b]=new J,c[b]=new J;let l=new J,p=new J,d=new J,m=new _e,f=new _e,_=new _e,v=new J,g=new J;function x(b,A,U){l.fromBufferAttribute(i,b),p.fromBufferAttribute(i,A),d.fromBufferAttribute(i,U),m.fromBufferAttribute(r,b),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,U),p.sub(l),d.sub(l),f.sub(m),_.sub(m);let B=1/(f.x*_.y-_.x*f.y);isFinite(B)&&(v.copy(p).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(B),g.copy(d).multiplyScalar(f.x).addScaledVector(p,-_.x).multiplyScalar(B),a[b].add(v),a[A].add(v),a[U].add(v),c[b].add(g),c[A].add(g),c[U].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let b=0,A=T.length;b<A;++b){let U=T[b],B=U.start,$=U.count;for(let z=B,O=B+$;z<O;z+=3)x(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let L=new J,E=new J,S=new J,C=new J;function N(b){S.fromBufferAttribute(s,b),C.copy(S);let A=a[b];L.copy(A),L.sub(S.multiplyScalar(S.dot(A))).normalize(),E.crossVectors(C,A);let B=E.dot(c[b])<0?-1:1;o.setXYZW(b,L.x,L.y,L.z,B)}for(let b=0,A=T.length;b<A;++b){let U=T[b],B=U.start,$=U.count;for(let z=B,O=B+$;z<O;z+=3)N(t.getX(z+0)),N(t.getX(z+1)),N(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,f=i.count;m<f;m++)i.setXYZ(m,0,0,0);let s=new J,r=new J,o=new J,a=new J,c=new J,l=new J,p=new J,d=new J;if(t)for(let m=0,f=t.count;m<f;m+=3){let _=t.getX(m+0),v=t.getX(m+1),g=t.getX(m+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(p),c.add(p),l.add(p),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let m=0,f=e.count;m<f;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,c){let l=a.array,p=a.itemSize,d=a.normalized,m=new l.constructor(c.length*p),f=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*p;for(let x=0;x<p;x++)m[_++]=l[f++]}return new Je(m,p,d)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let p=0,d=l.length;p<d;p++){let m=l[p],f=t(m,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],p=[];for(let d=0,m=l.length;d<m;d++){let f=l[d];p.push(f.toJSON(t.data))}p.length>0&&(s[c]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let p=s[l];this.setAttribute(l,p.clone(e))}let r=t.morphAttributes;for(let l in r){let p=[],d=r[l];for(let m=0,f=d.length;m<f;m++)p.push(d[m].clone(e));this.morphAttributes[l]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,p=o.length;l<p;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wh,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new J,to=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ah=new J,Ug=new J,Fg=new fe,ii=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ah.subVectors(i,e).cross(Ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ah),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Fg.getNormalMatrix(t),s=this.coplanarPoint(ah).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Og=0,Ei=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=cr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Eh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ii().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _e().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},os=class extends Ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s,zr=new J,Zs=new J,Js=new J,Ks=new _e,kr=new _e,yp=new qe,aa=new J,Vr=new J,la=new J,vd=new _e,lh=new _e,Md=new _e,As=class extends Cn{constructor(t=new os){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new rn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qa(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new to(i,3,0,!1)),$s.setAttribute("uv",new to(i,2,3,!1))}this.geometry=$s,this.material=t,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),yp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ca(aa.set(-.5,-.5,0),Js,o,Zs,s,r),ca(Vr.set(.5,-.5,0),Js,o,Zs,s,r),ca(la.set(.5,.5,0),Js,o,Zs,s,r),vd.set(0,0),lh.set(1,0),Md.set(1,1);let a=t.ray.intersectTriangle(aa,Vr,la,!1,zr);if(a===null&&(ca(Vr.set(-.5,.5,0),Js,o,Zs,s,r),lh.set(0,1),a=t.ray.intersectTriangle(aa,la,Vr,!1,zr),a===null))return;let c=t.ray.origin.distanceTo(zr);c<t.near||c>t.far||e.push({distance:c,point:zr.clone(),uv:Mi.getInterpolation(zr,aa,Vr,la,vd,lh,Md,new _e),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ca(n,t,e,i,s,r){Ks.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(kr.x=r*Ks.x-s*Ks.y,kr.y=s*Ks.x+r*Ks.y):kr.copy(Ks),n.copy(t),n.x+=kr.x,n.y+=kr.y,n.applyMatrix4(yp)}var ki=new J,ch=new J,ha=new J,ua=new J,or=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ch.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(ch);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ha),a=ua.dot(this.direction),c=-ua.dot(ha),l=ua.lengthSq(),p=Math.abs(1-o*o),d,m,f,_;if(p>0)if(d=o*c-a,m=o*a-c,_=r*p,d>=0)if(m>=-_)if(m<=_){let v=1/p;d*=v,m*=v,f=d*(d+o*m+2*a)+m*(o*d+m+2*c)+l}else m=r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*c)+l;else m=-r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*c)+l;else m<=-_?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+m*(m+2*c)+l):m<=_?(d=0,m=Math.min(Math.max(-r,-c),r),f=m*(m+2*c)+l):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+m*(m+2*c)+l);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ch).addScaledVector(ha,m),f}intersectSphere(t,e){if(t.radius<0)return null;ki.subVectors(t.center,this.origin);let i=ki.dot(this.direction),s=ki.dot(ki)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,m=this.origin;return l>=0?(i=(t.min.x-m.x)*l,s=(t.max.x-m.x)*l):(i=(t.max.x-m.x)*l,s=(t.min.x-m.x)*l),p>=0?(r=(t.min.y-m.y)*p,o=(t.max.y-m.y)*p):(r=(t.max.y-m.y)*p,o=(t.min.y-m.y)*p),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-m.z)*d,c=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,c=(t.min.z-m.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,p=a.z,d=t.x-o.x,m=t.y-o.y,f=t.z-o.z,_=e.x-o.x,v=e.y-o.y,g=e.z-o.z,x=i.x-o.x,T=i.y-o.y,L=i.z-o.z,E=Math.abs(c),S=Math.abs(l),C=Math.abs(p),N,b,A,U,B,$,z,O,V,K,q,st;if(E>=S&&E>=C?(A=c,$=d,V=_,st=x,c>=0?(N=l,b=p,U=m,B=f,z=v,O=g,K=T,q=L):(N=p,b=l,U=f,B=m,z=g,O=v,K=L,q=T)):S>=C?(A=l,$=m,V=v,st=T,l>=0?(N=p,b=c,U=f,B=d,z=g,O=_,K=L,q=x):(N=c,b=p,U=d,B=f,z=_,O=g,K=x,q=L)):(A=p,$=f,V=g,st=L,p>=0?(N=c,b=l,U=d,B=m,z=_,O=v,K=x,q=T):(N=l,b=c,U=m,B=d,z=v,O=_,K=T,q=x)),A===0)return null;let Z=N/A,nt=b/A,ot=1/A,Ct=U-Z*$,pt=B-nt*$,wt=z-Z*V,gt=O-nt*V,yt=K-Z*st,W=q-nt*st,et=yt*gt-W*wt,xt=Ct*W-pt*yt,kt=wt*pt-gt*Ct;if(s){if(et<0||xt<0||kt<0)return null}else if((et<0||xt<0||kt<0)&&(et>0||xt>0||kt>0))return null;let mt=et+xt+kt;if(mt===0)return null;let at=ot*(et*$+xt*V+kt*st);return(mt>0?at<0:at>0)?null:this.at(at/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},bd=new qe,bs=new or,fa=new rs,Sd=new J,da=new J,pa=new J,ma=new J,hh=new J,ga=new J,wd=new J,xa=new J,Oe=class extends Cn{constructor(t=new rn,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let p=a[c],d=r[c];p!==0&&(hh.fromBufferAttribute(d,t),o?ga.addScaledVector(hh,p):ga.addScaledVector(hh.sub(e),p))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),bs.copy(t.ray).recast(t.near),!(fa.containsPoint(bs.origin)===!1&&(bs.intersectSphere(fa,Sd)===null||bs.origin.distanceToSquared(Sd)>(t.far-t.near)**2))&&(bd.copy(r).invert(),bs.copy(t.ray).applyMatrix4(bd),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,p=r.attributes.uv1,d=r.attributes.normal,m=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=m.length;_<v;_++){let g=m[_],x=o[g.materialIndex],T=Math.max(g.start,f.start),L=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let E=T,S=L;E<S;E+=3){let C=a.getX(E),N=a.getX(E+1),b=a.getX(E+2);s=_a(this,x,t,i,l,p,d,C,N,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=_,x=v;g<x;g+=3){let T=a.getX(g),L=a.getX(g+1),E=a.getX(g+2);s=_a(this,o,t,i,l,p,d,T,L,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=m.length;_<v;_++){let g=m[_],x=o[g.materialIndex],T=Math.max(g.start,f.start),L=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let E=T,S=L;E<S;E+=3){let C=E,N=E+1,b=E+2;s=_a(this,x,t,i,l,p,d,C,N,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=_,x=v;g<x;g+=3){let T=g,L=g+1,E=g+2;s=_a(this,o,t,i,l,p,d,T,L,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Bg(n,t,e,i,s,r,o,a){let c;if(t.side===Rn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===us,a),c===null)return null;xa.copy(a),xa.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(xa);return l<e.near||l>e.far?null:{distance:l,point:xa.clone(),object:n}}function _a(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,da),n.getVertexPosition(c,pa),n.getVertexPosition(l,ma);let p=Bg(n,t,e,i,da,pa,ma,wd);if(p){let d=new J;Mi.getBarycoord(wd,da,pa,ma,d),s&&(p.uv=Mi.getInterpolatedAttribute(s,a,c,l,d,new _e)),r&&(p.uv1=Mi.getInterpolatedAttribute(r,a,c,l,d,new _e)),o&&(p.normal=Mi.getInterpolatedAttribute(o,a,c,l,d,new J),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let m={a,b:c,c:l,normal:new J,materialIndex:0};Mi.getNormal(da,pa,ma,m.normal),p.face=m,p.barycoord=d}return p}var Ya=class extends gn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=hn,p=hn,d,m){super(null,o,a,c,l,p,s,r,d,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ss=new rs,zg=new _e(.5,.5),ya=new J,eo=class{constructor(t=new ii,e=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],p=r[4],d=r[5],m=r[6],f=r[7],_=r[8],v=r[9],g=r[10],x=r[11],T=r[12],L=r[13],E=r[14],S=r[15];if(s[0].setComponents(l-o,f-p,x-_,S-T).normalize(),s[1].setComponents(l+o,f+p,x+_,S+T).normalize(),s[2].setComponents(l+a,f+d,x+v,S+L).normalize(),s[3].setComponents(l-a,f-d,x-v,S-L).normalize(),i)s[4].setComponents(c,m,g,E).normalize(),s[5].setComponents(l-c,f-m,x-g,S-E).normalize();else if(s[4].setComponents(l-c,f-m,x-g,S-E).normalize(),e===si)s[5].setComponents(l+c,f+m,x+g,S+E).normalize();else if(e===qr)s[5].setComponents(c,m,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){Ss.center.set(0,0,0);let e=zg.distanceTo(t.center);return Ss.radius=.7071067811865476+e,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Es=class extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$a=new J,Za=new J,Ad=new qe,Hr=new or,va=new rs,uh=new J,Ed=new J,Ja=class extends Cn{constructor(t=new rn,e=new Es){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)$a.fromBufferAttribute(e,s-1),Za.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=$a.distanceTo(Za);t.setAttribute("lineDistance",new Tn(i,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;Ad.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(Ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){let f=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=f,g=_-1;v<g;v+=l){let x=p.getX(v),T=p.getX(v+1),L=Ma(this,t,Hr,c,x,T,v);L&&e.push(L)}if(this.isLineLoop){let v=p.getX(_-1),g=p.getX(f),x=Ma(this,t,Hr,c,v,g,_-1);x&&e.push(x)}}else{let f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=f,g=_-1;v<g;v+=l){let x=Ma(this,t,Hr,c,v,v+1,v);x&&e.push(x)}if(this.isLineLoop){let v=Ma(this,t,Hr,c,_-1,f,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ma(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if($a.fromBufferAttribute(a,s),Za.fromBufferAttribute(a,r),e.distanceSqToSegment($a,Za,uh,Ed)>i)return;uh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(uh);if(!(l<t.near||l>t.far))return{distance:l,point:Ed.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Td=new J,Cd=new J,Ts=class extends Ja{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Td.fromBufferAttribute(e,s),Cd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Td.distanceTo(Cd);t.setAttribute("lineDistance",new Tn(i,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ar=class extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rd=new qe,_h=new or,ba=new rs,Sa=new J,no=class extends Cn{constructor(t=new rn,e=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;Rd.copy(s).invert(),_h.copy(t.ray).applyMatrix4(Rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let m=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=m,v=f;_<v;_++){let g=l.getX(_);Sa.fromBufferAttribute(d,g),Id(Sa,g,c,s,t,e,this)}}else{let m=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=m,v=f;_<v;_++)Sa.fromBufferAttribute(d,_),Id(Sa,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Id(n,t,e,i,s,r,o){let a=_h.distanceSqToPoint(n);if(a<e){let c=new J;_h.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var io=class extends gn{constructor(t=[],e=fs,i,s,r,o,a,c,l,p){super(t,e,i,s,r,o,a,c,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yn=class extends gn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var as=class extends gn{constructor(t,e,i=oi,s,r,o,a=hn,c=hn,l,p=Si,d=1){if(p!==Si&&p!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:d};super(m,s,r,o,a,c,p,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ka=class extends as{constructor(t,e=oi,i=fs,s,r,o=hn,a=hn,c,l=Si){let p={width:t,height:t,depth:1},d=[p,p,p,p,p,p];super(t,t,e,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},so=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qe=class n extends rn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],p=[],d=[],m=0,f=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Tn(l,3)),this.setAttribute("normal",new Tn(p,3)),this.setAttribute("uv",new Tn(d,2));function _(v,g,x,T,L,E,S,C,N,b,A){let U=E/N,B=S/b,$=E/2,z=S/2,O=C/2,V=N+1,K=b+1,q=0,st=0,Z=new J;for(let nt=0;nt<K;nt++){let ot=nt*B-z;for(let Ct=0;Ct<V;Ct++){let pt=Ct*U-$;Z[v]=pt*T,Z[g]=ot*L,Z[x]=O,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[g]=0,Z[x]=C>0?1:-1,p.push(Z.x,Z.y,Z.z),d.push(Ct/N),d.push(1-nt/b),q+=1}}for(let nt=0;nt<b;nt++)for(let ot=0;ot<N;ot++){let Ct=m+ot+V*nt,pt=m+ot+V*(nt+1),wt=m+(ot+1)+V*(nt+1),gt=m+(ot+1)+V*nt;c.push(Ct,pt,gt),c.push(pt,wt,gt),st+=6}a.addGroup(f,st,A),f+=st,m+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wa=new J,Aa=new J,fh=new J,Ea=new Mi,ro=class extends rn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Pa*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],p=["a","b","c"],d=new Array(3),m={},f=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);let{a:v,b:g,c:x}=Ea;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),x.fromBufferAttribute(a,l[2]),Ea.getNormal(fh),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let L=(T+1)%3,E=d[T],S=d[L],C=Ea[p[T]],N=Ea[p[L]],b=`${E}_${S}`,A=`${S}_${E}`;A in m&&m[A]?(fh.dot(m[A].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(N.x,N.y,N.z)),m[A]=null):b in m||(m[b]={index0:l[T],index1:l[L],normal:fh.clone()})}}for(let _ in m)if(m[_]){let{index0:v,index1:g}=m[_];wa.fromBufferAttribute(a,v),Aa.fromBufferAttribute(a,g),f.push(wa.x,wa.y,wa.z),f.push(Aa.x,Aa.y,Aa.z)}this.setAttribute("position",new Tn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var oo=class n extends rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,p=c+1,d=t/a,m=e/c,f=[],_=[],v=[],g=[];for(let x=0;x<p;x++){let T=x*m-o;for(let L=0;L<l;L++){let E=L*d-r;_.push(E,-T,0),v.push(0,0,1),g.push(L/a),g.push(1-x/c)}}for(let x=0;x<c;x++)for(let T=0;T<a;T++){let L=T+l*x,E=T+l*(x+1),S=T+1+l*(x+1),C=T+1+l*x;f.push(L,E,C),f.push(E,S,C)}this.setIndex(f),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(v,3)),this.setAttribute("uv",new Tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Is(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Pd(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Pd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Sn(n){let t={};for(let e=0;e<n.length;e++){let i=Is(n[e]);for(let s in i)t[s]=i[s]}return t}function Pd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var vp={clone:Is,merge:Sn},Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ce().setHex(s.value);break;case"v2":this.uniforms[i].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new J().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m3":this.uniforms[i].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ja=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Qa=class extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function js(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function dh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ls=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends ls{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gh:r=t,a=2*e-i;break;case xh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case gh:o=t,c=2*i-e;break;case xh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,p=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,p=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,f=this._weightNext,_=(i-e)/(s-e),v=_*_,g=v*_,x=-m*g+2*m*v-m*_,T=(1+m)*g+(-1.5-2*m)*v+(-.5+m)*_+1,L=(-1-f)*g+(1.5+f)*v+.5*_,E=f*g-f*v;for(let S=0;S!==a;++S)r[S]=x*o[p+S]+T*o[l+S]+L*o[c+S]+E*o[d+S];return r}},nl=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,p=(i-e)/(s-e),d=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*d+o[c+m]*p;return r}},il=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sl=class extends ls{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,p=this.inTangents,d=this.outTangents;if(!p||!d){let _=(i-e)/(s-e),v=1-_;for(let g=0;g!==a;++g)r[g]=o[l+g]*v+o[c+g]*_;return r}let m=a*2,f=t-1;for(let _=0;_!==a;++_){let v=o[l+_],g=o[c+_],x=f*m+_*2,T=d[x],L=d[x+1],E=t*m+_*2,S=p[E],C=p[E+1],N=Wg(i,e,T,S,s);r[_]=Mp(N,v,L,C,g)}return r}};function Mp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Gg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Wg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Mp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Gg(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var On=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),dh(t.settings)&&(i.settings={inTangents:js(t.settings.inTangents,Array),outTangents:js(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case Ra:e=this.InterpolantFactoryMethodSmooth;break;case ph:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return oe("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Ra;case this.InterpolantFactoryMethodBezier:return ph}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;dh(this.settings)&&(Ld(this.settings.inTangents,t),Ld(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){le("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){le("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&vg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){le("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],p=t[a+1];if(l!==p&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*i,m=d-i,f=d+i;for(let _=0;_!==i;++_){let v=e[d+_];if(v!==e[m+_]||v!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*i,m=o*i;for(let f=0;f!==i;++f)e[m+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ld(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Va;var cs=class extends On{constructor(t,e,i){super(t,e,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Gr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends On{constructor(t,e,i,s){super(t,e,i,s)}};rl.prototype.ValueTypeName="color";var ol=class extends On{constructor(t,e,i,s){super(t,e,i,s)}};ol.prototype.ValueTypeName="number";var al=class extends ls{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let p=l+a;l!==p;l+=4)Ai.slerpFlat(r,0,o,l-a,o,l,c);return r}},ao=class extends On{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends On{constructor(t,e,i){super(t,e,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Gr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends On{constructor(t,e,i,s){super(t,e,i,s)}};ll.prototype.ValueTypeName="vector";var cl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),c?c(p):p},this.setURLModifier=function(p){return c=p,this},this.addHandler=function(p,d){return l.push(p,d),this},this.removeHandler=function(p){let d=l.indexOf(p);return d!==-1&&l.splice(d,2),this},this.getHandler=function(p){for(let d=0,m=l.length;d<m;d+=2){let f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(p))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bp=new cl,hl=class{constructor(t){this.manager=t!==void 0?t:bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=new J,Ca=new Ai,yi=new J,lo=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ta,Ca,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Ca,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ta,Ca,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Ca,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new J,Dd=new _e,Nd=new _e,vn=class extends lo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ha*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,Dd,Nd),e.subVectors(Nd,Dd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var co=class extends lo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=p*this.view.offsetY,c=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Qs=-90,tr=1,ul=class extends Cn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(Qs,tr,t,e);s.layers=this.layers,this.add(s);let r=new vn(Qs,tr,t,e);r.layers=this.layers,this.add(r);let o=new vn(Qs,tr,t,e);o.layers=this.layers,this.add(o);let a=new vn(Qs,tr,t,e);a.layers=this.layers,this.add(a);let c=new vn(Qs,tr,t,e);c.layers=this.layers,this.add(c);let l=new vn(Qs,tr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,p]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(d,m,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},fl=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Yh="\\[\\]\\.:\\/",Xg=new RegExp("["+Yh+"]","g"),$h="[^"+Yh+"]",qg="[^"+Yh.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",$h),$g=/(WCOD+)?/.source.replace("WCOD",qg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),Kg=new RegExp("^"+Yg+$g+Zg+Jg+"$"),jg=["material","materials","bones","map"],yh=class{constructor(t,e,i){let s=i||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},He=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(t){let e=Kg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===l){l=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;le("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=yh;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hb=new Float32Array(1);var tu=class tu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};tu.prototype.isMatrix2=!0;var vh=tu;function Zh(n,t,e,i){let s=Qg(i);switch(e){case kh:return n*t;case Hh:return n*t/s.components*s.byteLength;case vl:return n*t/s.components*s.byteLength;case ms:return n*t*2/s.components*s.byteLength;case Ml:return n*t*2/s.components*s.byteLength;case Vh:return n*t*3/s.components*s.byteLength;case Zn:return n*t*4/s.components*s.byteLength;case bl:return n*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case go:case xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:case El:return Math.max(n,16)*Math.max(t,8)/4;case Sl:case Al:return Math.max(n,8)*Math.max(t,8)/2;case Tl:case Cl:case Il:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Rl:case _o:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yl:case $l:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yo:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qg(n){switch(n){case Bn:case Fh:return{byteLength:1,components:1};case hr:case Oh:case li:return{byteLength:2,components:1};case _l:case yl:return{byteLength:2,components:4};case oi:case xl:case ai:return{byteLength:4,components:1};case Bh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ex(n){let t=new WeakMap;function e(a,c){let l=a.array,p=a.usage,d=l.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,l,p),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let p=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,p);else{d.sort((f,_)=>f.start-_.start);let m=0;for(let f=1;f<d.length;f++){let _=d[m],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++m,d[m]=v)}d.length=m+1;for(let f=0,_=d.length;f<_;f++){let v=d[f];n.bufferSubData(l,v.start*p.BYTES_PER_ELEMENT,p,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ix=`#ifdef USE_ALPHAHASH
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
#endif`,sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lx=`#ifdef USE_AOMAP
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
#endif`,cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mx=`#ifdef USE_IRIDESCENCE
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
#endif`,gx=`#ifdef USE_BUMPMAP
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ax=`#define PI 3.141592653589793
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
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tx=`vec3 transformedNormal = objectNormal;
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
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gx=`#ifdef USE_GRADIENTMAP
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
}`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$x=`#ifdef USE_ENVMAP
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
#endif`,Zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
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
#endif`,t_=`uniform sampler2D dfgLUT;
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
}`,e_=`
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`#ifdef USE_MORPHTARGETS
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
#endif`,y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A_=`#ifdef USE_NORMALMAP
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
#endif`,E_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V_=`float getShadowMask() {
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
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,W_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
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
}`,cy=`#if DEPTH_PACKING == 3200
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
}`,hy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,xy=`uniform vec3 diffuse;
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
}`,_y=`#define LAMBERT
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
}`,yy=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,My=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Sy=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ay=`#define PHONG
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
}`,Ey=`#define STANDARD
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
}`,Ty=`#define STANDARD
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
}`,Cy=`#define TOON
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
}`,Ry=`#define TOON
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
}`,Iy=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:sx,alphamap_pars_fragment:rx,alphatest_fragment:ox,alphatest_pars_fragment:ax,aomap_fragment:lx,aomap_pars_fragment:cx,batching_pars_vertex:hx,batching_vertex:ux,begin_vertex:fx,beginnormal_vertex:dx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:gx,clipping_planes_fragment:xx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:yx,clipping_planes_vertex:vx,color_fragment:Mx,color_pars_fragment:bx,color_pars_vertex:Sx,color_vertex:wx,common:Ax,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:Tx,displacementmap_pars_vertex:Cx,displacementmap_vertex:Rx,emissivemap_fragment:Ix,emissivemap_pars_fragment:Px,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Nx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:Fx,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:$x,envmap_vertex:Bx,fog_vertex:zx,fog_pars_vertex:kx,fog_fragment:Vx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Gx,lightmap_pars_fragment:Wx,lights_lambert_fragment:Xx,lights_lambert_pars_fragment:qx,lights_pars_begin:Yx,lights_toon_fragment:Zx,lights_toon_pars_fragment:Jx,lights_phong_fragment:Kx,lights_phong_pars_fragment:jx,lights_physical_fragment:Qx,lights_physical_pars_fragment:t_,lights_fragment_begin:e_,lights_fragment_maps:n_,lights_fragment_end:i_,lightprobes_pars_fragment:s_,logdepthbuf_fragment:r_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:l_,map_fragment:c_,map_pars_fragment:h_,map_particle_fragment:u_,map_particle_pars_fragment:f_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:p_,morphinstance_vertex:m_,morphcolor_vertex:g_,morphnormal_vertex:x_,morphtarget_pars_vertex:__,morphtarget_vertex:y_,normal_fragment_begin:v_,normal_fragment_maps:M_,normal_pars_fragment:b_,normal_pars_vertex:S_,normal_vertex:w_,normalmap_pars_fragment:A_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:R_,opaque_fragment:I_,packing:P_,premultiplied_alpha_fragment:L_,project_vertex:D_,dithering_fragment:N_,dithering_pars_fragment:U_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:O_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:z_,shadowmap_vertex:k_,shadowmask_pars_fragment:V_,skinbase_vertex:H_,skinning_pars_vertex:G_,skinning_vertex:W_,skinnormal_vertex:X_,specularmap_fragment:q_,specularmap_pars_fragment:Y_,tonemapping_fragment:$_,tonemapping_pars_fragment:Z_,transmission_fragment:J_,transmission_pars_fragment:K_,uv_pars_fragment:j_,uv_pars_vertex:Q_,uv_vertex:ty,worldpos_vertex:ey,background_vert:ny,background_frag:iy,backgroundCube_vert:sy,backgroundCube_frag:ry,cube_vert:oy,cube_frag:ay,depth_vert:ly,depth_frag:cy,distance_vert:hy,distance_frag:uy,equirect_vert:fy,equirect_frag:dy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:xy,meshlambert_vert:_y,meshlambert_frag:yy,meshmatcap_vert:vy,meshmatcap_frag:My,meshnormal_vert:by,meshnormal_frag:Sy,meshphong_vert:wy,meshphong_frag:Ay,meshphysical_vert:Ey,meshphysical_frag:Ty,meshtoon_vert:Cy,meshtoon_frag:Ry,points_vert:Iy,points_frag:Py,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Ny,sprite_frag:Uy},zt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ri={basic:{uniforms:Sn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Sn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Sn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Sn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Sn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Sn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Sn([zt.points,zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Sn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Sn([zt.common,zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Sn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Sn([zt.sprite,zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Sn([zt.common,zt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Sn([zt.lights,zt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ri.physical={uniforms:Sn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var ec={r:0,b:0,g:0},Fy=new qe,Xp=new fe;Xp.set(-1,0,0,0,1,0,0,0,1);function Oy(n,t,e,i,s,r){let o=new ce(0),a=s===!0?0:1,c,l,p=null,d=0,m=null;function f(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){let E=T.backgroundBlurriness>0;L=t.get(L,E)}return L}function _(T){let L=!1,E=f(T);E===null?g(o,a):E&&E.isColor&&(g(E,1),L=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,L){let E=f(L);E&&(E.isCubeTexture||E.mapping===uo)?(l===void 0&&(l=new Oe(new Qe(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Is(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(L.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xp),l.material.toneMapped=Me.getTransfer(E.colorSpace)!==Ue,(p!==E||d!==E.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,p=E,d=E.version,m=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Oe(new oo(2,2),new bn({name:"BackgroundMaterial",uniforms:Is(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=Me.getTransfer(E.colorSpace)!==Ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,L){T.getRGB(ec,qh(n)),e.buffers.color.setClear(ec.r,ec.g,ec.b,L,r)}function x(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,L=1){o.set(T),a=L,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,g(o,a)},render:_,addToRenderList:v,dispose:x}}function By(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),r=s,o=!1;function a(B,$,z,O,V){let K=!1,q=d(B,O,z,$);r!==q&&(r=q,l(r.object)),K=f(B,O,z,V),K&&_(B,O,z,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,E(B,$,z,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(B){return n.bindVertexArray(B)}function p(B){return n.deleteVertexArray(B)}function d(B,$,z,O){let V=O.wireframe===!0,K=i[$.id];K===void 0&&(K={},i[$.id]=K);let q=B.isInstancedMesh===!0?B.id:0,st=K[q];st===void 0&&(st={},K[q]=st);let Z=st[z.id];Z===void 0&&(Z={},st[z.id]=Z);let nt=Z[V];return nt===void 0&&(nt=m(c()),Z[V]=nt),nt}function m(B){let $=[],z=[],O=[];for(let V=0;V<e;V++)$[V]=0,z[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:z,attributeDivisors:O,object:B,attributes:{},index:null}}function f(B,$,z,O){let V=r.attributes,K=$.attributes,q=0,st=z.getAttributes();for(let Z in st)if(st[Z].location>=0){let ot=V[Z],Ct=K[Z];if(Ct===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(Ct=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(Ct=B.instanceColor)),ot===void 0||ot.attribute!==Ct||Ct&&ot.data!==Ct.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function _(B,$,z,O){let V={},K=$.attributes,q=0,st=z.getAttributes();for(let Z in st)if(st[Z].location>=0){let ot=K[Z];ot===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(ot=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(ot=B.instanceColor));let Ct={};Ct.attribute=ot,ot&&ot.data&&(Ct.data=ot.data),V[Z]=Ct,q++}r.attributes=V,r.attributesNum=q,r.index=O}function v(){let B=r.newAttributes;for(let $=0,z=B.length;$<z;$++)B[$]=0}function g(B){x(B,0)}function x(B,$){let z=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;z[B]=1,O[B]===0&&(n.enableVertexAttribArray(B),O[B]=1),V[B]!==$&&(n.vertexAttribDivisor(B,$),V[B]=$)}function T(){let B=r.newAttributes,$=r.enabledAttributes;for(let z=0,O=$.length;z<O;z++)$[z]!==B[z]&&(n.disableVertexAttribArray(z),$[z]=0)}function L(B,$,z,O,V,K,q){q===!0?n.vertexAttribIPointer(B,$,z,V,K):n.vertexAttribPointer(B,$,z,O,V,K)}function E(B,$,z,O){v();let V=O.attributes,K=z.getAttributes(),q=$.defaultAttributeValues;for(let st in K){let Z=K[st];if(Z.location>=0){let nt=V[st];if(nt===void 0&&(st==="instanceMatrix"&&B.instanceMatrix&&(nt=B.instanceMatrix),st==="instanceColor"&&B.instanceColor&&(nt=B.instanceColor)),nt!==void 0){let ot=nt.normalized,Ct=nt.itemSize,pt=t.get(nt);if(pt===void 0)continue;let wt=pt.buffer,gt=pt.type,yt=pt.bytesPerElement,W=gt===n.INT||gt===n.UNSIGNED_INT||nt.gpuType===xl;if(nt.isInterleavedBufferAttribute){let et=nt.data,xt=et.stride,kt=nt.offset;if(et.isInstancedInterleavedBuffer){for(let mt=0;mt<Z.locationSize;mt++)x(Z.location+mt,et.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<Z.locationSize;mt++)g(Z.location+mt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let mt=0;mt<Z.locationSize;mt++)L(Z.location+mt,Ct/Z.locationSize,gt,ot,xt*yt,(kt+Ct/Z.locationSize*mt)*yt,W)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<Z.locationSize;et++)x(Z.location+et,nt.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<Z.locationSize;et++)g(Z.location+et);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let et=0;et<Z.locationSize;et++)L(Z.location+et,Ct/Z.locationSize,gt,ot,Ct*yt,Ct/Z.locationSize*et*yt,W)}}else if(q!==void 0){let ot=q[st];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(Z.location,ot);break;case 3:n.vertexAttrib3fv(Z.location,ot);break;case 4:n.vertexAttrib4fv(Z.location,ot);break;default:n.vertexAttrib1fv(Z.location,ot)}}}}T()}function S(){A();for(let B in i){let $=i[B];for(let z in $){let O=$[z];for(let V in O){let K=O[V];for(let q in K)p(K[q].object),delete K[q];delete O[V]}}delete i[B]}}function C(B){if(i[B.id]===void 0)return;let $=i[B.id];for(let z in $){let O=$[z];for(let V in O){let K=O[V];for(let q in K)p(K[q].object),delete K[q];delete O[V]}}delete i[B.id]}function N(B){for(let $ in i){let z=i[$];for(let O in z){let V=z[O];if(V[B.id]===void 0)continue;let K=V[B.id];for(let q in K)p(K[q].object),delete K[q];delete V[B.id]}}}function b(B){for(let $ in i){let z=i[$],O=B.isInstancedMesh===!0?B.id:0,V=z[O];if(V!==void 0){for(let K in V){let q=V[K];for(let st in q)p(q[st].object),delete q[st];delete V[K]}delete z[O],Object.keys(z).length===0&&delete i[$]}}}function A(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfObject:b,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function zy(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,p){p!==0&&(n.drawArraysInstanced(i,c,l,p),e.update(l,i,p))}function a(c,l,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,p);let m=0;for(let f=0;f<p;f++)m+=l[f];e.update(m,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ky(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Zn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let b=N===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Bn&&N!==ai&&!b&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",p=c(l);p!==l&&(oe("WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);let d=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:E,maxSamples:S,samples:C}}function Vy(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ii,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){let f=d.length!==0||m||i!==0||s;return s=m,i=d.length,f},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){e=p(d,m,0)},this.setState=function(d,m,f){let _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,x=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?p(null):l();else{let T=r?0:i,L=T*4,E=x.clippingState||null;c.value=E,E=p(_,m,L,f);for(let S=0;S!==L;++S)E[S]=e[S];x.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(d,m,f,_){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=c.value,_!==!0||g===null){let x=f+v*4,T=m.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<x)&&(g=new Float32Array(x));for(let L=0,E=f;L!==v;++L,E+=4)o.copy(d[L]).applyMatrix4(T,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var dr=4,Hy=6,Gy=20,Wy=256,vo=new co,Sp=new ce,eu=null,nu=0,iu=0,su=!1,Xy=new J,Ps=new J,ic=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Xy}=r;eu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(eu,nu,iu),this._renderer.xr.enabled=su,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:li,format:Zn,colorSpace:Wr,depthBuffer:!1},s=wp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qy(r)),this._blurMaterial=$y(r,t,e),this._ggxMaterial=Yy(r,t,e)}return s}_compileMaterial(t){let e=new Oe(new rn,t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,i,s,r){let c=new vn(90,1,e,i),l=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,f=d.toneMapping;d.getClearColor(Sp),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Qe,new Mn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,x=!1,T=t.background;T?T.isColor&&(g.color.copy(T),t.background=null,x=!0):(g.color.copy(Sp),x=!0);for(let L=0;L<6;L++){let E=L%3;E===0?(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+p[L],r.y,r.z)):E===1?(c.up.set(0,0,l[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+p[L],r.z)):(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+p[L]));let S=this._cubeSize;fr(s,E*S,L>2?S:0,S,S),d.setRenderTarget(s),x&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=m,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===fs||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;fr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,vo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-p*p),m=l*1.25,f=d*m,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-dr?i-_+dr:0),x=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=_-e,fr(r,g,x,3*v,2*v),s.setRenderTarget(r),s.render(a,vo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,fr(t,g,x,3*v,2*v),s.setRenderTarget(t),s.render(a,vo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],d=3*p*(s>this._lodMax-dr?s-this._lodMax+dr:0),m=4*(this._cubeSize-p);fr(e,d,m,3*p,2*p),o.setRenderTarget(e),o.render(c,vo)}};function qy(n){let t=[],e=[],i=n,s=n-dr+1+Hy;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,p=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,m=6,f=3,_=new Float32Array(f*m*d),v=new Float32Array(f*m*d);for(let x=0;x<d;x++){let T=x%3*2/3-1,L=x>2?0:-1,E=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(E,f*m*x);for(let S=0;S<m;S++){let C=p[S*2]*2-1,N=p[S*2+1]*2-1;x===0?Ps.set(1,N,C):x===1?Ps.set(-C,1,-N):x===2?Ps.set(-C,N,1):x===3?Ps.set(-1,N,-C):x===4?Ps.set(-C,-1,N):Ps.set(C,N,-1),Ps.toArray(v,(x*m+S)*f)}}let g=new rn;g.setAttribute("position",new Je(_,f)),g.setAttribute("outputDirection",new Je(v,f)),e.push(new Oe(g,null)),i>dr&&i--}return{lodMeshes:e,sizeLods:t}}function wp(n,t,e){let i=new In(n,t,e);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Yy(n,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function $y(n,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:Gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ap(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ep(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sc=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new io(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Ti});r.uniforms.tEquirect.value=e;let o=new Oe(s,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=sn),new ul(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Zy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(m,f=!1){return m==null?null:f?o(m):r(m)}function r(m){if(m&&m.isTexture){let f=m.mapping;if(f===pl||f===ml)if(t.has(m)){let _=t.get(m).texture;return a(_,m.mapping)}else{let _=m.image;if(_&&_.height>0){let v=new sc(_.height);return v.fromEquirectangularTexture(n,m),t.set(m,v),m.addEventListener("dispose",l),a(v.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let f=m.mapping,_=f===pl||f===ml,v=f===fs||f===Rs;if(_||v){let g=e.get(m),x=g!==void 0?g.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return i===null&&(i=new ic(n)),g=_?i.fromEquirectangular(m,g):i.fromCubemap(m,g),g.texture.pmremVersion=m.pmremVersion,e.set(m,g),g.texture;if(g!==void 0)return g.texture;{let T=m.image;return _&&T&&T.height>0||v&&T&&c(T)?(i===null&&(i=new ic(n)),g=_?i.fromEquirectangular(m):i.fromCubemap(m),g.texture.pmremVersion=m.pmremVersion,e.set(m,g),m.addEventListener("dispose",p),g.texture):null}}}return m}function a(m,f){return f===pl?m.mapping=fs:f===ml&&(m.mapping=Rs),m}function c(m){let f=0,_=6;for(let v=0;v<_;v++)m[v]!==void 0&&f++;return f===_}function l(m){let f=m.target;f.removeEventListener("dispose",l);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function p(m){let f=m.target;f.removeEventListener("dispose",p);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Jy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ws("WebGLRenderer: "+i+" extension not supported."),s}}}function Ky(n,t,e,i){let s={},r=new WeakMap;function o(d){let m=d.target;m.index!==null&&t.remove(m.index);for(let _ in m.attributes)t.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let f=r.get(m);f&&(t.remove(f),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function c(d){let m=d.attributes;for(let f in m)t.update(m[f],n.ARRAY_BUFFER)}function l(d){let m=[],f=d.index,_=d.attributes.position,v=0;if(_===void 0)return;if(f!==null){let T=f.array;v=f.version;for(let L=0,E=T.length;L<E;L+=3){let S=T[L+0],C=T[L+1],N=T[L+2];m.push(S,C,C,N,N,S)}}else{let T=_.array;v=_.version;for(let L=0,E=T.length/3-1;L<E;L+=3){let S=L+0,C=L+1,N=L+2;m.push(S,C,C,N,N,S)}}let g=new(_.count>=65535?Qr:jr)(m,1);g.version=v;let x=r.get(d);x&&t.remove(x),r.set(d,g)}function p(d){let m=r.get(d);if(m){let f=d.index;f!==null&&m.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:p}}function jy(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function l(d,m,f){f!==0&&(n.drawElementsInstanced(i,m,r,d*o,f),e.update(m,i,f))}function p(d,m,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=m[g];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=p}function Qy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function tv(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,c){let l=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=p!==void 0?p.length:0,m=i.get(a);if(m===void 0||m.count!==d){let A=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",A)};m!==void 0&&m.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],L=0;f===!0&&(L=1),_===!0&&(L=2),v===!0&&(L=3);let E=a.attributes.position.count*L,S=1;E>t.maxTextureSize&&(S=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let C=new Float32Array(E*S*4*d),N=new Zr(C,E,S,d);N.type=ai,N.needsUpdate=!0;let b=L*4;for(let U=0;U<d;U++){let B=g[U],$=x[U],z=T[U],O=E*S*4*U;for(let V=0;V<B.count;V++){let K=V*b;f===!0&&(s.fromBufferAttribute(B,V),C[O+K+0]=s.x,C[O+K+1]=s.y,C[O+K+2]=s.z,C[O+K+3]=0),_===!0&&(s.fromBufferAttribute($,V),C[O+K+4]=s.x,C[O+K+5]=s.y,C[O+K+6]=s.z,C[O+K+7]=0),v===!0&&(s.fromBufferAttribute(z,V),C[O+K+8]=s.x,C[O+K+9]=s.y,C[O+K+10]=s.z,C[O+K+11]=z.itemSize===4?s.w:1)}}m={count:d,texture:N,size:new _e(E,S)},i.set(a,m),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function ev(n,t,e,i,s){let r=new WeakMap;function o(l){let p=s.render.frame,d=l.geometry,m=t.get(l,d);if(r.get(m)!==p&&(t.update(m),r.set(m,p)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==p&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,p))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==p&&(f.update(),r.set(f,p))}return m}function a(){r=new WeakMap}function c(l){let p=l.target;p.removeEventListener("dispose",c),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:o,dispose:a}}var nv={[Ch]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ih]:"CINEON_TONE_MAPPING",[Ph]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function iv(n,t,e,i,s,r){let o=new In(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new rn;l.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Tn([0,2,0,0,2,0],2));let p=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(l,p),m=new co(-1,1,1,-1,0,1),f=null,_=null,v=!1,g,x=null,T=[],L=!1;this.setSize=function(E,S){o.setSize(E,S),a!==null&&a.setSize(E,S),c!==null&&c.setSize(E,S);for(let C=0;C<T.length;C++){let N=T[C];N.setSize&&N.setSize(E,S)}},this.setEffects=function(E){T=E,L=T.length>0&&T[0].isRenderPass===!0;let S=o.width,C=o.height;T.length>0&&a===null&&(a=new In(S,C,{type:li,depthBuffer:!1,stencilBuffer:!1}),c=new In(S,C,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<T.length;N++){let b=T[N];b.setSize&&b.setSize(S,C)}},this.begin=function(E,S){if(v||E.toneMapping===ri&&T.length===0)return!1;if(x=S,S!==null){let C=S.width,N=S.height;(o.width!==C||o.height!==N)&&this.setSize(C,N)}return L===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=ri,!0},this.hasRenderPass=function(){return L},this.end=function(E,S){E.toneMapping=g,v=!0;let C=o,N=a;for(let b=0;b<T.length;b++){let A=T[b];A.enabled!==!1&&(A.render(E,N,C,S),A.needsSwap!==!1&&(C=N,N=N===a?c:a))}if(f!==E.outputColorSpace||_!==E.toneMapping){f=E.outputColorSpace,_=E.toneMapping,p.defines={},Me.getTransfer(f)===Ue&&(p.defines.SRGB_TRANSFER="");let b=nv[_];b&&(p.defines[b]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,E.setRenderTarget(x),E.render(d,m),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),p.dispose()}}var qp=new gn,au=new as(1,1),Yp=new Zr,$p=new Xa,Zp=new io,Tp=[],Cp=[],Rp=new Float32Array(16),Ip=new Float32Array(9),Pp=new Float32Array(4);function mr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Tp[s];if(r===void 0&&(r=new Float32Array(s),Tp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function on(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function an(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ac(n,t){let e=Cp[t];e===void 0&&(e=new Int32Array(t),Cp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2fv(this.addr,t),an(e,t)}}function ov(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;n.uniform3fv(this.addr,t),an(e,t)}}function av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4fv(this.addr,t),an(e,t)}}function lv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;Pp.set(i),n.uniformMatrix2fv(this.addr,!1,Pp),an(e,i)}}function cv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;Ip.set(i),n.uniformMatrix3fv(this.addr,!1,Ip),an(e,i)}}function hv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,i))return;Rp.set(i),n.uniformMatrix4fv(this.addr,!1,Rp),an(e,i)}}function uv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2iv(this.addr,t),an(e,t)}}function dv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3iv(this.addr,t),an(e,t)}}function pv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4iv(this.addr,t),an(e,t)}}function mv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2uiv(this.addr,t),an(e,t)}}function xv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3uiv(this.addr,t),an(e,t)}}function _v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4uiv(this.addr,t),an(e,t)}}function yv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(au.compareFunction=e.isReversedDepthBuffer()?tc:Ql,r=au):r=qp,e.setTexture2D(t||r,s)}function vv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||$p,s)}function Mv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Zp,s)}function bv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yp,s)}function Sv(n){switch(n){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return xv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return bv}}function wv(n,t){n.uniform1fv(this.addr,t)}function Av(n,t){let e=mr(t,this.size,2);n.uniform2fv(this.addr,e)}function Ev(n,t){let e=mr(t,this.size,3);n.uniform3fv(this.addr,e)}function Tv(n,t){let e=mr(t,this.size,4);n.uniform4fv(this.addr,e)}function Cv(n,t){let e=mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rv(n,t){let e=mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Iv(n,t){let e=mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Pv(n,t){n.uniform1iv(this.addr,t)}function Lv(n,t){n.uniform2iv(this.addr,t)}function Dv(n,t){n.uniform3iv(this.addr,t)}function Nv(n,t){n.uniform4iv(this.addr,t)}function Uv(n,t){n.uniform1uiv(this.addr,t)}function Fv(n,t){n.uniform2uiv(this.addr,t)}function Ov(n,t){n.uniform3uiv(this.addr,t)}function Bv(n,t){n.uniform4uiv(this.addr,t)}function zv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=au:o=qp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function kv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$p,r[o])}function Vv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zp,r[o])}function Hv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yp,r[o])}function Gv(n){switch(n){case 5126:return wv;case 35664:return Av;case 35665:return Ev;case 35666:return Tv;case 35674:return Cv;case 35675:return Rv;case 35676:return Iv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Dv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Hv}}var lu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sv(e.type)}},cu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gv(e.type)}},hu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},ru=/(\w+)(\])?(\[|\.)?/g;function Lp(n,t){n.seq.push(t),n.map[t.id]=t}function Wv(n,t,e){let i=n.name,s=i.length;for(ru.lastIndex=0;;){let r=ru.exec(i),o=ru.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Lp(e,l===void 0?new lu(a,n,t):new cu(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new hu(a),Lp(e,d)),e=d}}}var pr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Wv(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Dp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Xv=37297,qv=0;function Yv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Np=new fe;function $v(n){Me._getMatrix(Np,Me.workingColorSpace,n);let t=`mat3( ${Np.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(n)){case Xr:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Up(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Yv(n.getShaderSource(t),a)}else return r}function Zv(n,t){let e=$v(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Jv={[Ch]:"Linear",[Rh]:"Reinhard",[Ih]:"Cineon",[Ph]:"ACESFilmic",[Dh]:"AgX",[Nh]:"Neutral",[Lh]:"Custom"};function Kv(n,t){let e=Jv[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nc=new J;function jv(){Me.getLuminanceCoefficients(nc);let n=nc.x.toFixed(4),t=nc.y.toFixed(4),e=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function tM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function eM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function bo(n){return n!==""}function Fp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Op(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(n){return n.replace(nM,sM)}var iM=new Map;function sM(n,t){let e=ge[t];if(e===void 0){let i=iM.get(t);if(i!==void 0)e=ge[i],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return uu(e)}var rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(n){return n.replace(rM,oM)}function oM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var aM={[ho]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function lM(n){return aM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cM={[fs]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE_UV"};function hM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var uM={[Rs]:"ENVMAP_MODE_REFRACTION"};function fM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dM={[Th]:"ENVMAP_BLENDING_MULTIPLY",[np]:"ENVMAP_BLENDING_MIX",[ip]:"ENVMAP_BLENDING_ADD"};function pM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dM[n.combine]||"ENVMAP_BLENDING_NONE"}function mM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function gM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=lM(e),l=hM(e),p=fM(e),d=pM(e),m=mM(e),f=Qv(e),_=tM(r),v=s.createProgram(),g,x,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bo).join(`
`),g.length>0&&(g+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bo).join(`
`),x.length>0&&(x+=`
`)):(g=[zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),x=[zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+p:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?ge.tonemapping_pars_fragment:"",e.toneMapping!==ri?Kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,Zv("linearToOutputTexel",e.outputColorSpace),jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),o=uu(o),o=Fp(o,e),o=Op(o,e),a=uu(a),a=Fp(a,e),a=Op(a,e),o=Bp(o),a=Bp(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let L=T+g+o,E=T+x+a,S=Dp(s,s.VERTEX_SHADER,L),C=Dp(s,s.FRAGMENT_SHADER,E);s.attachShader(v,S),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function N(B){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(S)||"",O=s.getShaderInfoLog(C)||"",V=$.trim(),K=z.trim(),q=O.trim(),st=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,C);else{let nt=Up(s,S,"vertex"),ot=Up(s,C,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+V+`
`+nt+`
`+ot)}else V!==""?oe("WebGLProgram: Program Info Log:",V):(K===""||q==="")&&(Z=!1);Z&&(B.diagnostics={runnable:st,programLog:V,vertexShader:{log:K,prefix:g},fragmentShader:{log:q,prefix:x}})}s.deleteShader(S),s.deleteShader(C),b=new pr(s,v),A=eM(s,v)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(v,Xv)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=C,this}var xM=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new du(t),e.set(t,i)),i}},du=class{constructor(t){this.id=xM++,this.code=t,this.usedTimes=0}};function _M(n){return n===ms||n===_o||n===yo}function yM(n,t,e,i,s,r){let o=new Jr,a=new fu,c=new Set,l=[],p=new Map,d=i.logarithmicDepthBuffer,m=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function v(b,A,U,B,$,z){let O=B.fog,V=$.geometry,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,st=t.get(b.envMap||K,q),Z=st&&st.mapping===uo?st.image.height:null,nt=f[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&oe("WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let ot=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ct=ot!==void 0?ot.length:0,pt=0;V.morphAttributes.position!==void 0&&(pt=1),V.morphAttributes.normal!==void 0&&(pt=2),V.morphAttributes.color!==void 0&&(pt=3);let wt,gt,yt,W;if(nt){let Fe=Ri[nt];wt=Fe.vertexShader,gt=Fe.fragmentShader}else{wt=b.vertexShader,gt=b.fragmentShader;let Fe=a.getVertexShaderStage(b),Ee=a.getFragmentShaderStage(b);a.update(b,Fe,Ee),yt=Fe.id,W=Ee.id}let et=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),kt=$.isInstancedMesh===!0,mt=$.isBatchedMesh===!0,at=!!b.map,ae=!!b.matcap,Dt=!!st,Qt=!!b.aoMap,re=!!b.lightMap,Zt=!!b.bumpMap&&b.wireframe===!1,se=!!b.normalMap,ke=!!b.displacementMap,We=!!b.emissiveMap,we=!!b.metalnessMap,Ie=!!b.roughnessMap,H=b.anisotropy>0,Ve=b.clearcoat>0,me=b.dispersion>0,F=b.retroreflectivity>0,y=b.iridescence>0,Y=b.sheen>0,tt=b.transmission>0,ct=H&&!!b.anisotropyMap,Et=Ve&&!!b.clearcoatMap,Tt=Ve&&!!b.clearcoatNormalMap,lt=Ve&&!!b.clearcoatRoughnessMap,dt=y&&!!b.iridescenceMap,Lt=y&&!!b.iridescenceThicknessMap,Kt=Y&&!!b.sheenColorMap,Ut=Y&&!!b.sheenRoughnessMap,Rt=!!b.specularMap,te=!!b.specularColorMap,Yt=!!b.specularIntensityMap,ue=tt&&!!b.transmissionMap,G=tt&&!!b.thicknessMap,At=!!b.gradientMap,ut=!!b.alphaMap,Pt=b.alphaTest>0,Ft=!!b.alphaHash,_t=!!b.extensions,$t=ri;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&($t=n.toneMapping);let Xt={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:wt,fragmentShader:gt,defines:b.defines,customVertexShaderID:yt,customFragmentShaderID:W,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:mt,batchingColor:mt&&$._colorsTexture!==null,instancing:kt,instancingColor:kt&&$.instanceColor!==null,instancingMorph:kt&&$.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:at,matcap:ae,envMap:Dt,envMapMode:Dt&&st.mapping,envMapCubeUVHeight:Z,aoMap:Qt,lightMap:re,bumpMap:Zt,normalMap:se,displacementMap:ke,emissiveMap:We,normalMapObjectSpace:se&&b.normalMapType===op,normalMapTangentSpace:se&&b.normalMapType===Gh,packedNormalMap:se&&b.normalMapType===Gh&&_M(b.normalMap.format),metalnessMap:we,roughnessMap:Ie,anisotropy:H,anisotropyMap:ct,clearcoat:Ve,clearcoatMap:Et,clearcoatNormalMap:Tt,clearcoatRoughnessMap:lt,dispersion:me,retroreflection:F,iridescence:y,iridescenceMap:dt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Kt,sheenRoughnessMap:Ut,specularMap:Rt,specularColorMap:te,specularIntensityMap:Yt,transmission:tt,transmissionMap:ue,thicknessMap:G,gradientMap:At,opaque:b.transparent===!1&&b.blending===cr&&b.alphaToCoverage===!1,alphaMap:ut,alphaTest:Pt,alphaHash:Ft,combine:b.combine,mapUv:at&&_(b.map.channel),aoMapUv:Qt&&_(b.aoMap.channel),lightMapUv:re&&_(b.lightMap.channel),bumpMapUv:Zt&&_(b.bumpMap.channel),normalMapUv:se&&_(b.normalMap.channel),displacementMapUv:ke&&_(b.displacementMap.channel),emissiveMapUv:We&&_(b.emissiveMap.channel),metalnessMapUv:we&&_(b.metalnessMap.channel),roughnessMapUv:Ie&&_(b.roughnessMap.channel),anisotropyMapUv:ct&&_(b.anisotropyMap.channel),clearcoatMapUv:Et&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(b.sheenRoughnessMap.channel),specularMapUv:Rt&&_(b.specularMap.channel),specularColorMapUv:te&&_(b.specularColorMap.channel),specularIntensityMapUv:Yt&&_(b.specularIntensityMap.channel),transmissionMapUv:ue&&_(b.transmissionMap.channel),thicknessMapUv:G&&_(b.thicknessMap.channel),alphaMapUv:ut&&_(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(se||H),vertexNormals:!!V.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!V.attributes.uv&&(at||ut),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||V.attributes.normal===void 0&&se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:pt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:at&&b.map.isVideoTexture===!0&&Me.getTransfer(b.map.colorSpace)===Ue,decodeVideoTextureEmissive:We&&b.emissiveMap.isVideoTexture===!0&&Me.getTransfer(b.emissiveMap.colorSpace)===Ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$n,flipSided:b.side===Rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:_t&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&b.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function g(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)A.push(U),A.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(x(A,b),T(A,b),A.push(n.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function x(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numSunLights),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numSunLightShadows),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function T(b,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function L(b){let A=f[b.type],U;if(A){let B=Ri[A];U=vp.clone(B.uniforms)}else U=b.uniforms;return U}function E(b,A){let U=p.get(A);return U!==void 0?++U.usedTimes:(U=new gM(n,A,b,s),l.push(U),p.set(A,U)),U}function S(b){if(--b.usedTimes===0){let A=l.indexOf(b);l[A]=l[l.length-1],l.pop(),p.delete(b.cacheKey),b.destroy()}}function C(b){a.remove(b)}function N(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:L,acquireProgram:E,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:N}}function vM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function MM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function kp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Vp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(m){let f=0;return m.isInstancedMesh&&(f+=2),m.isSkinnedMesh&&(f+=1),f}function a(m,f,_,v,g,x){let T=n[t];return T===void 0?(T={id:m.id,object:m,geometry:f,material:_,materialVariant:o(m),groupOrder:v,renderOrder:m.renderOrder,z:g,group:x},n[t]=T):(T.id=m.id,T.object=m,T.geometry=f,T.material=_,T.materialVariant=o(m),T.groupOrder=v,T.renderOrder=m.renderOrder,T.z=g,T.group=x),t++,T}function c(m,f,_,v,g,x,T){T.reversedDepth===!0&&(g=-g);let L=a(m,f,_,v,g,x);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):e.push(L)}function l(m,f,_,v,g,x){let T=a(m,f,_,v,g,x);_.transmission>0?i.unshift(T):_.transparent===!0?s.unshift(T):e.unshift(T)}function p(m,f){e.length>1&&e.sort(m||MM),i.length>1&&i.sort(f||kp),s.length>1&&s.sort(f||kp)}function d(){for(let m=t,f=n.length;m<f;m++){let _=n[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:p}}function bM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Vp,n.set(i,[o])):s>=r.length?(o=new Vp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function SM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new ce};break;case"SpotLight":e={position:new J,direction:new J,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function wM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var AM=0;function EM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function TM(n){let t=new SM,e=wM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new J);let s=new J,r=new qe,o=new qe;function a(l){let p=0,d=0,m=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let f=0,_=0,v=0,g=0,x=0,T=0,L=0,E=0,S=0,C=0,N=0,b=0,A=0,U=0;l.sort(EM);for(let $=0,z=l.length;$<z;$++){let O=l[$],V=O.color,K=O.intensity,q=O.distance,st=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ms?st=O.shadow.map.texture:st=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)p+=V.r*K,d+=V.g*K,m+=V.b*K;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(O.sh.coefficients[Z],K);U++}else if(O.isSunLight){let Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[_]=ot,i.sunShadowMap[_]=st;let Ct=nt.getViewportCount();for(let pt=0;pt<Ct;pt++)i.sunShadowMatrix[v+pt]=nt.getMatrix(pt),i.sunShadowCascade[v+pt]=nt._cascadeData[pt];v+=Ct,_++}i.sun[f]=Z,f++}else if(O.isDirectionalLight){let Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,i.directionalShadow[g]=ot,i.directionalShadowMap[g]=st,i.directionalShadowMatrix[g]=O.shadow.matrix,S++}i.directional[g]=Z,g++}else if(O.isSpotLight){let Z=t.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(V).multiplyScalar(K),Z.distance=q,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,i.spot[T]=Z;let nt=O.shadow;if(O.map&&(i.spotLightMap[b]=O.map,b++,nt.updateMatrices(O),O.castShadow&&A++),i.spotLightMatrix[T]=nt.matrix,O.castShadow){let ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,i.spotShadow[T]=ot,i.spotShadowMap[T]=st,N++}T++}else if(O.isRectAreaLight){let Z=t.get(O);Z.color.copy(V).multiplyScalar(K),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),i.rectArea[L]=Z,L++}else if(O.isPointLight){let Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,ot.shadowCameraNear=nt.camera.near,ot.shadowCameraFar=nt.camera.far,i.pointShadow[x]=ot,i.pointShadowMap[x]=st,i.pointShadowMatrix[x]=O.shadow.matrix,C++}i.point[x]=Z,x++}else if(O.isHemisphereLight){let Z=t.get(O);Z.skyColor.copy(O.color).multiplyScalar(K),Z.groundColor.copy(O.groundColor).multiplyScalar(K),i.hemi[E]=Z,E++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=d,i.ambient[2]=m;let B=i.hash;(B.sunLength!==f||B.directionalLength!==g||B.pointLength!==x||B.spotLength!==T||B.rectAreaLength!==L||B.hemiLength!==E||B.numSunShadows!==_||B.numDirectionalShadows!==S||B.numPointShadows!==C||B.numSpotShadows!==N||B.numSpotMaps!==b||B.numLightProbes!==U)&&(i.sun.length=f,i.directional.length=g,i.spot.length=T,i.rectArea.length=L,i.point.length=x,i.hemi.length=E,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=U,B.sunLength=f,B.directionalLength=g,B.pointLength=x,B.spotLength=T,B.rectAreaLength=L,B.hemiLength=E,B.numSunShadows=_,B.numDirectionalShadows=S,B.numPointShadows=C,B.numSpotShadows=N,B.numSpotMaps=b,B.numLightProbes=U,i.version=AM++)}function c(l,p){let d=0,m=0,f=0,_=0,v=0,g=0,x=p.matrixWorldInverse;for(let T=0,L=l.length;T<L;T++){let E=l[T];if(E.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(x),d++}else if(E.isDirectionalLight){let S=i.directional[m];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),m++}else if(E.isSpotLight){let S=i.spot[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),_++}else if(E.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),o.identity(),r.copy(E.matrixWorld),r.premultiply(x),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(x),g++}}}return{setup:a,setupView:c,state:i}}function Hp(n){let t=new TM(n),e=[],i=[],s=[];function r(m){d.camera=m,e.length=0,i.length=0,s.length=0}function o(m){e.push(m)}function a(m){i.push(m)}function c(m){s.push(m)}function l(){t.setup(e)}function p(m){t.setupView(e,m)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:p,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function CM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hp(n),t.set(s,[a])):r>=o.length?(a=new Hp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
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
}`,PM=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],LM=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Gp=new qe,Mo=new J,ou=new J;function DM(n,t,e){let i=new eo,s=new _e,r=new _e,o=new Ze,a=new Qa,c=new tl,l={},p=e.maxTextureSize,d={[us]:Rn,[Rn]:us,[$n]:$n},m=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:RM,fragmentShader:IM}),f=m.clone();f.defines.HORIZONTAL_PASS=1;let _=new rn;_.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Oe(_,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let x=this.type;this.render=function(C,N,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===Od&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ho);let A=n.getRenderTarget(),U=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Ti),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let z=x!==this.type;z&&N.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(V=>V.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,V=C.length;O<V;O++){let K=C[O],q=K.shadow;if(q===void 0){oe("WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let st=q.getFrameExtents();s.multiply(st),r.copy(q.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/st.x),s.x=r.x*st.x,q.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/st.y),s.y=r.y*st.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===lr){if(K.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new In(s.x,s.y,{format:ms,type:li,minFilter:sn,magFilter:sn,generateMipmaps:!1}),q.map.texture.name=K.name+".shadowMap",q.map.depthTexture=new as(s.x,s.y,ai),q.map.depthTexture.name=K.name+".shadowMapDepth",q.map.depthTexture.format=Si,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=hn,q.map.depthTexture.magFilter=hn}else K.isPointLight?(q.map=new sc(s.x),q.map.depthTexture=new Ka(s.x,oi)):(q.map=new In(s.x,s.y),q.map.depthTexture=new as(s.x,s.y,oi)),q.map.depthTexture.name=K.name+".shadowMap",q.map.depthTexture.format=Si,this.type===ho?(q.map.depthTexture.compareFunction=Z?tc:Ql,q.map.depthTexture.minFilter=sn,q.map.depthTexture.magFilter=sn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=hn,q.map.depthTexture.magFilter=hn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let nt=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();K.isPointLight!==!0&&q.updateMatrices(K,b);for(let ot=0;ot<nt;ot++){let Ct=q.getCamera(ot);if(K.isPointLight){let pt=q.camera,wt=q.matrix,gt=K.distance||pt.far;gt!==pt.far&&(pt.far=gt,pt.updateProjectionMatrix()),Mo.setFromMatrixPosition(K.matrixWorld),pt.position.copy(Mo),ou.copy(pt.position),ou.add(PM[ot]),pt.up.copy(LM[ot]),pt.lookAt(ou),pt.updateMatrixWorld(),wt.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Gp.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Gp,pt.coordinateSystem,pt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,ot),n.clear();else{ot===0&&(n.setRenderTarget(q.map),n.clear());let pt=q.getViewport(ot);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),$.viewport(o)}i=q.getFrustum(ot),E(N,b,Ct,K,this.type)}q.isPointLightShadow!==!0&&this.type===lr&&T(q,b),q.needsUpdate=!1}x=this.type,g.needsUpdate=!1,n.setRenderTarget(A,U,B)};function T(C,N){let b=t.update(v);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null?C.mapPass=new In(s.x,s.y,{format:ms,type:li}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),m.uniforms.shadow_pass.value=C.map.depthTexture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,b,m,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,b,f,v,null)}function L(C,N,b,A){let U=null,B=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)U=B;else if(U=b.isPointLight===!0?c:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let $=U.uuid,z=N.uuid,O=l[$];O===void 0&&(O={},l[$]=O);let V=O[z];V===void 0&&(V=U.clone(),O[z]=V,N.addEventListener("dispose",S)),U=V}if(U.visible=N.visible,U.wireframe=N.wireframe,A===lr?U.side=N.shadowSide!==null?N.shadowSide:N.side:U.side=N.shadowSide!==null?N.shadowSide:d[N.side],U.alphaMap=N.alphaMap,U.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,U.map=N.map,U.clipShadows=N.clipShadows,U.clippingPlanes=N.clippingPlanes,U.clipIntersection=N.clipIntersection,U.displacementMap=N.displacementMap,U.displacementScale=N.displacementScale,U.displacementBias=N.displacementBias,U.wireframeLinewidth=N.wireframeLinewidth,U.linewidth=N.linewidth,b.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let $=n.properties.get(U);$.light=b}return U}function E(C,N,b,A,U){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===lr)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let z=t.update(C),O=C.material;if(Array.isArray(O)){let V=z.groups;for(let K=0,q=V.length;K<q;K++){let st=V[K],Z=O[st.materialIndex];if(Z&&Z.visible){let nt=L(C,Z,A,U);C.onBeforeShadow(n,C,N,b,z,nt,st),n.renderBufferDirect(b,null,z,nt,C,st),C.onAfterShadow(n,C,N,b,z,nt,st)}}}else if(O.visible){let V=L(C,O,A,U);C.onBeforeShadow(n,C,N,b,z,V,null),n.renderBufferDirect(b,null,z,V,C,null),C.onAfterShadow(n,C,N,b,z,V,null)}}let $=C.children;for(let z=0,O=$.length;z<O;z++)E($[z],N,b,A,U)}function S(C){C.target.removeEventListener("dispose",S);for(let b in l){let A=l[b],U=C.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function NM(n,t){function e(){let G=!1,At=new Ze,ut=null,Pt=new Ze(0,0,0,0);return{setMask:function(Ft){ut!==Ft&&!G&&(n.colorMask(Ft,Ft,Ft,Ft),ut=Ft)},setLocked:function(Ft){G=Ft},setClear:function(Ft,_t,$t,Xt,Fe){Fe===!0&&(Ft*=Xt,_t*=Xt,$t*=Xt),At.set(Ft,_t,$t,Xt),Pt.equals(At)===!1&&(n.clearColor(Ft,_t,$t,Xt),Pt.copy(At))},reset:function(){G=!1,ut=null,Pt.set(-1,0,0,0)}}}function i(){let G=!1,At=!1,ut=null,Pt=null,Ft=null;return{setReversed:function(_t){if(At!==_t){let $t=t.get("EXT_clip_control");_t?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),At=_t;let Xt=Ft;Ft=null,this.setClear(Xt)}},getReversed:function(){return At},setTest:function(_t){_t?et(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(_t){ut!==_t&&!G&&(n.depthMask(_t),ut=_t)},setFunc:function(_t){if(At&&(_t=xp[_t]),Pt!==_t){switch(_t){case La:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Na:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Fa:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=_t}},setLocked:function(_t){G=_t},setClear:function(_t){Ft!==_t&&(Ft=_t,At&&(_t=1-_t),n.clearDepth(_t))},reset:function(){G=!1,ut=null,Pt=null,Ft=null,At=!1}}}function s(){let G=!1,At=null,ut=null,Pt=null,Ft=null,_t=null,$t=null,Xt=null,Fe=null;return{setTest:function(Ee){G||(Ee?et(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!G&&(n.stencilMask(Ee),At=Ee)},setFunc:function(Ee,Ln,xn){(ut!==Ee||Pt!==Ln||Ft!==xn)&&(n.stencilFunc(Ee,Ln,xn),ut=Ee,Pt=Ln,Ft=xn)},setOp:function(Ee,Ln,xn){(_t!==Ee||$t!==Ln||Xt!==xn)&&(n.stencilOp(Ee,Ln,xn),_t=Ee,$t=Ln,Xt=xn)},setLocked:function(Ee){G=Ee},setClear:function(Ee){Fe!==Ee&&(n.clearStencil(Ee),Fe=Ee)},reset:function(){G=!1,At=null,ut=null,Pt=null,Ft=null,_t=null,$t=null,Xt=null,Fe=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,p={},d={},m={},f=new WeakMap,_=[],v=null,g=!1,x=null,T=null,L=null,E=null,S=null,C=null,N=null,b=new ce(0,0,0),A=0,U=!1,B=null,$=null,z=null,O=null,V=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,st=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=st>=2);let nt=null,ot={},Ct=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),wt=new Ze().fromArray(Ct),gt=new Ze().fromArray(pt);function yt(G,At,ut,Pt){let Ft=new Uint8Array(4),_t=n.createTexture();n.bindTexture(G,_t),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<ut;$t++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(At+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return _t}let W={};W[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(nr),Zt(!1),se(Mh),et(n.CULL_FACE),Qt(Ti);function et(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function xt(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function kt(G,At){return m[G]!==At?(n.bindFramebuffer(G,At),m[G]=At,G===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=At),G===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=At),!0):!1}function mt(G,At){let ut=_,Pt=!1;if(G){ut=f.get(At),ut===void 0&&(ut=[],f.set(At,ut));let Ft=G.textures;if(ut.length!==Ft.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let _t=0,$t=Ft.length;_t<$t;_t++)ut[_t]=n.COLOR_ATTACHMENT0+_t;ut.length=Ft.length,Pt=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(ut)}function at(G){return v!==G?(n.useProgram(G),v=G,!0):!1}let ae={[Cs]:n.FUNC_ADD,[zd]:n.FUNC_SUBTRACT,[kd]:n.FUNC_REVERSE_SUBTRACT};ae[Vd]=n.MIN,ae[Hd]=n.MAX;let Dt={[Gd]:n.ZERO,[Wd]:n.ONE,[Xd]:n.SRC_COLOR,[Ah]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[Yd]:n.DST_ALPHA,[qd]:n.ONE_MINUS_SRC_COLOR,[Eh]:n.ONE_MINUS_SRC_ALPHA,[Jd]:n.ONE_MINUS_DST_COLOR,[$d]:n.ONE_MINUS_DST_ALPHA,[jd]:n.CONSTANT_COLOR,[Qd]:n.ONE_MINUS_CONSTANT_COLOR,[tp]:n.CONSTANT_ALPHA,[ep]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(G,At,ut,Pt,Ft,_t,$t,Xt,Fe,Ee){if(G===Ti){g===!0&&(xt(n.BLEND),g=!1);return}if(g===!1&&(et(n.BLEND),g=!0),G!==Bd){if(G!==x||Ee!==U){if((T!==Cs||S!==Cs)&&(n.blendEquation(n.FUNC_ADD),T=Cs,S=Cs),Ee)switch(G){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bh:n.blendFunc(n.ONE,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:le("WebGLState: Invalid blending: ",G);break}else switch(G){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sh:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",G);break}L=null,E=null,C=null,N=null,b.set(0,0,0),A=0,x=G,U=Ee}return}Ft=Ft||At,_t=_t||ut,$t=$t||Pt,(At!==T||Ft!==S)&&(n.blendEquationSeparate(ae[At],ae[Ft]),T=At,S=Ft),(ut!==L||Pt!==E||_t!==C||$t!==N)&&(n.blendFuncSeparate(Dt[ut],Dt[Pt],Dt[_t],Dt[$t]),L=ut,E=Pt,C=_t,N=$t),(Xt.equals(b)===!1||Fe!==A)&&(n.blendColor(Xt.r,Xt.g,Xt.b,Fe),b.copy(Xt),A=Fe),x=G,U=!1}function re(G,At){G.side===$n?xt(n.CULL_FACE):et(n.CULL_FACE);let ut=G.side===Rn;At&&(ut=!ut),Zt(ut),G.blending===cr&&G.transparent===!1?Qt(Ti):Qt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Pt=G.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),We(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(G){B!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),B=G)}function se(G){G!==Ud?(et(n.CULL_FACE),G!==$&&(G===Mh?n.cullFace(n.BACK):G===Fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),$=G}function ke(G){G!==z&&(q&&n.lineWidth(G),z=G)}function We(G,At,ut){G?(et(n.POLYGON_OFFSET_FILL),(O!==At||V!==ut)&&(O=At,V=ut,o.getReversed()&&(At=-At),n.polygonOffset(At,ut))):xt(n.POLYGON_OFFSET_FILL)}function we(G){G?et(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function Ie(G){G===void 0&&(G=n.TEXTURE0+K-1),nt!==G&&(n.activeTexture(G),nt=G)}function H(G,At,ut){ut===void 0&&(nt===null?ut=n.TEXTURE0+K-1:ut=nt);let Pt=ot[ut];Pt===void 0&&(Pt={type:void 0,texture:void 0},ot[ut]=Pt),(Pt.type!==G||Pt.texture!==At)&&(nt!==ut&&(n.activeTexture(ut),nt=ut),n.bindTexture(G,At||W[G]),Pt.type=G,Pt.texture=At)}function Ve(){let G=ot[nt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(G){le("WebGLState:",G)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(G){le("WebGLState:",G)}}function y(){try{n.texSubImage2D(...arguments)}catch(G){le("WebGLState:",G)}}function Y(){try{n.texSubImage3D(...arguments)}catch(G){le("WebGLState:",G)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(G){le("WebGLState:",G)}}function ct(){try{n.compressedTexSubImage3D(...arguments)}catch(G){le("WebGLState:",G)}}function Et(){try{n.texStorage2D(...arguments)}catch(G){le("WebGLState:",G)}}function Tt(){try{n.texStorage3D(...arguments)}catch(G){le("WebGLState:",G)}}function lt(){try{n.texImage2D(...arguments)}catch(G){le("WebGLState:",G)}}function dt(){try{n.texImage3D(...arguments)}catch(G){le("WebGLState:",G)}}function Lt(G){return d[G]!==void 0?d[G]:n.getParameter(G)}function Kt(G,At){d[G]!==At&&(n.pixelStorei(G,At),d[G]=At)}function Ut(G){wt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),wt.copy(G))}function Rt(G){gt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),gt.copy(G))}function te(G,At){let ut=l.get(At);ut===void 0&&(ut=new WeakMap,l.set(At,ut));let Pt=ut.get(G);Pt===void 0&&(Pt=n.getUniformBlockIndex(At,G.name),ut.set(G,Pt))}function Yt(G,At){let Pt=l.get(At).get(G);c.get(At)!==Pt&&(n.uniformBlockBinding(At,Pt,G.__bindingPointIndex),c.set(At,Pt))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},d={},nt=null,ot={},m={},f=new WeakMap,_=[],v=null,g=!1,x=null,T=null,L=null,E=null,S=null,C=null,N=null,b=new ce(0,0,0),A=0,U=!1,B=null,$=null,z=null,O=null,V=null,wt.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:xt,bindFramebuffer:kt,drawBuffers:mt,useProgram:at,setBlending:Qt,setMaterial:re,setFlipSided:Zt,setCullFace:se,setLineWidth:ke,setPolygonOffset:We,setScissorTest:we,activeTexture:Ie,bindTexture:H,unbindTexture:Ve,compressedTexImage2D:me,compressedTexImage3D:F,texImage2D:lt,texImage3D:dt,pixelStorei:Kt,getParameter:Lt,updateUBOMapping:te,uniformBlockBinding:Yt,texStorage2D:Et,texStorage3D:Tt,texSubImage2D:y,texSubImage3D:Y,compressedTexSubImage2D:tt,compressedTexSubImage3D:ct,scissor:Ut,viewport:Rt,reset:ue}}function UM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,p=new WeakMap,d=new Set,m,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,y){return _?new OffscreenCanvas(F,y):Yr("canvas")}function g(F,y,Y){let tt=1,ct=me(F);if((ct.width>Y||ct.height>Y)&&(tt=Y/Math.max(ct.width,ct.height)),tt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Et=Math.floor(tt*ct.width),Tt=Math.floor(tt*ct.height);m===void 0&&(m=v(Et,Tt));let lt=y?v(Et,Tt):m;return lt.width=Et,lt.height=Tt,lt.getContext("2d").drawImage(F,0,0,Et,Tt),oe("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Et+"x"+Tt+")."),lt}else return"data"in F&&oe("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),F;return F}function x(F){return F.generateMipmaps}function T(F){n.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(F,y,Y,tt,ct,Et=!1){if(F!==null){if(n[F]!==void 0)return n[F];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Tt;tt&&(Tt=t.get("EXT_texture_norm16"),Tt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=y;if(y===n.RED&&(Y===n.FLOAT&&(lt=n.R32F),Y===n.HALF_FLOAT&&(lt=n.R16F),Y===n.UNSIGNED_BYTE&&(lt=n.R8),Y===n.UNSIGNED_SHORT&&Tt&&(lt=Tt.R16_EXT),Y===n.SHORT&&Tt&&(lt=Tt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.R8UI),Y===n.UNSIGNED_SHORT&&(lt=n.R16UI),Y===n.UNSIGNED_INT&&(lt=n.R32UI),Y===n.BYTE&&(lt=n.R8I),Y===n.SHORT&&(lt=n.R16I),Y===n.INT&&(lt=n.R32I)),y===n.RG&&(Y===n.FLOAT&&(lt=n.RG32F),Y===n.HALF_FLOAT&&(lt=n.RG16F),Y===n.UNSIGNED_BYTE&&(lt=n.RG8),Y===n.UNSIGNED_SHORT&&Tt&&(lt=Tt.RG16_EXT),Y===n.SHORT&&Tt&&(lt=Tt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RG16UI),Y===n.UNSIGNED_INT&&(lt=n.RG32UI),Y===n.BYTE&&(lt=n.RG8I),Y===n.SHORT&&(lt=n.RG16I),Y===n.INT&&(lt=n.RG32I)),y===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),Y===n.UNSIGNED_INT&&(lt=n.RGB32UI),Y===n.BYTE&&(lt=n.RGB8I),Y===n.SHORT&&(lt=n.RGB16I),Y===n.INT&&(lt=n.RGB32I)),y===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(lt=n.RGBA32UI),Y===n.BYTE&&(lt=n.RGBA8I),Y===n.SHORT&&(lt=n.RGBA16I),Y===n.INT&&(lt=n.RGBA32I)),y===n.RGB&&(Y===n.UNSIGNED_SHORT&&Tt&&(lt=Tt.RGB16_EXT),Y===n.SHORT&&Tt&&(lt=Tt.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(lt=n.R11F_G11F_B10F)),y===n.RGBA){let dt=Et?Xr:Me.getTransfer(ct);Y===n.FLOAT&&(lt=n.RGBA32F),Y===n.HALF_FLOAT&&(lt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(lt=dt===Ue?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Tt&&(lt=Tt.RGBA16_EXT),Y===n.SHORT&&Tt&&(lt=Tt.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function S(F,y){let Y;return F?y===null||y===oi||y===ur?Y=n.DEPTH24_STENCIL8:y===ai?Y=n.DEPTH32F_STENCIL8:y===hr&&(Y=n.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oi||y===ur?Y=n.DEPTH_COMPONENT24:y===ai?Y=n.DEPTH_COMPONENT32F:y===hr&&(Y=n.DEPTH_COMPONENT16),Y}function C(F,y){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==hn&&F.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?y.mipmaps.length:1}function N(F){let y=F.target;y.removeEventListener("dispose",N),A(y),y.isVideoTexture&&p.delete(y),y.isHTMLTexture&&d.delete(y)}function b(F){let y=F.target;y.removeEventListener("dispose",b),B(y)}function A(F){let y=i.get(F);if(y.__webglInit===void 0)return;let Y=F.source,tt=f.get(Y);if(tt){let ct=tt[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&U(F),Object.keys(tt).length===0&&f.delete(Y)}i.remove(F)}function U(F){let y=i.get(F);n.deleteTexture(y.__webglTexture);let Y=F.source,tt=f.get(Y);delete tt[y.__cacheKey],o.memory.textures--}function B(F){let y=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let ct=0;ct<y.__webglFramebuffer[tt].length;ct++)n.deleteFramebuffer(y.__webglFramebuffer[tt][ct]);else n.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)n.deleteFramebuffer(y.__webglFramebuffer[tt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=F.textures;for(let tt=0,ct=Y.length;tt<ct;tt++){let Et=i.get(Y[tt]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),o.memory.textures--),i.remove(Y[tt])}i.remove(F)}let $=0;function z(){$=0}function O(){return $}function V(F){$=F}function K(){let F=$;return F>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,F}function q(F){let y=[];return y.push(F.wrapS),y.push(F.wrapT),y.push(F.wrapR||0),y.push(F.magFilter),y.push(F.minFilter),y.push(F.anisotropy),y.push(F.internalFormat),y.push(F.format),y.push(F.type),y.push(F.generateMipmaps),y.push(F.premultiplyAlpha),y.push(F.flipY),y.push(F.unpackAlignment),y.push(F.colorSpace),y.join()}function st(F,y){let Y=i.get(F);if(F.isVideoTexture&&H(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){let tt=F.image;if(tt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(Y,F,y);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+y)}function Z(F,y){let Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){xt(Y,F,y);return}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+y)}function nt(F,y){let Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){xt(Y,F,y);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+y)}function ot(F,y){let Y=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Y.__version!==F.version){kt(Y,F,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+y)}let Ct={[za]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},pt={[hn]:n.NEAREST,[sp]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},wt={[lp]:n.NEVER,[dp]:n.ALWAYS,[cp]:n.LESS,[Ql]:n.LEQUAL,[hp]:n.EQUAL,[tc]:n.GEQUAL,[up]:n.GREATER,[fp]:n.NOTEQUAL};function gt(F,y){if(y.type===ai&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===gl||y.magFilter===fo||y.magFilter===ds||y.minFilter===sn||y.minFilter===gl||y.minFilter===fo||y.minFilter===ds)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,Ct[y.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,Ct[y.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,Ct[y.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,pt[y.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,wt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==fo&&y.minFilter!==ds||y.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function yt(F,y){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,y.addEventListener("dispose",N));let tt=y.source,ct=f.get(tt);ct===void 0&&(ct={},f.set(tt,ct));let Et=q(y);if(Et!==F.__cacheKey){ct[Et]===void 0&&(ct[Et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ct[Et].usedTimes++;let Tt=ct[F.__cacheKey];Tt!==void 0&&(ct[F.__cacheKey].usedTimes--,Tt.usedTimes===0&&U(y)),F.__cacheKey=Et,F.__webglTexture=ct[Et].texture}return Y}function W(F,y,Y){return Math.floor(Math.floor(F/Y)/y)}function et(F,y,Y,tt){let Et=F.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,Y,tt,y.data);else{Et.sort((Kt,Ut)=>Kt.start-Ut.start);let Tt=0;for(let Kt=1;Kt<Et.length;Kt++){let Ut=Et[Tt],Rt=Et[Kt],te=Ut.start+Ut.count,Yt=W(Rt.start,y.width,4),ue=W(Ut.start,y.width,4);Rt.start<=te+1&&Yt===ue&&W(Rt.start+Rt.count-1,y.width,4)===Yt?Ut.count=Math.max(Ut.count,Rt.start+Rt.count-Ut.start):(++Tt,Et[Tt]=Rt)}Et.length=Tt+1;let lt=e.getParameter(n.UNPACK_ROW_LENGTH),dt=e.getParameter(n.UNPACK_SKIP_PIXELS),Lt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Kt=0,Ut=Et.length;Kt<Ut;Kt++){let Rt=Et[Kt],te=Math.floor(Rt.start/4),Yt=Math.ceil(Rt.count/4),ue=te%y.width,G=Math.floor(te/y.width),At=Yt,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,ue,G,At,ut,Y,tt,y.data)}F.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,lt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Lt)}}function xt(F,y,Y){let tt=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=n.TEXTURE_3D);let ct=yt(F,y),Et=y.source;e.bindTexture(tt,F.__webglTexture,n.TEXTURE0+Y);let Tt=i.get(Et);if(Et.version!==Tt.__version||ct===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ut=Me.getPrimaries(Me.workingColorSpace),Pt=y.colorSpace===Hi?null:Me.getPrimaries(y.colorSpace),Ft=y.colorSpace===Hi||ut===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let dt=g(y.image,!1,s.maxTextureSize);dt=Ve(y,dt);let Lt=r.convert(y.format,y.colorSpace),Kt=r.convert(y.type),Ut=E(y.internalFormat,Lt,Kt,y.normalized,y.colorSpace,y.isVideoTexture);gt(tt,y);let Rt,te=y.mipmaps,Yt=y.isVideoTexture!==!0,ue=Tt.__version===void 0||ct===!0,G=Et.dataReady,At=C(y,dt);if(y.isDepthTexture)Ut=S(y.format===ps,y.type),ue&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Ut,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Ut,dt.width,dt.height,0,Lt,Kt,null));else if(y.isDataTexture)if(te.length>0){Yt&&ue&&e.texStorage2D(n.TEXTURE_2D,At,Ut,te[0].width,te[0].height);for(let ut=0,Pt=te.length;ut<Pt;ut++)Rt=te[ut],Yt?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Rt.width,Rt.height,Lt,Kt,Rt.data):e.texImage2D(n.TEXTURE_2D,ut,Ut,Rt.width,Rt.height,0,Lt,Kt,Rt.data);y.generateMipmaps=!1}else Yt?(ue&&e.texStorage2D(n.TEXTURE_2D,At,Ut,dt.width,dt.height),G&&et(y,dt,Lt,Kt)):e.texImage2D(n.TEXTURE_2D,0,Ut,dt.width,dt.height,0,Lt,Kt,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Yt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Ut,te[0].width,te[0].height,dt.depth);for(let ut=0,Pt=te.length;ut<Pt;ut++)if(Rt=te[ut],y.format!==Zn)if(Lt!==null)if(Yt){if(G)if(y.layerUpdates.size>0){let Ft=Zh(Rt.width,Rt.height,y.format,y.type);for(let _t of y.layerUpdates){let $t=Rt.data.subarray(_t*Ft/Rt.data.BYTES_PER_ELEMENT,(_t+1)*Ft/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,_t,Rt.width,Rt.height,1,Lt,$t)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Rt.width,Rt.height,dt.depth,Lt,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Ut,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Rt.width,Rt.height,dt.depth,Lt,Kt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Ut,Rt.width,Rt.height,dt.depth,0,Lt,Kt,Rt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Yt&&ue&&e.texStorage2D(n.TEXTURE_2D,At,Ut,te[0].width,te[0].height);for(let ut=0,Pt=te.length;ut<Pt;ut++)Rt=te[ut],y.format!==Zn?Lt!==null?Yt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Rt.width,Rt.height,Lt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Ut,Rt.width,Rt.height,0,Rt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Rt.width,Rt.height,Lt,Kt,Rt.data):e.texImage2D(n.TEXTURE_2D,ut,Ut,Rt.width,Rt.height,0,Lt,Kt,Rt.data)}else if(y.isDataArrayTexture)if(Yt){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Ut,dt.width,dt.height,dt.depth),G)if(y.layerUpdates.size>0){let ut=Zh(dt.width,dt.height,y.format,y.type);for(let Pt of y.layerUpdates){let Ft=dt.data.subarray(Pt*ut/dt.data.BYTES_PER_ELEMENT,(Pt+1)*ut/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pt,dt.width,dt.height,1,Lt,Kt,Ft)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Lt,Kt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,dt.width,dt.height,dt.depth,0,Lt,Kt,dt.data);else if(y.isData3DTexture)Yt?(ue&&e.texStorage3D(n.TEXTURE_3D,At,Ut,dt.width,dt.height,dt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Lt,Kt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,dt.width,dt.height,dt.depth,0,Lt,Kt,dt.data);else if(y.isFramebufferTexture){if(ue)if(Yt)e.texStorage2D(n.TEXTURE_2D,At,Ut,dt.width,dt.height);else{let ut=dt.width,Pt=dt.height;for(let Ft=0;Ft<At;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Ut,ut,Pt,0,Lt,Kt,null),ut>>=1,Pt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),dt.parentNode!==ut){ut.appendChild(dt),d.add(y),ut.onpaint=Pt=>{let Ft=Pt.changedElements;for(let _t of d)Ft.includes(_t.image)&&(_t.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,dt);else{let Ft=n.RGBA,_t=n.RGBA,$t=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ft,_t,$t,dt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(te.length>0){if(Yt&&ue){let ut=me(te[0]);e.texStorage2D(n.TEXTURE_2D,At,Ut,ut.width,ut.height)}for(let ut=0,Pt=te.length;ut<Pt;ut++)Rt=te[ut],Yt?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Lt,Kt,Rt):e.texImage2D(n.TEXTURE_2D,ut,Ut,Lt,Kt,Rt);y.generateMipmaps=!1}else if(Yt){if(ue){let ut=me(dt);e.texStorage2D(n.TEXTURE_2D,At,Ut,ut.width,ut.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Lt,Kt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Ut,Lt,Kt,dt);x(y)&&T(tt),Tt.__version=Et.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function kt(F,y,Y){if(y.image.length!==6)return;let tt=yt(F,y),ct=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+Y);let Et=i.get(ct);if(ct.version!==Et.__version||tt===!0){e.activeTexture(n.TEXTURE0+Y);let Tt=Me.getPrimaries(Me.workingColorSpace),lt=y.colorSpace===Hi?null:Me.getPrimaries(y.colorSpace),dt=y.colorSpace===Hi||Tt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,Kt=y.image[0]&&y.image[0].isDataTexture,Ut=[];for(let _t=0;_t<6;_t++)!Lt&&!Kt?Ut[_t]=g(y.image[_t],!0,s.maxCubemapSize):Ut[_t]=Kt?y.image[_t].image:y.image[_t],Ut[_t]=Ve(y,Ut[_t]);let Rt=Ut[0],te=r.convert(y.format,y.colorSpace),Yt=r.convert(y.type),ue=E(y.internalFormat,te,Yt,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,At=Et.__version===void 0||tt===!0,ut=ct.dataReady,Pt=C(y,Rt);gt(n.TEXTURE_CUBE_MAP,y);let Ft;if(Lt){G&&At&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ue,Rt.width,Rt.height);for(let _t=0;_t<6;_t++){Ft=Ut[_t].mipmaps;for(let $t=0;$t<Ft.length;$t++){let Xt=Ft[$t];y.format!==Zn?te!==null?G?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t,0,0,Xt.width,Xt.height,te,Xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t,ue,Xt.width,Xt.height,0,Xt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t,0,0,Xt.width,Xt.height,te,Yt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t,ue,Xt.width,Xt.height,0,te,Yt,Xt.data)}}}else{if(Ft=y.mipmaps,G&&At){Ft.length>0&&Pt++;let _t=me(Ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ue,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Kt){G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ut[_t].width,Ut[_t].height,te,Yt,Ut[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Ut[_t].width,Ut[_t].height,0,te,Yt,Ut[_t].data);for(let $t=0;$t<Ft.length;$t++){let Fe=Ft[$t].image[_t].image;G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t+1,0,0,Fe.width,Fe.height,te,Yt,Fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t+1,ue,Fe.width,Fe.height,0,te,Yt,Fe.data)}}else{G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,te,Yt,Ut[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,te,Yt,Ut[_t]);for(let $t=0;$t<Ft.length;$t++){let Xt=Ft[$t];G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t+1,0,0,te,Yt,Xt.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,$t+1,ue,te,Yt,Xt.image[_t])}}}x(y)&&T(n.TEXTURE_CUBE_MAP),Et.__version=ct.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function mt(F,y,Y,tt,ct,Et){let Tt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),dt=E(Y.internalFormat,Tt,lt,Y.normalized,Y.colorSpace),Lt=i.get(y),Kt=i.get(Y);if(Kt.__renderTarget=y,!Lt.__hasExternalTextures){let Ut=Math.max(1,y.width>>Et),Rt=Math.max(1,y.height>>Et);ct===n.TEXTURE_3D||ct===n.TEXTURE_2D_ARRAY?e.texImage3D(ct,Et,dt,Ut,Rt,y.depth,0,Tt,lt,null):e.texImage2D(ct,Et,dt,Ut,Rt,0,Tt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),Ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,ct,Kt.__webglTexture,0,we(y)):(ct===n.TEXTURE_2D||ct>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,ct,Kt.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(F,y,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,F),y.depthBuffer){let tt=y.depthTexture,ct=tt&&tt.isDepthTexture?tt.type:null,Et=S(y.stencilBuffer,ct),Tt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we(y),Et,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,we(y),Et,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Et,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,F)}else{let tt=y.textures;for(let ct=0;ct<tt.length;ct++){let Et=tt[ct],Tt=r.convert(Et.format,Et.colorSpace),lt=r.convert(Et.type),dt=E(Et.internalFormat,Tt,lt,Et.normalized,Et.colorSpace);Ie(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we(y),dt,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,we(y),dt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,dt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(F,y,Y){let tt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=i.get(y.depthTexture);if(ct.__renderTarget=y,(!ct.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,y.depthTexture.addEventListener("dispose",N)),ct.__webglTexture===void 0){ct.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),gt(n.TEXTURE_CUBE_MAP,y.depthTexture);let Lt=r.convert(y.depthTexture.format),Kt=r.convert(y.depthTexture.type),Ut;y.depthTexture.format===Si?Ut=n.DEPTH_COMPONENT24:y.depthTexture.format===ps&&(Ut=n.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ut,y.width,y.height,0,Lt,Kt,null)}}else st(y.depthTexture,0);let Et=ct.__webglTexture,Tt=we(y),lt=tt?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,dt=y.depthTexture.format===ps?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Si)Ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,lt,Et,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,lt,Et,0);else if(y.depthTexture.format===ps)Ie(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,lt,Et,0,Tt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,lt,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(F){let y=i.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==F.depthTexture){let tt=F.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){let ct=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",ct)};tt.addEventListener("dispose",ct),y.__depthDisposeCallback=ct}y.__boundDepthTexture=tt}if(F.depthTexture&&!y.__autoAllocateDepthBuffer)if(Y)for(let tt=0;tt<6;tt++)ae(y.__webglFramebuffer[tt],F,tt);else{let tt=F.texture.mipmaps;tt&&tt.length>0?ae(y.__webglFramebuffer[0],F,0):ae(y.__webglFramebuffer,F,0)}else if(Y){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=n.createRenderbuffer(),at(y.__webglDepthbuffer[tt],F,!1);else{let ct=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=y.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,Et)}}else{let tt=F.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),at(y.__webglDepthbuffer,F,!1);else{let ct=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(F,y,Y){let tt=i.get(F);y!==void 0&&mt(tt.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Dt(F)}function re(F){let y=F.texture,Y=i.get(F),tt=i.get(y);F.addEventListener("dispose",b);let ct=F.textures,Et=F.isWebGLCubeRenderTarget===!0,Tt=ct.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=y.version,o.memory.textures++),Et){Y.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[lt]=[];for(let dt=0;dt<y.mipmaps.length;dt++)Y.__webglFramebuffer[lt][dt]=n.createFramebuffer()}else Y.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)Y.__webglFramebuffer[lt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let lt=0,dt=ct.length;lt<dt;lt++){let Lt=i.get(ct[lt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&Ie(F)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let lt=0;lt<ct.length;lt++){let dt=ct[lt];Y.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[lt]);let Lt=r.convert(dt.format,dt.colorSpace),Kt=r.convert(dt.type),Ut=E(dt.internalFormat,Lt,Kt,dt.normalized,dt.colorSpace,F.isXRRenderTarget===!0),Rt=we(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,Ut,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),at(Y.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),gt(n.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)mt(Y.__webglFramebuffer[lt][dt],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else mt(Y.__webglFramebuffer[lt],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);x(y)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,dt=ct.length;lt<dt;lt++){let Lt=ct[lt],Kt=i.get(Lt),Ut=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ut=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ut,Kt.__webglTexture),gt(Ut,Lt),mt(Y.__webglFramebuffer,F,Lt,n.COLOR_ATTACHMENT0+lt,Ut,0),x(Lt)&&T(Ut)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(lt=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),gt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)mt(Y.__webglFramebuffer[dt],F,y,n.COLOR_ATTACHMENT0,lt,dt);else mt(Y.__webglFramebuffer,F,y,n.COLOR_ATTACHMENT0,lt,0);x(y)&&T(lt),e.unbindTexture()}F.depthBuffer&&Dt(F)}function Zt(F){let y=F.textures;for(let Y=0,tt=y.length;Y<tt;Y++){let ct=y[Y];if(x(ct)){let Et=L(F),Tt=i.get(ct).__webglTexture;e.bindTexture(Et,Tt),T(Et),e.unbindTexture()}}}let se=[],ke=[];function We(F){if(F.samples>0){if(Ie(F)===!1){let y=F.textures,Y=F.width,tt=F.height,ct=n.COLOR_BUFFER_BIT,Et=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(F),lt=y.length>1;if(lt)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let dt=F.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ct|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ct|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Lt]);let Kt=i.get(y[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,Y,tt,0,0,Y,tt,ct,n.NEAREST),c===!0&&(se.length=0,ke.length=0,se.push(n.COLOR_ATTACHMENT0+Lt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(se.push(Et),ke.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Lt]);let Kt=i.get(y[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let y=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function we(F){return Math.min(s.maxSamples,F.samples)}function Ie(F){let y=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(F){let y=o.render.frame;p.get(F)!==y&&(p.set(F,y),F.update())}function Ve(F,y){let Y=F.colorSpace,tt=F.format,ct=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==Wr&&Y!==Hi&&(Me.getTransfer(Y)===Ue?(tt!==Zn||ct!==Bn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",Y)),y}function me(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=O,this.setTextureUnits=V,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=nt,this.setTextureCube=ot,this.rebindTextures=Qt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function FM(n,t){function e(i,s=Hi){let r,o=Me.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fh)return n.BYTE;if(i===Oh)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===kh)return n.ALPHA;if(i===Vh)return n.RGB;if(i===Zn)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===ps)return n.DEPTH_STENCIL;if(i===Hh)return n.RED;if(i===vl)return n.RED_INTEGER;if(i===ms)return n.RG;if(i===Ml)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===po||i===mo||i===go||i===xo)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===wl||i===Al||i===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Cl||i===Rl||i===Il||i===Pl||i===_o||i===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Cl)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Il)return r.COMPRESSED_R11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_o)return r.COMPRESSED_RG11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Vl||i===Hl||i===Gl||i===Wl||i===Xl||i===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===$l||i===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jl||i===Kl||i===yo||i===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
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

}`,pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new so(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new bn({vertexShader:OM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mu=class extends wi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,p=null,d=null,m=null,f=null,_=null,v=typeof XRWebGLBinding<"u",g=new pu,x={},T=e.getContextAttributes(),L=null,E=null,S=[],C=[],N=new _e,b=null,A=null,U=new vn;U.viewport=new Ze;let B=new vn;B.viewport=new Ze;let $=[U,B],z=new fl,O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=S[W];return et===void 0&&(et=new rr,S[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=S[W];return et===void 0&&(et=new rr,S[W]=et),et.getGripSpace()},this.getHand=function(W){let et=S[W];return et===void 0&&(et=new rr,S[W]=et),et.getHandSpace()};function K(W){let et=C.indexOf(W.inputSource);if(et===-1)return;let xt=S[et];xt!==void 0&&(xt.update(W.inputSource,W.frame,l||o),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",st);for(let W=0;W<S.length;W++){let et=C[W];et!==null&&(C[W]=null,S[W].disconnect(et))}O=null,V=null,g.reset();for(let W in x)delete x[W];if(t.setRenderTarget(L),f=null,m=null,d=null,s=null,E=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(N.width,N.height,!1),A!==null){let W=A.camera;W.fov=A.fov,W.zoom=A.zoom,W.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",q),s.addEventListener("inputsourceschange",st),T.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,kt=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?ps:Si,kt=T.stencil?ur:oi);let at={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),m=d.createProjectionLayer(at),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),E=new In(m.textureWidth,m.textureHeight,{format:Zn,type:Bn,depthTexture:new as(m.textureWidth,m.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new In(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(W){for(let et=0;et<W.removed.length;et++){let xt=W.removed[et],kt=C.indexOf(xt);kt>=0&&(C[kt]=null,S[kt].disconnect(xt))}for(let et=0;et<W.added.length;et++){let xt=W.added[et],kt=C.indexOf(xt);if(kt===-1){for(let at=0;at<S.length;at++)if(at>=C.length){C.push(xt),kt=at;break}else if(C[at]===null){C[at]=xt,kt=at;break}if(kt===-1)break}let mt=S[kt];mt&&mt.connect(xt)}}let Z=new J,nt=new J;function ot(W,et,xt){Z.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(xt.matrixWorld);let kt=Z.distanceTo(nt),mt=et.projectionMatrix.elements,at=xt.projectionMatrix.elements,ae=mt[14]/(mt[10]-1),Dt=mt[14]/(mt[10]+1),Qt=(mt[9]+1)/mt[5],re=(mt[9]-1)/mt[5],Zt=(mt[8]-1)/mt[0],se=(at[8]+1)/at[0],ke=ae*Zt,We=ae*se,we=kt/(-Zt+se),Ie=we*-Zt;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ie),W.translateZ(we),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),mt[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let H=ae+we,Ve=Dt+we,me=ke-Ie,F=We+(kt-Ie),y=Qt*Dt/Ve*H,Y=re*Dt/Ve*H;W.projectionMatrix.makePerspective(me,F,y,Y,H,Ve),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Ct(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let et=W.near,xt=W.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),z.near=B.near=U.near=et,z.far=B.far=U.far=xt,(O!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,V=z.far),z.layers.mask=W.layers.mask|6,U.layers.mask=z.layers.mask&-5,B.layers.mask=z.layers.mask&-3;let kt=W.parent,mt=z.cameras;Ct(z,kt);for(let at=0;at<mt.length;at++)Ct(mt[at],kt);mt.length===2?ot(z,U,B):z.projectionMatrix.copy(U.projectionMatrix),A===null&&W.isPerspectiveCamera&&(A={camera:W,fov:W.fov,zoom:W.zoom}),pt(W,z,kt)};function pt(W,et,xt){xt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ha*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(m===null&&f===null))return c},this.setFoveation=function(W){c=W,m!==null&&(m.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(W){return x[W]};let wt=null;function gt(W,et){if(p=et.getViewerPose(l||o),_=et,p!==null){let xt=p.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let kt=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,kt=!0);for(let Dt=0;Dt<xt.length;Dt++){let Qt=xt[Dt],re=null;if(f!==null)re=f.getViewport(Qt);else{let se=d.getViewSubImage(m,Qt);re=se.viewport,Dt===0&&(t.setRenderTargetTextures(E,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(E))}let Zt=$[Dt];Zt===void 0&&(Zt=new vn,Zt.layers.enable(Dt),Zt.viewport=new Ze,$[Dt]=Zt),Zt.matrix.fromArray(Qt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Qt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(re.x,re.y,re.width,re.height),Dt===0&&(z.matrix.copy(Zt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),kt===!0&&z.cameras.push(Zt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Dt=d.getDepthInformation(xt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(Dt,s.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Dt=0;Dt<xt.length;Dt++){let Qt=xt[Dt].camera;if(Qt){let re=x[Qt];re||(re=new so,x[Qt]=re);let Zt=d.getCameraImage(Qt);re.sourceTexture=Zt}}}}for(let xt=0;xt<S.length;xt++){let kt=C[xt],mt=S[xt];kt!==null&&mt!==void 0&&mt.update(kt,et,l||o)}wt&&wt(W,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}let yt=new Wp;yt.setAnimationLoop(gt),this.setAnimationLoop=function(W){wt=W},this.dispose=function(){}}},zM=new qe,Jp=new fe;Jp.set(-1,0,0,0,1,0,0,0,1);function kM(n,t){function e(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function i(g,x){x.color.getRGB(g.fogColor.value,qh(n)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,T,L,E){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),d(g,x)):x.isMeshPhongMaterial?(r(g,x),p(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),m(g,x),x.isMeshPhysicalMaterial&&f(g,x,E)):x.isMeshMatcapMaterial?(r(g,x),_(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),v(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(o(g,x),x.isLineDashedMaterial&&a(g,x)):x.isPointsMaterial?c(g,x,T,L):x.isSpriteMaterial?l(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,e(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===Rn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,e(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===Rn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,e(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,e(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let T=t.get(x),L=T.envMap,E=T.envMapRotation;L&&(g.envMap.value=L,g.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(E)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Jp),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,g.aoMapTransform))}function o(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform))}function a(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function c(g,x,T,L){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*T,g.scale.value=L*.5,x.map&&(g.map.value=x.map,e(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function l(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function p(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function d(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function m(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function f(g,x,T){g.ior.value=x.ior,x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Rn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,x){x.matcap&&(g.matcap.value=x.matcap)}function v(g,x){let T=t.get(x).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){let C=S.program;i.uniformBlockBinding(E,C)}function l(E,S){let C=s[E.id];C===void 0&&(g(E),C=p(E),s[E.id]=C,E.addEventListener("dispose",T));let N=S.program;i.updateUBOMapping(E,N);let b=t.render.frame;r[E.id]!==b&&(m(E),r[E.id]=b)}function p(E){let S=d();E.__bindingPointIndex=S;let C=n.createBuffer(),N=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,N,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,C),C}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){let S=s[E.id],C=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,A=C.length;b<A;b++){let U=C[b];if(Array.isArray(U))for(let B=0,$=U.length;B<$;B++)f(U[B],b,B,N);else f(U,b,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,S,C,N){if(v(E,S,C,N)===!0){let b=E.__offset,A=E.value;if(Array.isArray(A)){let U=0;for(let B=0;B<A.length;B++){let $=A[B],z=x($);_($,E.__data,U),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,E.__data)}}function _(E,S,C){typeof E=="number"||typeof E=="boolean"?S[0]=E:E.isMatrix3?(S[0]=E.elements[0],S[1]=E.elements[1],S[2]=E.elements[2],S[3]=0,S[4]=E.elements[3],S[5]=E.elements[4],S[6]=E.elements[5],S[7]=0,S[8]=E.elements[6],S[9]=E.elements[7],S[10]=E.elements[8],S[11]=0):ArrayBuffer.isView(E)?S.set(new E.constructor(E.buffer,E.byteOffset,S.length)):E.toArray(S,C)}function v(E,S,C,N){let b=E.value,A=S+"_"+C;if(N[A]===void 0)return typeof b=="number"||typeof b=="boolean"?N[A]=b:ArrayBuffer.isView(b)?N[A]=b.slice():N[A]=b.clone(),!0;{let U=N[A];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return N[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(U.equals(b)===!1)return U.copy(b),!0}}return!1}function g(E){let S=E.uniforms,C=0,N=16;for(let A=0,U=S.length;A<U;A++){let B=Array.isArray(S[A])?S[A]:[S[A]];for(let $=0,z=B.length;$<z;$++){let O=B[$],V=Array.isArray(O.value)?O.value:[O.value];for(let K=0,q=V.length;K<q;K++){let st=V[K],Z=x(st),nt=C%N,ot=nt%Z.boundary,Ct=nt+ot;C+=ot,Ct!==0&&N-Ct<Z.storage&&(C+=N-Ct),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=C,C+=Z.storage}}}let b=C%N;return b>0&&(C+=N-b),E.__size=C,E.__cache={},this}function x(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",E),S}function T(E){let S=E.target;S.removeEventListener("dispose",T);let C=o.indexOf(S.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function L(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:L}}var HM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function GM(){return Ci===null&&(Ci=new Ya(HM,16,16,ms,li),Ci.name="DFG_LUT",Ci.minFilter=sn,Ci.magFilter=sn,Ci.wrapS=bi,Ci.wrapT=bi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var rc=class{constructor(t={}){let{canvas:e=pp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1,outputBufferType:f=Bn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let v=f,g=new Set([bl,Ml,vl]),x=new Set([Bn,oi,hr,ur,_l,yl]),T=new Uint32Array(4),L=new Int32Array(4),E=new J,S=null,C=null,N=[],b=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,B=!1,$=null,z=null,O=null,V=null;this._outputColorSpace=nn;let K=0,q=0,st=null,Z=-1,nt=null,ot=new Ze,Ct=new Ze,pt=null,wt=new ce(0),gt=0,yt=e.width,W=e.height,et=1,xt=null,kt=null,mt=new Ze(0,0,yt,W),at=new Ze(0,0,yt,W),ae=!1,Dt=new eo,Qt=!1,re=!1,Zt=new qe,se=new J,ke=new Ze,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ie(){return st===null?et:1}let H=i;function Ve(w,k){return e.getContext(w,k)}let me,F,y,Y,tt,ct,Et,Tt,lt,dt,Lt,Kt,Ut,Rt,te,Yt,ue,G,At,ut,Pt,Ft,_t;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Ln,!1),H===null){let k="webgl2";if(H=Ve(k,w),H===null)throw Ve(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(w){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),le("WebGLRenderer: "+w.message),w}function $t(){me=new Jy(H),me.init(),Pt=new FM(H,me),F=new ky(H,me,t,Pt),y=new NM(H,me),F.reversedDepthBuffer&&m&&y.buffers.depth.setReversed(!0),z=H.createFramebuffer(),O=H.createFramebuffer(),V=H.createFramebuffer(),Y=new Qy(H),tt=new vM,ct=new UM(H,me,y,tt,F,Pt,Y),Et=new Zy(U),Tt=new ex(H),Ft=new By(H,Tt),lt=new Ky(H,Tt,Y,Ft),dt=new ev(H,lt,Tt,Ft,Y),G=new tv(H,F,ct),te=new Vy(tt),Lt=new yM(U,Et,me,F,Ft,te),Kt=new kM(U,tt),Ut=new bM,Rt=new CM(me),ue=new Oy(U,Et,y,dt,_,c),Yt=new DM(U,dt,F),_t=new VM(H,Y,F,y),At=new zy(H,me,Y),ut=new jy(H,me,Y),Y.programs=Lt.programs,U.capabilities=F,U.extensions=me,U.properties=tt,U.renderLists=Ut,U.shadowMap=Yt,U.state=y,U.info=Y}v!==Bn&&(A=new iv(v,e.width,e.height,a,s,r));let Xt=new mu(U,H);this.xr=Xt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(yt,W,!1))},this.getSize=function(w){return w.set(yt,W)},this.setSize=function(w,k,it=!0){if(Xt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=w,W=k,e.width=Math.floor(w*et),e.height=Math.floor(k*et),it===!0&&(e.style.width=w+"px",e.style.height=k+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(yt*et,W*et).floor()},this.setDrawingBufferSize=function(w,k,it){yt=w,W=k,et=it,e.width=Math.floor(w*it),e.height=Math.floor(k*it),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(v===Bn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ot)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,k,it,Q){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,k,it,Q),y.viewport(ot.copy(mt).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,k,it,Q){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,k,it,Q),y.scissor(Ct.copy(at).multiplyScalar(et).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){y.setScissorTest(ae=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){kt=w},this.getClearColor=function(w){return w.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,it=!0){let Q=0;if(w){let j=!1;if(st!==null){let Bt=st.texture.format;j=g.has(Bt)}if(j){let Bt=st.texture.type,Ot=x.has(Bt),Nt=ue.getClearColor(),Wt=ue.getClearAlpha(),Jt=Nt.r,de=Nt.g,pe=Nt.b;Ot?(T[0]=Jt,T[1]=de,T[2]=pe,T[3]=Wt,H.clearBufferuiv(H.COLOR,0,T)):(L[0]=Jt,L[1]=de,L[2]=pe,L[3]=Wt,H.clearBufferiv(H.COLOR,0,L))}else Q|=H.COLOR_BUFFER_BIT}k&&(Q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),$=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),ue.dispose(),Ut.dispose(),Rt.dispose(),tt.dispose(),Et.dispose(),dt.dispose(),Ft.dispose(),_t.dispose(),Lt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",It),Xt.removeEventListener("sessionend",Wo),ye.stop()};function Fe(w){w.preventDefault(),$r("WebGLRenderer: Context Lost."),B=!0}function Ee(){$r("WebGLRenderer: Context Restored."),B=!1;let w=Y.autoReset,k=Yt.enabled,it=Yt.autoUpdate,Q=Yt.needsUpdate,j=Yt.type;$t(),Y.autoReset=w,Yt.enabled=k,Yt.autoUpdate=it,Yt.needsUpdate=Q,Yt.type=j}function Ln(w){le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xn(w){let k=w.target;k.removeEventListener("dispose",xn),Go(k)}function Go(w){Er(w),tt.remove(w)}function Er(w){let k=tt.get(w).programs;k!==void 0&&(k.forEach(function(it){Lt.releaseProgram(it)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,it,Q,j,Bt){k===null&&(k=We);let Ot=j.isMesh&&j.matrixWorld.determinantAffine()<0,Nt=Yo(w,k,it,Q,j);y.setMaterial(Q,Ot);let Wt=it.index,Jt=1;if(Q.wireframe===!0){if(Wt=lt.getWireframeAttribute(it),Wt===void 0)return;Jt=2}let de=it.drawRange,pe=it.attributes.position,qt=de.start*Jt,Te=(de.start+de.count)*Jt;Bt!==null&&(qt=Math.max(qt,Bt.start*Jt),Te=Math.min(Te,(Bt.start+Bt.count)*Jt)),Wt!==null?(qt=Math.max(qt,0),Te=Math.min(Te,Wt.count)):pe!=null&&(qt=Math.max(qt,0),Te=Math.min(Te,pe.count));let Xe=Te-qt;if(Xe<0||Xe===1/0)return;Ft.setup(j,Q,Nt,it,Wt);let De,Ae=At;if(Wt!==null&&(De=Tt.get(Wt),Ae=ut,Ae.setIndex(De)),j.isMesh)Q.wireframe===!0?(y.setLineWidth(Q.wireframeLinewidth*Ie()),Ae.setMode(H.LINES)):Ae.setMode(H.TRIANGLES);else if(j.isLine){let ln=Q.linewidth;ln===void 0&&(ln=1),y.setLineWidth(ln*Ie()),j.isLineSegments?Ae.setMode(H.LINES):j.isLineLoop?Ae.setMode(H.LINE_LOOP):Ae.setMode(H.LINE_STRIP)}else j.isPoints?Ae.setMode(H.POINTS):j.isSprite&&Ae.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Ae.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let ln=j._multiDrawStarts,Ht=j._multiDrawCounts,fn=j._multiDrawCount,ve=Wt?Tt.get(Wt).bytesPerElement:1,dn=tt.get(Q).currentProgram.getUniforms();for(let Nn=0;Nn<fn;Nn++)dn.setValue(H,"_gl_DrawID",Nn),Ae.render(ln[Nn]/ve,Ht[Nn])}else if(j.isInstancedMesh)Ae.renderInstances(qt,Xe,j.count);else if(it.isInstancedBufferGeometry){let ln=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ht=Math.min(it.instanceCount,ln);Ae.renderInstances(qt,Xe,Ht)}else Ae.render(qt,Xe)};function Hn(w,k,it,Q){$!==null&&w.isNodeMaterial&&$.setObject(Q,w),Qt===!0&&te.setState(w,it,!1),w.transparent===!0&&w.side===$n&&w.forceSinglePass===!1?(w.side=Rn,w.needsUpdate=!0,Us(w,k,Q),w.side=us,w.needsUpdate=!0,Us(w,k,Q),w.side=$n):Us(w,k,Q)}this.compile=function(w,k,it=null){it===null&&(it=w),$!==null&&$.renderStart(w,k,it),C=Rt.get(it),C.init(k),b.push(C),it.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),w!==it&&w.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),C.setupLights(),$!==null&&$.updateLights(C.state.lightsArray),re=this.localClippingEnabled,Qt=te.init(this.clippingPlanes,re),Qt===!0&&te.setGlobalState(this.clippingPlanes,k),$!==null&&Yt.render(C.state.shadowsArray,it,k);let Q=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Bt=j.material;if(Bt)if(Array.isArray(Bt))for(let Ot=0;Ot<Bt.length;Ot++){let Nt=Bt[Ot];Hn(Nt,it,k,j),Q.add(Nt)}else Hn(Bt,it,k,j),Q.add(Bt)}),C=b.pop(),$!==null&&$.renderEnd(),Q},this.compileAsync=function(w,k,it=null){let Q=this.compile(w,k,it);return new Promise(j=>{function Bt(){if(Q.forEach(function(Ot){let Wt=tt.get(Ot).currentProgram;(Wt===void 0||Wt.isReady())&&Q.delete(Ot)}),Q.size===0){j(w);return}setTimeout(Bt,10)}me.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ni=null;function St(w){Ni&&Ni(w)}function It(){ye.stop()}function Wo(){ye.start()}let ye=new Wp;ye.setAnimationLoop(St),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(w){Ni=w,Xt.setAnimationLoop(w),w===null?ye.stop():ye.start()},Xt.addEventListener("sessionstart",It),Xt.addEventListener("sessionend",Wo),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;$!==null&&$.renderStart(w,k);let it=Xt.enabled===!0&&Xt.isPresenting===!0,Q=A!==null&&(st===null||it)&&A.begin(U,st);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(k),k=Xt.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,k,st),C=Rt.get(w,b.length),C.init(k),C.state.textureUnits=ct.getTextureUnits(),b.push(C),Zt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Dt.setFromProjectionMatrix(Zt,si,k.reversedDepth),re=this.localClippingEnabled,Qt=te.init(this.clippingPlanes,re),S=Ut.get(w,N.length),S.init(),N.push(S),Xt.enabled===!0&&Xt.isPresenting===!0){let Ot=U.xr.getDepthSensingMesh();Ot!==null&&pi(Ot,k,-1/0,U.sortObjects)}pi(w,k,0,U.sortObjects),S.finish(),$!==null&&$.updateLights(C.state.lightsArray),U.sortObjects===!0&&S.sort(xt,kt),we=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,we&&ue.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&te.beginShadows();let j=C.state.shadowsArray;if(Yt.render(j,w,k),Qt===!0&&te.endShadows(),(Q&&A.hasRenderPass())===!1){let Ot=S.opaque,Nt=S.transmissive;if(C.setupLights(),k.isArrayCamera){let Wt=k.cameras;if(Nt.length>0)for(let Jt=0,de=Wt.length;Jt<de;Jt++){let pe=Wt[Jt];Tr(Ot,Nt,w,pe)}we&&ue.render(w);for(let Jt=0,de=Wt.length;Jt<de;Jt++){let pe=Wt[Jt];Ui(S,w,pe,pe.viewport)}}else Nt.length>0&&Tr(Ot,Nt,w,k),we&&ue.render(w),Ui(S,w,k)}st!==null&&q===0&&(ct.updateMultisampleRenderTarget(st),ct.updateRenderTargetMipmap(st)),Q&&A.end(U),w.isScene===!0&&w.onAfterRender(U,w,k),Ft.resetDefaultState(),Z=-1,nt=null,b.pop(),b.length>0?(C=b[b.length-1],ct.setTextureUnits(C.state.textureUnits),Qt===!0&&te.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?S=N[N.length-1]:S=null,$!==null&&$.renderEnd()};function pi(w,k,it,Q){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)C.pushLightProbeGrid(w);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Dt)){Q&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Zt);let Ot=dt.update(w),Nt=w.material;Nt.visible&&S.push(w,Ot,Nt,it,ke.z,null,k)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Dt))){let Ot=dt.update(w),Nt=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ke.copy(Ot.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(Zt)),Array.isArray(Nt)){let Wt=Ot.groups;for(let Jt=0,de=Wt.length;Jt<de;Jt++){let pe=Wt[Jt],qt=Nt[pe.materialIndex];qt&&qt.visible&&S.push(w,Ot,qt,it,ke.z,pe,k)}}else Nt.visible&&S.push(w,Ot,Nt,it,ke.z,null,k)}}let Bt=w.children;for(let Ot=0,Nt=Bt.length;Ot<Nt;Ot++)pi(Bt[Ot],k,it,Q)}function Ui(w,k,it,Q){let{opaque:j,transmissive:Bt,transparent:Ot}=w;C.setupLightsView(it),Qt===!0&&te.setGlobalState(U.clippingPlanes,it),Q&&y.viewport(ot.copy(Q)),j.length>0&&$i(j,k,it),Bt.length>0&&$i(Bt,k,it),Ot.length>0&&$i(Ot,k,it),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Tr(w,k,it,Q){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Q.id]===void 0){let qt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Q.id]=new In(1,1,{generateMipmaps:!0,type:qt?li:Bn,minFilter:ds,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let Bt=C.state.transmissionRenderTarget[Q.id],Ot=Q.viewport||ot;Bt.setSize(Ot.z*U.transmissionResolutionScale,Ot.w*U.transmissionResolutionScale);let Nt=U.getRenderTarget(),Wt=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(Bt),U.getClearColor(wt),gt=U.getClearAlpha(),gt<1&&U.setClearColor(16777215,.5),U.clear(),we&&ue.render(it);let de=U.toneMapping;U.toneMapping=ri;let pe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),C.setupLightsView(Q),Qt===!0&&te.setGlobalState(U.clippingPlanes,Q),$i(w,it,Q),ct.updateMultisampleRenderTarget(Bt),ct.updateRenderTargetMipmap(Bt),me.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Te=0,Xe=k.length;Te<Xe;Te++){let De=k[Te],{object:Ae,geometry:ln,material:Ht,group:fn}=De;if(Ht.side===$n&&Ae.layers.test(Q.layers)){let ve=Ht.side;Ht.side=Rn,Ht.needsUpdate=!0,Xo(Ae,it,Q,ln,Ht,fn),Ht.side=ve,Ht.needsUpdate=!0,qt=!0}}qt===!0&&(ct.updateMultisampleRenderTarget(Bt),ct.updateRenderTargetMipmap(Bt))}U.setRenderTarget(Nt,Wt,Jt),U.setClearColor(wt,gt),pe!==void 0&&(Q.viewport=pe),U.toneMapping=de}function $i(w,k,it){let Q=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Bt=w.length;j<Bt;j++){let Ot=w[j],{object:Nt,geometry:Wt,group:Jt}=Ot,de=Ot.material;de.allowOverride===!0&&Q!==null&&(de=Q),Nt.layers.test(it.layers)&&Xo(Nt,k,it,Wt,de,Jt)}}function Xo(w,k,it,Q,j,Bt){$!==null&&j.isNodeMaterial&&$.setObject(w,j),w.onBeforeRender(U,k,it,Q,j,Bt),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(U,k,it,Q,w,Bt),j.transparent===!0&&j.side===$n&&j.forceSinglePass===!1?(j.side=Rn,j.needsUpdate=!0,U.renderBufferDirect(it,k,Q,j,w,Bt),j.side=us,j.needsUpdate=!0,U.renderBufferDirect(it,k,Q,j,w,Bt),j.side=$n):U.renderBufferDirect(it,k,Q,j,w,Bt),w.onAfterRender(U,k,it,Q,j,Bt)}function Us(w,k,it){k.isScene!==!0&&(k=We);let Q=tt.get(w),j=C.state.lights,Bt=C.state.shadowsArray,Ot=j.state.version,Nt=Lt.getParameters(w,j.state,Bt,k,it,C.state.lightProbeGridArray),Wt=Lt.getProgramCacheKey(Nt),Jt=Q.programs;Q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,Q.fog=k.fog;let de=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Q.envMap=Et.get(w.envMap||Q.environment,de),Q.envMapRotation=Q.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Jt===void 0&&(w.addEventListener("dispose",xn),Jt=new Map,Q.programs=Jt);let pe=Jt.get(Wt);if(pe!==void 0){if(Q.currentProgram===pe&&Q.lightsStateVersion===Ot)return Cr(w,Nt),pe}else Nt.uniforms=Lt.getUniforms(w),$!==null&&w.isNodeMaterial&&$.build(w,it,Nt),w.onBeforeCompile(Nt,U),pe=Lt.acquireProgram(Nt,Wt),Jt.set(Wt,pe),Q.uniforms=Nt.uniforms;let qt=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=te.uniform),Cr(w,Nt),Q.needsLights=$o(w),Q.lightsStateVersion=Ot,Q.needsLights&&(qt.ambientLightColor.value=j.state.ambient,qt.lightProbe.value=j.state.probe,qt.sunLights.value=j.state.sun,qt.sunLightShadows.value=j.state.sunShadow,qt.directionalLights.value=j.state.directional,qt.directionalLightShadows.value=j.state.directionalShadow,qt.spotLights.value=j.state.spot,qt.spotLightShadows.value=j.state.spotShadow,qt.rectAreaLights.value=j.state.rectArea,qt.ltc_1.value=j.state.rectAreaLTC1,qt.ltc_2.value=j.state.rectAreaLTC2,qt.pointLights.value=j.state.point,qt.pointLightShadows.value=j.state.pointShadow,qt.hemisphereLights.value=j.state.hemi,qt.sunShadowMatrix.value=j.state.sunShadowMatrix,qt.sunShadowCascade.value=j.state.sunShadowCascade,qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qt.spotLightMatrix.value=j.state.spotLightMatrix,qt.spotLightMap.value=j.state.spotLightMap,qt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=C.state.lightProbeGridArray.length>0,Q.currentProgram=pe,Q.uniformsList=null,pe}function qo(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=pr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Cr(w,k){let it=tt.get(w);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function Dn(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;E.setFromMatrixPosition(k.matrixWorld);for(let it=0,Q=w.length;it<Q;it++){let j=w[it];if(j.texture!==null&&j.boundingBox.containsPoint(E))return j}return null}function Yo(w,k,it,Q,j){k.isScene!==!0&&(k=We),ct.resetTextureUnits();let Bt=k.fog,Ot=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?k.environment:null,Nt=st===null?U.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Me.workingColorSpace,Wt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Jt=Et.get(Q.envMap||Ot,Wt),de=Q.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pe=!!it.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qt=!!it.morphAttributes.position,Te=!!it.morphAttributes.normal,Xe=!!it.morphAttributes.color,De=ri;Q.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(De=U.toneMapping);let Ae=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ln=Ae!==void 0?Ae.length:0,Ht=tt.get(Q),fn=C.state.lights;if(Qt===!0&&(re===!0||w!==nt)){let Ce=w===nt&&Q.id===Z;te.setState(Q,w,Ce)}let ve=!1;Q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==fn.state.version||Ht.outputColorSpace!==Nt||j.isBatchedMesh&&Ht.batching===!1||!j.isBatchedMesh&&Ht.batching===!0||j.isBatchedMesh&&Ht.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ht.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ht.instancing===!1||!j.isInstancedMesh&&Ht.instancing===!0||j.isSkinnedMesh&&Ht.skinning===!1||!j.isSkinnedMesh&&Ht.skinning===!0||j.isInstancedMesh&&Ht.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ht.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ht.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ht.instancingMorph===!1&&j.morphTexture!==null||Ht.envMap!==Jt||Q.fog===!0&&Ht.fog!==Bt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==te.numPlanes||Ht.numIntersection!==te.numIntersection)||Ht.vertexAlphas!==de||Ht.vertexTangents!==pe||Ht.morphTargets!==qt||Ht.morphNormals!==Te||Ht.morphColors!==Xe||Ht.toneMapping!==De||Ht.morphTargetsCount!==ln||!!Ht.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Ht.__version=Q.version);let dn=Ht.currentProgram;ve===!0&&(dn=Us(Q,k,j),$&&Q.isNodeMaterial&&$.onUpdateProgram(Q,dn,Ht));let Nn=!1,jn=!1,mi=!1,Ne=dn.getUniforms(),Ye=Ht.uniforms;if(y.useProgram(dn.program)&&(Nn=!0,jn=!0,mi=!0),Q.id!==Z&&(Z=Q.id,jn=!0),Ht.needsLights){let Ce=Dn(C.state.lightProbeGridArray,j);Ht.lightProbeGrid!==Ce&&(Ht.lightProbeGrid=Ce,jn=!0)}if(Nn||nt!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ne.setValue(H,"projectionMatrix",w.projectionMatrix),Ne.setValue(H,"viewMatrix",w.matrixWorldInverse);let gi=Ne.map.cameraPosition;gi!==void 0&&gi.setValue(H,se.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&Ne.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ne.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),nt!==w&&(nt=w,jn=!0,mi=!0)}if(Ht.needsLights&&(fn.state.sunShadowMap.length>0&&Ne.setValue(H,"sunShadowMap",fn.state.sunShadowMap,ct),fn.state.directionalShadowMap.length>0&&Ne.setValue(H,"directionalShadowMap",fn.state.directionalShadowMap,ct),fn.state.spotShadowMap.length>0&&Ne.setValue(H,"spotShadowMap",fn.state.spotShadowMap,ct),fn.state.pointShadowMap.length>0&&Ne.setValue(H,"pointShadowMap",fn.state.pointShadowMap,ct)),j.isSkinnedMesh){Ne.setOptional(H,j,"bindMatrix"),Ne.setOptional(H,j,"bindMatrixInverse");let Ce=j.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Ne.setValue(H,"boneTexture",Ce.boneTexture,ct))}j.isBatchedMesh&&(Ne.setOptional(H,j,"batchingTexture"),Ne.setValue(H,"batchingTexture",j._matricesTexture,ct),Ne.setOptional(H,j,"batchingIdTexture"),Ne.setValue(H,"batchingIdTexture",j._indirectTexture,ct),Ne.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Ne.setValue(H,"batchingColorTexture",j._colorsTexture,ct));let Gn=it.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&G.update(j,it,dn),(jn||Ht.receiveShadow!==j.receiveShadow)&&(Ht.receiveShadow=j.receiveShadow,Ne.setValue(H,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&k.environment!==null&&(Ye.envMapIntensity.value=k.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=GM()),jn){if(Ne.setValue(H,"toneMappingExposure",U.toneMappingExposure),Ht.needsLights&&ys(Ye,mi),Bt&&Q.fog===!0&&Kt.refreshFogUniforms(Ye,Bt),Kt.refreshMaterialUniforms(Ye,Q,et,W,C.state.transmissionRenderTarget[w.id]),Ht.needsLights&&Ht.lightProbeGrid){let Ce=Ht.lightProbeGrid;Ye.probesSH.value=Ce.texture,Ye.probesMin.value.copy(Ce.boundingBox.min),Ye.probesMax.value.copy(Ce.boundingBox.max),Ye.probesResolution.value.copy(Ce.resolution)}pr.upload(H,qo(Ht),Ye,ct)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(pr.upload(H,qo(Ht),Ye,ct),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ne.setValue(H,"center",j.center),Ne.setValue(H,"modelViewMatrix",j.modelViewMatrix),Ne.setValue(H,"normalMatrix",j.normalMatrix),Ne.setValue(H,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){let Ce=Q.uniformsGroups;for(let gi=0,xi=Ce.length;gi<xi;gi++){let Rr=Ce[gi];_t.update(Rr,dn),_t.bind(Rr,dn)}}return dn}function ys(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function $o(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(w,k,it){let Q=tt.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),tt.get(w.texture).__webglTexture=k,tt.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:it,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let it=tt.get(w);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,it=0){st=w,K=k,q=it;let Q=null,j=!1,Bt=!1;if(w){let Nt=tt.get(w);if(Nt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,Nt.__webglFramebuffer),ot.copy(w.viewport),Ct.copy(w.scissor),pt=w.scissorTest,y.viewport(ot),y.scissor(Ct),y.setScissorTest(pt),Z=-1;return}else if(Nt.__webglFramebuffer===void 0)ct.setupRenderTarget(w);else if(Nt.__hasExternalTextures)ct.rebindTextures(w,tt.get(w.texture).__webglTexture,tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let de=w.depthTexture;if(Nt.__boundDepthTexture!==de){if(de!==null&&tt.has(de)&&(w.width!==de.image.width||w.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Bt=!0);let Jt=tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Jt[k])?Q=Jt[k][it]:Q=Jt[k],j=!0):w.samples>0&&ct.useMultisampledRTT(w)===!1?Q=tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Jt)?Q=Jt[it]:Q=Jt,ot.copy(w.viewport),Ct.copy(w.scissor),pt=w.scissorTest}else ot.copy(mt).multiplyScalar(et).floor(),Ct.copy(at).multiplyScalar(et).floor(),pt=ae;if(it!==0&&(Q=z),y.bindFramebuffer(H.FRAMEBUFFER,Q)&&y.drawBuffers(w,Q),y.viewport(ot),y.scissor(Ct),y.setScissorTest(pt),j){let Nt=tt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,it)}else if(Bt){let Nt=k;for(let Wt=0;Wt<w.textures.length;Wt++){let Jt=tt.get(w.textures[Wt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Wt,Jt.__webglTexture,it,Nt)}}else if(w!==null&&it!==0){let Nt=tt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,it)}Z=-1};function Zo(w){let k=tt.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=F.textureFormatReadable(w.format),k.__typeReadable=F.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,it,Q,j,Bt,Ot,Nt=0){if(!(w&&w.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(Wt=Wt[Ot]),Wt){y.bindFramebuffer(H.FRAMEBUFFER,Wt);try{let Jt=w.textures[Nt],de=Jt.format,pe=Jt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);let qt=Zo(Jt);if(qt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Q&&it>=0&&it<=w.height-j&&H.readPixels(k,it,Q,j,Pt.convert(de),Pt.convert(pe),Bt)}finally{let Jt=st!==null?tt.get(st).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(w,k,it,Q,j,Bt,Ot,Nt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(Wt=Wt[Ot]),Wt)if(k>=0&&k<=w.width-Q&&it>=0&&it<=w.height-j){y.bindFramebuffer(H.FRAMEBUFFER,Wt);let Jt=w.textures[Nt],de=Jt.format,pe=Jt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);let qt=Zo(Jt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Te),H.bufferData(H.PIXEL_PACK_BUFFER,Bt.byteLength,H.STREAM_READ),H.readPixels(k,it,Q,j,Pt.convert(de),Pt.convert(pe),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Xe=st!==null?tt.get(st).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Xe);let De=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await gp(H,De,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Te),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Bt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Te),H.deleteSync(De),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,it=0){let Q=Math.pow(2,-it),j=Math.floor(w.image.width*Q),Bt=Math.floor(w.image.height*Q),Ot=k!==null?k.x:0,Nt=k!==null?k.y:0;ct.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Ot,Nt,j,Bt),y.unbindTexture()},this.copyTextureToTexture=function(w,k,it=null,Q=null,j=0,Bt=0){let Ot,Nt,Wt,Jt,de,pe,qt,Te,Xe,De=w.isCompressedTexture?w.mipmaps[Bt]:w.image;if(it!==null)Ot=it.max.x-it.min.x,Nt=it.max.y-it.min.y,Wt=it.isBox3?it.max.z-it.min.z:1,Jt=it.min.x,de=it.min.y,pe=it.isBox3?it.min.z:0;else{let Ye=Math.pow(2,-j);Ot=Math.floor(De.width*Ye),Nt=Math.floor(De.height*Ye),w.isDataArrayTexture?Wt=De.depth:w.isData3DTexture?Wt=Math.floor(De.depth*Ye):Wt=1,Jt=0,de=0,pe=0}Q!==null?(qt=Q.x,Te=Q.y,Xe=Q.z):(qt=0,Te=0,Xe=0);let Ae=Pt.convert(k.format),ln=Pt.convert(k.type),Ht;k.isData3DTexture?(ct.setTexture3D(k,0),Ht=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ct.setTexture2DArray(k,0),Ht=H.TEXTURE_2D_ARRAY):(ct.setTexture2D(k,0),Ht=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let fn=y.getParameter(H.UNPACK_ROW_LENGTH),ve=y.getParameter(H.UNPACK_IMAGE_HEIGHT),dn=y.getParameter(H.UNPACK_SKIP_PIXELS),Nn=y.getParameter(H.UNPACK_SKIP_ROWS),jn=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,De.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,De.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Jt),y.pixelStorei(H.UNPACK_SKIP_ROWS,de),y.pixelStorei(H.UNPACK_SKIP_IMAGES,pe);let mi=w.isDataArrayTexture||w.isData3DTexture,Ne=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Ye=tt.get(w),Gn=tt.get(k),Ce=tt.get(Ye.__renderTarget),gi=tt.get(Gn.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,Ce.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let xi=0;xi<Wt;xi++)mi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(w).__webglTexture,j,pe+xi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(k).__webglTexture,Bt,Xe+xi)),H.blitFramebuffer(Jt,de,Ot,Nt,qt,Te,Ot,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||tt.has(w)){let Ye=tt.get(w),Gn=tt.get(k);y.bindFramebuffer(H.READ_FRAMEBUFFER,O),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,V);for(let Ce=0;Ce<Wt;Ce++)mi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.__webglTexture,j,pe+Ce):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ye.__webglTexture,j),Ne?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gn.__webglTexture,Bt,Xe+Ce):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gn.__webglTexture,Bt),j!==0?H.blitFramebuffer(Jt,de,Ot,Nt,qt,Te,Ot,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):Ne?H.copyTexSubImage3D(Ht,Bt,qt,Te,Xe+Ce,Jt,de,Ot,Nt):H.copyTexSubImage2D(Ht,Bt,qt,Te,Jt,de,Ot,Nt);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ne?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Ht,Bt,qt,Te,Xe,Ot,Nt,Wt,Ae,ln,De.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Ht,Bt,qt,Te,Xe,Ot,Nt,Wt,Ae,De.data):H.texSubImage3D(Ht,Bt,qt,Te,Xe,Ot,Nt,Wt,Ae,ln,De):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Bt,qt,Te,Ot,Nt,Ae,ln,De.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Bt,qt,Te,De.width,De.height,Ae,De.data):H.texSubImage2D(H.TEXTURE_2D,Bt,qt,Te,Ot,Nt,Ae,ln,De);y.pixelStorei(H.UNPACK_ROW_LENGTH,fn),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ve),y.pixelStorei(H.UNPACK_SKIP_PIXELS,dn),y.pixelStorei(H.UNPACK_SKIP_ROWS,Nn),y.pixelStorei(H.UNPACK_SKIP_IMAGES,jn),Bt===0&&k.generateMipmaps&&H.generateMipmap(Ht),y.unbindTexture()},this.initRenderTarget=function(w){tt.get(w).__webglFramebuffer===void 0&&ct.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){K=0,q=0,st=null,y.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var WM=["top","side","bottom"],XM={slab_bottom:1,slab_top:1,stairs:1},Kp=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function qM(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],Kp[n.facing|0]]:null}function jp(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let A of t){if(!A||typeof A.id!="string")throw new Error("block without id");if(!Number.isInteger(A.n)||A.n<0||A.n>255)throw new Error("bad n for "+A.id);if(i[A.n])throw new Error("duplicate n "+A.n+" ("+A.id+")");if(s[A.id])throw new Error("duplicate id "+A.id);let U=A.colors||{},B=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},A);if(B.placeable=B.n!==0&&!B.liquid,B.colors={top:U.top||"#888888",side:U.side||U.top||"#888888",bottom:U.bottom||U.top||"#888888"},B.opaque=B.solid&&!B.transparent&&!B.cutout&&!XM[B.shape],B.tile={},B.tileOf&&s[B.tileOf])B.tile=Object.assign({},s[B.tileOf].tile);else if(B.n!==0){let $={};for(let z of WM){let O=B.colors[z]+"|"+(B.pattern==="grass"||B.pattern==="log"||B.pattern==="lamp"||B.pattern==="table"||B.pattern==="stele"||B.pattern==="torch"||B.pattern==="bed"||B.pattern==="snow"||B.pattern==="lantern"||B.pattern==="bookshelf"||B.pattern==="hay"||B.pattern==="barrel"||B.pattern==="chest"||B.pattern==="farmland"?z:"");$[O]===void 0&&($[O]=r.length,r.push({block:B.id,face:z,color:B.colors[z],pattern:B.pattern,accent:B.accent||null,top:B.colors.top})),B.tile[z]=$[O]}}i[B.n]=B,s[B.id]=B}if(!s.air)throw new Error("registry needs air");for(let A of e){if(s[A.id])throw new Error("duplicate id "+A.id);s[A.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},A)}for(let A in s){let U=s[A].drops;if(U&&U!=="self"&&!s[U])throw new Error(A+" drops unknown "+U)}let o=A=>(typeof A=="number"?i[A]:s[A])||null,a=new Uint8Array(256),c=new Uint8Array(256),l=new Uint8Array(256),p=new Uint8Array(256),d=new Uint8Array(256),m=new Uint8Array(256),f={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8},_=new Uint8Array(256),v=new Array(256).fill(null),g=new Uint8Array(256),x=new Uint8Array(256),T=new Uint8Array(256),L=new Uint8Array(256),E=new Uint8Array(256),S=new Int16Array(256).fill(-1),C=new Int16Array(256).fill(-1),N=new Int16Array(256).fill(-1);i.forEach((A,U)=>{A&&(g[U]=A.solid?1:0,x[U]=A.opaque?1:0,T[U]=A.transparent?1:0,L[U]=A.emissive?1:0,E[U]=A.liquid?1:0,a[U]=A.light!=null?A.light:A.emissive?15:0,c[U]=A.liquid?2:0,l[U]=f[A.shape]||0,p[U]=A.cutout?1:0,d[U]=A.climbable?1:0,m[U]=A.plant?1:0,_[U]=A.facing|0,A.solid&&(v[U]=qM(A)),U&&(S[U]=A.tile.top,C[U]=A.tile.side,N[U]=A.tile.bottom))});let b=(n&&n.blueprints||[]).map(A=>Object.assign({kind:"blueprint"},A));return{blocks:i.filter(Boolean),items:e.map(A=>s[A.id]),blueprints:b,tiles:r,get:o,toolOf:A=>{let U=A&&s[A];return U&&U.kind==="item"&&U.tool&&typeof U.tool=="object"?U.tool:null},num:A=>{let U=s[A];if(!U||U.kind!=="block")throw new Error("no block "+A);return U.n},name:A=>{let U=o(A);return U?U.name_zh:String(A)},maxStack:A=>{let U=s[A];return U?U.maxStack:64},dropOf:A=>{let U=i[A];return!U||!U.drops?null:U.drops==="self"?U.id:U.drops},breakTime:A=>{let U=i[A];return!U||U.hardness<0?1/0:.25+U.hardness*.55},flat:{solid:g,opaque:x,trans:T,emit:L,liquid:E,tileTop:S,tileSide:C,tileBottom:N,lightEmit:a,attn:c,shape:l,cutout:p,climb:d,plant:m,facing:_,boxes:v}}}var Gi=n=>Math.floor(n/16);var xe=(n,t,e)=>(t*16+e)*16+n;var Ii=(n,t)=>n+","+t,Qp=n=>n.split(",").map(Number);function gu(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Gi(n),s=Gi(e);return{cx:i,cz:s,i:xe(n-i*16,t,e-s*16)}}function tm(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function zn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var gr=(n,t,e)=>zn(n,t,0,e);function YM(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var xu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],$M=.5*(Math.sqrt(3)-1),So=(3-Math.sqrt(3))/6;function Pi(n){let t=YM(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*$M,a=Math.floor(s+o),c=Math.floor(r+o),l=(a+c)*So,p=s-(a-l),d=r-(c-l),m=p>d?1:0,f=1-m,_=p-m+So,v=d-f+So,g=p-1+2*So,x=d-1+2*So,T=a&255,L=c&255,E=0,S,C;return S=.5-p*p-d*d,S>0&&(C=xu[i[T+i[L]]&7],S*=S,E+=S*S*(C[0]*p+C[1]*d)),S=.5-_*_-v*v,S>0&&(C=xu[i[T+m+i[L+f]]&7],S*=S,E+=S*S*(C[0]*_+C[1]*v)),S=.5-g*g-x*x,S>0&&(C=xu[i[T+1+i[L+1]]&7],S*=S,E+=S*S*(C[0]*g+C[1]*x)),70*E}}function Wi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let c=0;c<i;c++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function _u(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),c=t(e-r),l=t(i-o),p=t(s-a),d=(f,_,v)=>zn(n,r+f,o+_,a+v),m=(f,_,v)=>f+(_-f)*v;return m(m(m(d(0,0,0),d(1,0,0),c),m(d(0,1,0),d(1,1,0),c),l),m(m(d(0,0,1),d(1,0,1),c),m(d(0,1,1),d(1,1,1),c),l),p)}}var xr=160,ci=18,yu=[[0,1],[-1,0],[0,-1],[1,0]];function em(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var ZM=(n,t,e)=>e&1?[t,n]:[n,t];function nm(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(c,l){let p=c+","+l;if(i.has(p))return i.get(p);let d=null,m=f=>zn(n+909,c,f,l);if(m(0)<.45&&e&&e.houses&&e.houses.length){let f=Math.floor((c+.2+m(1)*.6)*xr),_=Math.floor((l+.2+m(2)*.6)*xr),v=t.biomeOf(f,_),g=t.height(f,_),x=(v==="plains"||v==="desert")&&Math.hypot(f,_)>110;if(x&&g>s+1)for(let T=0;T<16&&x;T++)for(let L of[7,14]){let E=t.height(f+Math.round(Math.cos(T*.39)*L),_+Math.round(Math.sin(T*.39)*L));(Math.abs(E-g)>3||E<=s)&&(x=!1)}else x=!1;if(x){let T=[],L=[],E=3+Math.floor(m(3)*4),S=(C,N,b,A)=>{let U=r[C];if(!U)return null;let[B,$]=ZM(U.size[0],U.size[2],A),z={tpl:C,rot:A,x0:N-(B>>1),z0:b-($>>1),y:g,w:B,d:$,h:U.size[1]};return T.push(z),z};S("well",f,_,0),S("lamp_post",f+3,_+3,0),S("lamp_post",f-3,_-3,0);for(let C=0;C<E;C++){let N=C/E*Math.PI*2+m(10+C)*.5,b=9+m(20+C)*3,A=f+Math.round(Math.cos(N)*b),U=_+Math.round(Math.sin(N)*b),B=f-A,$=_-U,z=0,O=-1/0;yu.forEach((ot,Ct)=>{let pt=ot[0]*B+ot[1]*$;pt>O&&(O=pt,z=Ct)});let V=e.houses[Math.floor(m(30+C)*e.houses.length)],K=S(V,A,U,z);if(!K)continue;let q=r[V],[st,Z]=em(q.door[0],q.door[1],q.size[0],q.size[2],z),nt={x:K.x0+st+yu[z][0],z:K.z0+Z+yu[z][1]};L.push({ax:f,az:_,bx:nt.x,bz:nt.z})}d={id:p,x:f,z:_,y:g,biome:v,structures:T,paths:L,villagers:2+Math.floor(m(4)*3)}}}return i.set(p,d),d}function a(c,l,p,d){let m=[];for(let f=Math.floor((l-ci)/xr);f<=Math.floor((d+ci)/xr);f++)for(let _=Math.floor((c-ci)/xr);_<=Math.floor((p+ci)/xr);_++){let v=o(_,f);v&&v.x+ci>=c&&v.x-ci<=p&&v.z+ci>=l&&v.z-ci<=d&&m.push(v)}return m}return{plan:o,around:a,chunk:(c,l)=>a(c*16,l*16,c*16+16-1,l*16+16-1)}}function im(n,t,e,i,s,r,o){let a=t*16,c=e*16,l=(_,v)=>_>=a&&_<a+16&&v>=c&&v<c+16,p=i.biome==="desert",d=p?s.desert||{}:{},m=_=>{let v=s.palette[_];if(!v)return null;let g=d[v]||v;return r.byId(g)},f=p?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let v=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let g=0;g<=v;g++){let x=Math.round(_.ax+(_.bx-_.ax)*g/v),T=Math.round(_.az+(_.bz-_.az)*g/v);if(!l(x,T))continue;let L=o.height(x,T),E=xe(x-a,L,T-c);n[E]&&n[E]!==r.water&&(n[E]=r.path);for(let S=L+1;S<Math.min(64,L+4);S++){let C=xe(x-a,S,T-c);(n[C]===r.leaves||n[C]===r.log||S===L+1)&&(n[C]=0)}}}for(let _ of i.structures){let v=s.templates[_.tpl];if(!v)continue;let[g,,x]=v.size;for(let T=0;T<x;T++)for(let L=0;L<g;L++){let[E,S]=em(L,T,g,x,_.rot),C=_.x0+E,N=_.z0+S;if(!l(C,N))continue;let b=C-a,A=N-c;for(let U=_.y-1;U>Math.max(0,_.y-8);U--){let B=xe(b,U,A);if(n[B]&&n[B]!==r.water)break;n[B]=f}for(let U=_.y+v.size[1];U<Math.min(64,_.y+v.size[1]+3);U++)n[xe(b,U,A)]=0;v.layers.forEach((U,B)=>{let $=(U[T]||"")[L];if(!$||$===" ")return;let z=_.y+B;z>=64||(n[xe(b,z,A)]=$==="."?0:m($)||0)})}}}var Pn=24;var rm={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},sm=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],_r=112;function om(n,t,e){let i=z=>t.num(z),s=z=>{try{return i(z)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Pi(n),c=Pi(n+101),l=Pi(n+202),p=Pi(n+303),d=Pi(n+404),m=_u(n+505),f=_u(n+606);function _(z,O){let V=Wi(a,z/190,O/190,3),K=Wi(c,z/55,O/55,4),q=Math.max(0,Wi(l,z/130,O/130,2)-.1),st=27+V*9+K*6+q*q*75;return Math.max(4,Math.min(54,Math.floor(st)))}let v=Pi(n+808);function g(z,O){let V=_(z,O),K=Wi(v,z/900,O/900,2),q=Math.min(1,Math.max(0,(Math.hypot(z,O)-240)/80)),st=Math.min(1,Math.max(0,(-.18-K)/.17)),Z=st*st*(3-2*st)*q;return Z>0&&(V=Math.round(V*(1-Z)+(Pn-14)*Z)),V<Pn-1?Math.max(3,Math.floor(Pn-1-(Pn-1-V)*1.8)):V}function x(z,O){let V=(gr(n+3,z,O)-.5)*.025;return{t:Wi(p,z/420,O/420,2)+V,u:Wi(d,z/380,O/380,2)-V}}function T(z,O,V=g(z,O)){if(V<Pn-1)return"ocean";let{t:K,u:q}=x(z,O);return K<-.3?"snow":K>.28&&q<.05?"desert":q>.12?"forest":"plains"}let L=null;function E(){if(L)return L;let z=(O,V)=>{let K=g(O,V);return K>=Pn+2&&Math.abs(g(O+1,V)-K)<2&&Math.abs(g(O,V+1)-K)<2};for(let O=0;O<400;O+=2)for(let V=0;V<Math.max(1,O*2);V++){let K=V/Math.max(1,O*2)*Math.PI*2,q=Math.round(Math.cos(K)*O),st=Math.round(Math.sin(K)*O);if(z(q,st)&&z(q+3,st+2))return L={x:q+.5,y:g(q,st)+1,z:st+.5,stele:{x:q+3,y:g(q+3,st+2)+1,z:st+2},portal:{x:q-3,y:Math.max(Pn+1,g(q-3,st+2))+1,z:st+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function S(z,O){let V=[],K=z*16,q=O*16,st=Math.floor((K-80)/_r),Z=Math.floor((K+16+80)/_r),nt=Math.floor((q-80)/_r),ot=Math.floor((q+16+80)/_r);for(let Ct=nt;Ct<=ot;Ct++)for(let pt=st;pt<=Z;pt++){let wt=xt=>zn(n+707,pt,xt,Ct);if(wt(0)>.25)continue;let gt=(pt+wt(1))*_r,yt=(Ct+wt(2))*_r,W=wt(3)*Math.PI,et=40+wt(4)*30;V.push({ax:gt-Math.cos(W)*et/2,az:yt-Math.sin(W)*et/2,dx:Math.cos(W)*et,dz:Math.sin(W)*et,len:et,floor:7+Math.floor(wt(5)*6),w:1.6+wt(6)*1.2})}return V}function C(z,O){let V=new Uint8Array(16384),K=z*16,q=O*16,st=18,Z=new Int16Array(st*st);for(let gt=-1;gt<=16;gt++)for(let yt=-1;yt<=16;yt++)Z[(gt+1)*st+yt+1]=g(K+yt,q+gt);let nt=E(),ot=new Array(256);for(let gt=0;gt<16;gt++)for(let yt=0;yt<16;yt++){let W=K+yt,et=q+gt,xt=Z[(gt+1)*st+yt+1],kt=Math.max(Math.abs(Z[(gt+1)*st+yt]-xt),Math.abs(Z[(gt+1)*st+yt+2]-xt),Math.abs(Z[gt*st+yt+1]-xt),Math.abs(Z[(gt+2)*st+yt+1]-xt))>=3,mt=ot[gt*16+yt]=T(W,et,xt),at=xt<=Pn+1,ae,Dt;mt==="ocean"||at||mt==="desert"?(ae=r.sand,Dt=r.sand):kt?(ae=r.stone,Dt=r.stone):mt==="snow"?(ae=r.snow,Dt=r.dirt):(ae=r.grass,Dt=r.dirt);for(let Qt=0;Qt<=xt;Qt++){let re;if(Qt===0?re=r.bedrock:Qt===xt?re=ae:Qt>=xt-3?re=Dt:mt==="desert"&&Qt>=xt-7?re=r.sandstone:re=r.stone,re===r.stone&&kt&&Qt>=xt-4){let Zt=zn(n,W,Qt,et);Zt<.06?re=r.coal:Zt<.09?re=r.iron:Zt<.096&&(re=r.ruby)}V[xe(yt,Qt,gt)]=re}for(let Qt=xt+1;Qt<=Pn;Qt++)V[xe(yt,Qt,gt)]=Qt===Pn&&mt==="snow"?r.ice:r.water}N(V,z,O,Z,st);for(let gt=0;gt<sm.length;gt++){let yt=sm[gt],W=r[yt.ore];for(let et=0;et<yt.count;et++){let xt=ae=>zn(n+31*gt+ae,z*977+et,ae,O*131+et);if(xt(9)>yt.chance)continue;let kt=Math.floor(xt(1)*16),mt=yt.y0+Math.floor(xt(2)*(yt.y1-yt.y0)),at=Math.floor(xt(3)*16);for(let ae=0;ae<yt.size;ae++){kt>=0&&kt<16&&at>=0&&at<16&&mt>0&&mt<64&&V[xe(kt,mt,at)]===r.stone&&(V[xe(kt,mt,at)]=W);let Dt=Math.floor(xt(10+ae)*6);Dt===0?kt++:Dt===1?kt--:Dt===2?mt++:Dt===3?mt--:Dt===4?at++:at--}}}let Ct=e?$.chunk(z,O):[];b(V,z,O,Z,st,ot,nt,Ct);for(let gt of Ct)im(V,z,O,gt,e,r,B);let pt=nt.stele;if(Math.floor(pt.x/16)===z&&Math.floor(pt.z/16)===O){let gt=pt.x-K,yt=pt.z-q;V[xe(gt,pt.y,yt)]=r.stele,V[xe(gt,pt.y+1,yt)]=r.stele}let wt=nt.portal;if(r.portal&&wt&&Math.floor(wt.x/16)===z&&Math.floor(wt.z/16)===O){let gt=wt.x-K,yt=wt.z-q;for(let W=Math.max(1,wt.y-3);W<wt.y;W++)(!V[xe(gt,W,yt)]||V[xe(gt,W,yt)]===r.water)&&(V[xe(gt,W,yt)]=r.stone);V[xe(gt,wt.y,yt)]=r.portal,V[xe(gt,wt.y+1,yt)]=r.portal}return V}function N(z,O,V,K,q){let st=O*16,Z=V*16,nt=4,ot=16/nt+1,Ct=64/nt+1,pt=new Float32Array(ot*ot*Ct);for(let yt=0;yt<Ct;yt++)for(let W=0;W<ot;W++)for(let et=0;et<ot;et++){let xt=st+et*nt,kt=yt*nt,mt=Z+W*nt,at=m(xt/22,kt/14,mt/22)-.5,ae=f(xt/22,kt/14,mt/22)-.5;pt[(yt*ot+W)*ot+et]=at*at+ae*ae}let wt=(yt,W,et)=>pt[(W*ot+et)*ot+yt],gt=S(O,V);for(let yt=0;yt<16;yt++)for(let W=0;W<16;W++){let et=K[(yt+1)*q+W+1],xt=et<=Pn+1,kt=xt?et-5:et,mt=W>>2,at=yt>>2,ae=(W&3)/nt,Dt=(yt&3)/nt;for(let Zt=3;Zt<=kt;Zt++){let se=Zt>>2,ke=(Zt&3)/nt,We=wt(mt,se,at)+(wt(mt+1,se,at)-wt(mt,se,at))*ae,we=wt(mt,se,at+1)+(wt(mt+1,se,at+1)-wt(mt,se,at+1))*ae,Ie=wt(mt,se+1,at)+(wt(mt+1,se+1,at)-wt(mt,se+1,at))*ae,H=wt(mt,se+1,at+1)+(wt(mt+1,se+1,at+1)-wt(mt,se+1,at+1))*ae;if((We+(we-We)*Dt)*(1-ke)+(Ie+(H-Ie)*Dt)*ke<.008){let me=xe(W,Zt,yt);z[me]!==r.bedrock&&z[me]!==r.water&&(z[me]=0)}}if(!gt.length||xt)continue;let Qt=st+W,re=Z+yt;for(let Zt of gt){let se=Math.max(0,Math.min(1,((Qt-Zt.ax)*Zt.dx+(re-Zt.az)*Zt.dz)/(Zt.len*Zt.len))),ke=Zt.ax+Zt.dx*se,We=Zt.az+Zt.dz*se,we=Math.hypot(Qt-ke,re-We),Ie=Zt.w*Math.sin(Math.PI*se);if(we<Ie)for(let H=Zt.floor+Math.floor(we*2);H<=et;H++){let Ve=xe(W,H,yt);z[Ve]!==r.water&&(z[Ve]=0)}}}}function b(z,O,V,K,q,st,Z,nt){let ot=O*16,Ct=V*16;for(let pt=0;pt<16;pt++)for(let wt=0;wt<16;wt++){let gt=ot+wt,yt=Ct+pt,W=K[(pt+1)*q+wt+1],et=st[pt*16+wt];if(W+1>=64||Math.hypot(gt-Z.x,yt-Z.z)<48)continue;let xt=z[xe(wt,W,pt)],kt=xe(wt,W+1,pt);if(z[kt])continue;let mt=gr(n+11,gt,yt),at=gr(n+13,gt,yt);xt===r.grass?mt<.012&&o.length?z[kt]=o[Math.floor(at*o.length)]:mt<(et==="plains"?.1:.05)&&r.tallgrass?z[kt]=r.tallgrass:et==="forest"&&mt<.08&&r.fern?z[kt]=r.fern:et==="forest"&&mt<.084&&r.mushR&&(z[kt]=at<.5?r.mushR:r.mushB):xt===r.sand&&et==="desert"&&W>Pn+1&&mt<.008&&r.deadbush&&(z[kt]=r.deadbush)}for(let pt=2;pt<14;pt++)for(let wt=2;wt<14;wt++){let gt=ot+wt,yt=Ct+pt,W=K[(pt+1)*q+wt+1],et=st[pt*16+wt],xt=z[xe(wt,W,pt)];if(Math.abs(gt-Z.x)<7&&Math.abs(yt-Z.z)<7||nt.some(ae=>Math.abs(gt-ae.x)<ci+2&&Math.abs(yt-ae.z)<ci+2))continue;let kt=gr(n+7,gt,yt),mt=gr(n+9,gt,yt);if(et==="desert"&&xt===r.sand&&W>Pn+1&&kt<.008&&r.cactus){let ae=1+Math.floor(mt*3);for(let Dt=W+1;Dt<=W+ae&&Dt<64;Dt++)z[xe(wt,Dt,pt)]=r.cactus;continue}if(et==="snow"&&xt===r.snow&&kt<.02){U(z,wt,pt,W,5+Math.floor(mt*3));continue}let at=et==="forest"?.035:et==="plains"?.003:0;xt===r.grass&&kt<at&&A(z,wt,pt,W,gt,yt,4+Math.floor(mt*2))}}function A(z,O,V,K,q,st,Z){let nt=K+Z;if(!(nt+2>=64)){for(let ot=nt-2;ot<=nt+1;ot++){let Ct=ot>=nt?1:2;for(let pt=-Ct;pt<=Ct;pt++)for(let wt=-Ct;wt<=Ct;wt++){if(Ct===2&&Math.abs(wt)===2&&Math.abs(pt)===2&&zn(n,q+wt,ot,st+pt)<.6)continue;let gt=xe(O+wt,ot,V+pt);z[gt]===r.air&&(z[gt]=r.leaves)}}z[xe(O,K,V)]=r.dirt;for(let ot=K+1;ot<=nt;ot++)z[xe(O,ot,V)]=r.log}}function U(z,O,V,K,q){let st=K+q;if(!(st+2>=64)){for(let Z=K+2;Z<=st+1;Z++){let nt=st+1-Z,ot=nt>=4?2:nt>=1?1:0;for(let Ct=-ot;Ct<=ot;Ct++)for(let pt=-ot;pt<=ot;pt++){if(ot===2&&Math.abs(pt)+Math.abs(Ct)>3)continue;let wt=xe(O+pt,Z,V+Ct);z[wt]===r.air&&(z[wt]=r.sleaves)}}z[xe(O,K,V)]=r.dirt;for(let Z=K+1;Z<=st;Z++)z[xe(O,Z,V)]=r.slog}}let B={height:g,baseHeight:_,biomeOf:T,climate:x,genChunk:C,findSpawn:E,SEA:Pn},$=nm(n,B,e);return B.villages=$,B}function Mu(n,t,e,i,s,r,o){let a=i/2,c=n-a,l=n+a,p=t,d=t+s,m=e-a,f=e+a,_=Math.floor(c),v=Math.floor(l-1e-6),g=Math.floor(p),x=Math.floor(d-1e-6),T=Math.floor(m),L=Math.floor(f-1e-6),E=!1;for(let S=g;S<=x;S++)for(let C=T;C<=L;C++)for(let N=_;N<=v;N++){let b=r(N,S,C);if(!b)continue;let A=b===!0?JM:b;for(let U of A){let B=N+U[0],$=S+U[1],z=C+U[2],O=N+U[3],V=S+U[4],K=C+U[5];if(!(O<=c+1e-6||B>=l-1e-6||V<=p+1e-6||$>=d-1e-6||K<=m+1e-6||z>=f-1e-6)){if(!o)return!0;E=!0,o.push([B,$,z,O,V,K])}}}return E}var JM=[[0,0,0,1,1,1]],wo=(n,t,e,i,s,r)=>Mu(n,t,e,i,s,r,null),am=(n,t,e=.6,i=1.8)=>!wo(n.x,n.y,n.z,e,i,t);function lc(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,c=r/2,l=!1,p=0,d=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,m=Math.max(1,Math.ceil(d/.3)),f=e/m,_=[];for(let v=0;v<m;v++){let g=t.y*f;g&&(_.length=0,Mu(n.x,n.y+g,n.z,r,o,i,_)?(g<0?(n.y=Math.max(..._.map(x=>x[4])),l=!0):n.y=Math.min(..._.map(x=>x[1]))-o,t.y=0):n.y+=g);for(let x of["x","z"]){let T=t[x]*f;if(!T)continue;let L={x:n.x,y:n.y,z:n.z};if(L[x]+=T,_.length=0,!Mu(L.x,L.y,L.z,r,o,i,_)){n[x]=L[x];continue}if(a&&(l||s.grounded)){let S=Math.max(..._.map(C=>C[4]));if(S-n.y>0&&S-n.y<=1.01&&!wo(L.x,S,L.z,r,o,i)&&!wo(n.x,S,n.z,r,o,i)){p+=S-n.y,n.y=S,n[x]=L[x];continue}}let E=x==="x"?0:2;n[x]=T>0?Math.min(..._.map(S=>S[E]))-c-1e-4:Math.max(..._.map(S=>S[E+3]))+c+1e-4,wo(n.x,n.y,n.z,r,o,i)&&(n[x]=L[x]-T),t[x]=0}}return!l&&t.y<=0&&wo(n.x,n.y-.02,n.z,r,o,i)&&(l=!0),{onGround:l,stepped:p}}function KM(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],c=null;for(let l of r){let p=[e+l[0],i+l[1],s+l[2]],d=[e+l[3],i+l[4],s+l[5]],m=0,f=1/0,_=-1,v=!0;for(let g=0;g<3&&v;g++){if(Math.abs(a[g])<1e-12){(o[g]<p[g]||o[g]>d[g])&&(v=!1);continue}let x=(p[g]-o[g])/a[g],T=(d[g]-o[g])/a[g];x>T&&([x,T]=[T,x]),x>m&&(m=x,_=g),T<f&&(f=T),m>f&&(v=!1)}if(v&&(!c||m<c.t)){let g=[0,0,0];_>=0&&(g[_]=-Math.sign(a[_])),c={t:m,face:_>=0?g:null}}}return c}function yr(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),c=Math.floor(n.z),l=Math.sign(t.x),p=Math.sign(t.y),d=Math.sign(t.z),m=l?Math.abs(1/t.x):1/0,f=p?Math.abs(1/t.y):1/0,_=d?Math.abs(1/t.z):1/0,v=l?(l>0?o+1-n.x:n.x-o)*m:1/0,g=p?(p>0?a+1-n.y:n.y-a)*f:1/0,x=d?(d>0?c+1-n.z:n.z-c)*_:1/0,T=[0,0,0],L=0;for(;L<=e;){let E=i(o,a,c);if(E&&s(E)){let S=r&&r(E);if(!S)return{x:o,y:a,z:c,n:E,face:T,dist:L};let C=KM(n,t,o,a,c,S);if(C&&C.t<=e)return{x:o,y:a,z:c,n:E,face:C.face||T,dist:C.t}}v<g&&v<x?(o+=l,L=v,v+=m,T=[-l,0,0]):g<x?(a+=p,L=g,g+=f,T=[0,-p,0]):(c+=d,L=x,x+=_,T=[0,0,-d])}return null}var Tu={};_i(Tu,{ACC:()=>hm,BOOST:()=>bu,BRAKE:()=>fm,CONN:()=>hi,DECAY:()=>dm,DIR:()=>Eo,FRIC:()=>um,MAX:()=>Ao,OPP:()=>Mr,SLOPE_G:()=>Su,UP:()=>Li,blockId:()=>To,connect:()=>hc,isStraight:()=>wu,linked:()=>pm,mount:()=>Au,next:()=>Co,pos:()=>uc,shapeOf:()=>vr,step:()=>Eu});var hi={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Li={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},Eo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Mr={n:"s",s:"n",e:"w",w:"e"},jM=["ns","ew","ne","nw","se","sw"],lm={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},hm=3,Ao=6,bu=11,um=.8,fm=6,dm=1.5,Su=2.5,wu=n=>n==="ns"||n==="ew"||!!Li[n],To=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),cc=(n,t)=>hi[n].find(e=>e!==t);function vr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":jM.find(e=>hi[e].includes(n)&&hi[e].includes(t))||null}function Co(n,t,e,i,s,r){let[o,a]=Eo[s];for(let c of Li[r]===s?[1]:[0,-1]){let l=n(t+o,e+c,i+a);if(l&&hi[l.shape].includes(Mr[s])&&Li[l.shape]===Mr[s]==(c===-1))return{x:t+o,y:e+c,z:i+a,r:l}}return null}function pm(n,t,e,i){let s=n(t,e,i);return s?hi[s.shape].filter(r=>Co(n,t,e,i,r,s.shape)):[]}function cm(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===Mr[e]?"asc_"+e:null}return n.length===2?vr(n[0].d,n[1].d):vr(n[0].d)}function hc(n,t,e,i,s,r="n"){let o=[];for(let l of["n","e","s","w"]){let[p,d]=Eo[l],m=Mr[l];for(let f of[0,1,-1]){let _=t+p,v=e+f,g=i+d,x=n(_,v,g);if(!x)continue;if(hi[x.shape].includes(m)&&Li[x.shape]===m==(f===-1)){o.push({d:l,dy:f,pri:0});break}let T=pm(n,_,v,g);if(T.length>=2)continue;let L=null;if(f===-1?L=!T.length||T[0]===l?"asc_"+m:null:Li[x.shape]&&T.includes(Li[x.shape])||(L=T.length?vr(T[0],m):vr(m)),L&&(!x.powered||wu(L))){o.push({d:l,dy:f,pri:1,ns:L,at:[_,v,g]});break}}}o.sort((l,p)=>l.pri-p.pri);let a=[];for(let l of o){if(a.length===2)break;let p=cm(a.concat([l]));!p||s&&!wu(p)||a.push(l)}return{shape:a.length?cm(a):vr(r),updates:a.filter(l=>l.pri===1).map(l=>[l.at[0],l.at[1],l.at[2],l.ns])}}function Au(n,t,e,i,s,r,o=()=>!1){let a=hi[n],c=p=>Eo[p][0]*s+Eo[p][1]*r+(o(p)?.01:0),l=c(a[0])>=c(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:l===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function Eu(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,hi[s.shape].includes(n.from)||(n.from=hi[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=cc(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,bu)),e>.1?n.v<Ao&&(n.v=Math.min(Ao,n.v+hm*t)):e<-.1?n.v=Math.max(0,n.v-fm*t):n.v=Math.max(0,n.v-um*t),n.v>Ao&&!s.powered&&(n.v=Math.max(Ao,n.v-dm*t)),Li[s.shape]&&(n.v+=(cc(s.shape,n.from)===Li[s.shape]?-Su:Su)*t,n.v<0&&(n.from=cc(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=cc(s.shape,n.from),o=Co(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=Mr[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,bu));else{n.s=1,n.v=0;break}}return n}function uc(n){let t=hi[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=lm[e],r=lm[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[c,l,p]=a<.5?[s,o,a*2]:[o,r,a*2-1],d=c[0]+(l[0]-c[0])*p,m=c[1]+(l[1]-c[1])*p,f=Li[n.shape],_=f?f==="n"?1-m:f==="s"?m:f==="e"?d:1-d:0,v=f?i===f?1:-1:0;return{x:n.x+d,y:n.y+_,z:n.z+m,yaw:Math.atan2(-(l[0]-c[0]),-(l[1]-c[1])),pitch:Math.atan2(v,1)*(f?1:0)}}var Lu={};_i(Lu,{WINDOW:()=>QM,create:()=>Cu,reel:()=>Iu,roll:()=>Pu,tick:()=>Ru});var QM=1.3,mm=n=>3+n()*6;function Cu(n=Math.random){return{phase:"wait",t:0,biteAt:mm(n),rnd:n}}function Ru(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=mm(n.rnd),"escape"):null}var Iu=n=>n&&n.phase==="bite"?"catch":"early";function Pu(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function gm(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function xm(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function _m(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var ym=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function vm(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function Mm(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[xe(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var bm=n=>btoa(String.fromCharCode.apply(null,n)),Sm=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var eb=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],fc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=eb(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,Sm(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=Mm(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[c,l]=Qp(r);for(let[p,d]of[...this.portals])Math.floor(d.x/16)===c&&Math.floor(d.z/16)===l&&this.portals.delete(p);for(let p=0;p<256;p++){let d=this.reg.get(a[p]);if(d&&(d.interact==="portal"||d.interact==="shadow_portal")){let m=c*16+p%16,f=l*16+Math.floor(p/16);this.portals.set(m+","+f,{x:m,z:f,name:d.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],c=o*4,l=.95+(o*2654435761>>>28)/16*.1;r.data[c]=a[0]*l,r.data[c+1]=a[1]*l,r.data[c+2]=a[2]*l,r.data[c+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,c=i-o/2/s,l=e+r/2/s,p=i+o/2/s;for(let d=Math.floor(c/16);d<=Math.floor(p/16);d++)for(let m=Math.floor(a/16);m<=Math.floor(l/16);m++){let f=this.tile(Ii(m,d));f&&t.drawImage(f,Math.round((m*16-a)*s),Math.round((d*16-c)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:c}}explored(t,e){return this.tops.has(Ii(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=bm(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function Du(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var Fu={};_i(Fu,{ARENA_R:()=>Ro,H0:()=>ui,LAIR:()=>fi,findFrame:()=>Uu,makeShadowTerrain:()=>Nu});var ui=22,fi={x:0,z:40},Ro=14;function Nu(n,t){let e=d=>t.num(d),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Pi(n+11),r=Pi(n+23),o=(d,m)=>d<m?1:d<m+8?1-(d-m)/8:0;function a(d,m){let f=ui+Wi(s,d/64,m/64,3)*10,_=Math.max(o(Math.hypot(d-.5,m-.5),9),o(Math.hypot(d-fi.x,m-fi.z),Ro+2));return f=f*(1-_)+ui*_,Math.max(6,Math.min(54,Math.round(f)))}let c=new Set;for(let d=0;d<8;d++)c.add(Math.round(fi.x+Math.cos(d*Math.PI/4)*Ro)+","+Math.round(fi.z+Math.sin(d*Math.PI/4)*Ro));function l(d,m){let f=new Uint8Array(16384),_=d*16,v=m*16;for(let g=0;g<16;g++)for(let x=0;x<16;x++){let T=_+x,L=v+g,E=a(T,L),S=Math.hypot(T-.5,L-.5),C=Math.hypot(T-fi.x,L-fi.z);for(let N=0;N<=E;N++){let b=N===0?i.bedrock:N===E?i.moss:i.stone;if(b===i.stone){let A=zn(n,T,N,L);N<16&&A<.014?b=i.ore:A>.995&&(b=i.vein)}f[xe(x,N,g)]=b}if(S>6&&Math.abs(r(T/30,L/30))<.035&&(f[xe(x,E,g)]=i.vein),C<Ro-1&&(f[xe(x,E,g)]=(Math.floor(T)+Math.floor(L))%2?i.bricks:i.stone),c.has(T+","+L)){for(let N=E+1;N<=E+4;N++)f[xe(x,N,g)]=i.bricks;f[xe(x,E+5,g)]=i.vein}if(L===0&&T>=-1&&T<=2)for(let N=ui+1;N<=ui+5;N++){let b=T>=0&&T<=1&&N>=ui+2&&N<=ui+4;f[xe(x,N,g)]=b?i.portal:i.frame}}return f}let p={x:1,y:ui+1,z:2.5,stele:{x:1,y:ui+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:l,findSpawn:()=>p,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function Uu(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let c=-4;c<=1;c++){let l=t+o[0]*a,p=i+o[1]*a,d=e+c,m=(v,g)=>[l+o[0]*v,d+g,p+o[1]*v],f=[];for(let v=0;v<2;v++)for(let g=0;g<3;g++)f.push(m(v,g));if(!f.every(v=>r(n(v[0],v[1],v[2]))))continue;let _=[];for(let v=0;v<3;v++)_.push(m(-1,v),m(2,v));for(let v=0;v<2;v++)_.push(m(v,-1),m(v,3));if(_.every(v=>n(v[0],v[1],v[2])===s)&&_.some(v=>v[0]===t&&v[1]===e&&v[2]===i))return f}return null}var Vu={};_i(Vu,{HOTBAR:()=>Ou,SIZE:()=>dc,add:()=>wn,canAdd:()=>Lo,count:()=>di,craft:()=>zu,craftable:()=>mc,createInventory:()=>Io,deserialize:()=>pc,moveBetween:()=>ku,moveSlot:()=>Bu,remove:()=>Po,serialize:()=>Do,takeFromSlot:()=>Jn});var dc=36,Ou=9;function Io(n=36){return{slots:new Array(n).fill(null)}}function wn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function di(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Po(n,t,e){if(di(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Jn(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Bu(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Lo(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return wn(s,t,e,i)===0}var Do=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function pc(n,t=36){let e=Io(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function mc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(di(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function zu(n,t,e=()=>64,i){let s=mc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Po(n,o,t.in[o]);return wn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function ku(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function nb(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var br=(n,t)=>n.owned.includes(t),wm=(n,t)=>n?t?2:1:0;function kn(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Ls(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function Am(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function Em(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&br(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Ls(n,e.price),n.owned.push(e.id),{ok:!0}):Lo(t,e.id,e.qty,i)?(Ls(n,e.price),wn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var Tm=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Cm(n){let t=nb(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function Im(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function Pm(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>kn(n,s),canSpend:s=>n.coins>=s,spend:async s=>Ls(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function Lm(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var Yu={};_i(Yu,{createStory:()=>Hu,currentMain:()=>Wu,dailyPicks:()=>Dm,dailyProgress:()=>qu,restartTutorial:()=>Gu,skipTutorial:()=>gc,tick:()=>Xu});function Hu(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function Dm(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var Gu=n=>{n.tut={step:0,base:null,done:!1}},gc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},Wu=(n,t)=>t.main[n.main]||null;function Xu(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=Dm(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(c=>c.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var qu=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var Uo=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],No=100,Nm={choice:25,typed:40},rb=5,$u=100;function Um(){return{phase:0,hp:No,retry:[],done:!1}}function Fm(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(No,n.hp+rb),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?Nm.typed:Nm.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<Uo.length-1?(n.phase++,n.hp=No,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var Zu=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function ab(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new Yn(n);return e.colorSpace=nn,e}function Om(){let n=new mn,t=[],e=(a,c)=>{let l=new Mn({color:a});return l.userData.base=new ce(a),l.userData.role=c,t.push(l),l},i=(a,c,l,p,d,m,f,_,v=n)=>{let g=new Oe(new Qe(a,c,l),e(p,d));return g.position.set(m,f,_),v.add(g),g},s=Zu[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new Oe(new Qe(1.15,.72,.02),new Mn({map:ab(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let c=new mn;return c.position.set(a*1,1.9,.2),n.add(c),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,c).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,c),c});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function Bm(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function zm(n,t){let e=Zu[Math.min(Zu.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function lb(){return new Map}function km(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Ju(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function cb(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function Vm(n){let t=lb();for(let e in n||{})t.set(e,cb(n[e]));return t}var xc=16;var $A=18;var qi=32;function Hm(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var je=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],bt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function hb(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function ee(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Xi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let c=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(c)*s*(.6+t()*.5),i+Math.sin(c)*s*(.6+t()*.5)])}ee(n,o)}var ub=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function fb(n,t){let e=je(t.color),i=Hm(hb(t.block+t.face)),s=qi;if(ub.has(t.pattern)){db(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=bt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?je(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=bt(e,1.12);for(let d=0;d<4;d++)Xi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=bt(e,.96);for(let d=0;d<4;d++)Xi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let d=je(t.top);n.fillStyle=bt(d);let m=[[0,0],[s,0]];for(let f=s;f>=0;f-=4)m.push([f,8+Math.round(i()*5)]);ee(n,m)}if(o==="stone"||o==="bedrock")for(let d=0;d<5;d++)n.fillStyle=bt(e,i()<.5?.9:1.08),Xi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let d=0;d<4;d++)n.fillStyle=bt(e,.92),Xi(n,i,i()*s,i()*s,5);n.fillStyle=bt(a);for(let d=0;d<5;d++)Xi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let d=0;d<26;d++)n.fillStyle=bt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let d=3;d<s;d+=7)n.fillStyle=bt(e,.82),n.fillRect(d,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=bt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let d=0;d<9;d++)n.fillStyle=bt(e,i()<.5?.78:1.15),Xi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.78),n.fillRect(0,d,s,1);n.fillStyle=bt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=bt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=bt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=bt([185,182,174]),ee(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=bt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",ee(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=bt(e,1.18,.72);for(let d=6;d<s;d+=10)n.fillRect(4+Math.floor(i()*10),d,10,2)}if(o==="gold"&&(n.fillStyle=bt(e,1.15),ee(n,[[0,0],[s,0],[0,s]]),n.fillStyle=bt(e,.9),ee(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=bt(je("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=bt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=bt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=bt(je("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=bt(je("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=bt(a),n.fillRect(14,0,4,4)):(n.fillStyle=bt(je(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=bt(a),n.fillRect(0,0,s,10),n.fillStyle=bt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=bt(je("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=bt(a),n.fillRect(0,0,9,14))),o==="wool")for(let d=0;d<7;d++)n.fillStyle=bt(e,i()<.5?.94:1.04),Xi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=bt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(a,1.3),ee(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=bt(je("#EFEBDD"),1,.8),ee(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=bt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let d=8;d<s;d+=9)n.fillStyle=bt(e,.9),n.fillRect(0,d,s,2);if(o==="cactus")if(t.face==="side"){for(let d=4;d<s;d+=8)n.fillStyle=bt(e,.82),n.fillRect(d,0,2,s);n.fillStyle=bt(je("#EFEBDD"),1,.7);for(let d=0;d<6;d++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",ee(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",ee(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=bt(e,1.1),ee(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=bt(e,.92),ee(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=bt(e,.78);for(let d=0;d<s;d+=8){n.fillRect(0,d+7,s,1);let m=d/8%2?0:8;for(let f=m;f<s;f+=16)n.fillRect(f,d,1,8)}}if(o==="mossy"){n.fillStyle=bt(a);for(let d=0;d<6;d++)Xi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=bt(e,.6),ee(n,[[4,2],[12,14],[10,15],[3,4]]),ee(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=bt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=bt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=bt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=bt(e,1.08),ee(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=bt(je("#D9CBB5"));for(let d=0;d<s;d+=8){n.fillRect(0,d+6,s,2);let m=d/8%2?0:8;for(let f=m;f<s;f+=16)n.fillRect(f,d,2,6)}}if(o==="checker"&&(n.fillStyle=bt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let d=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let m of[3,18]){let f=3;for(;f<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=d[Math.floor(i()*d.length)],n.fillRect(f,m+Math.floor(i()*3),_,11),f+=_+1}}n.fillStyle=bt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.8),n.fillRect(0,d,s,1);if(o==="hay")if(t.face==="side"){for(let d=3;d<s;d+=5)n.fillStyle=bt(e,.88),n.fillRect(d,0,1,s);n.fillStyle=bt(je("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=bt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let d=5;d<s;d+=6)n.fillStyle=bt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=bt(je("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=bt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=bt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=bt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),ee(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=bt(je("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=bt(je("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=bt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=bt(e),n.fillRect(0,0,s,s),n.fillStyle=bt(je("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.85),n.fillRect(0,d,s,1);t.face==="side"&&(n.fillStyle=bt(a),n.fillRect(0,11,s,3),n.fillStyle=bt(je("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let d=3;d<s;d+=6)n.fillStyle=bt(e,.72),n.fillRect(0,d,s,2);if(o==="furnace"){for(let d=0;d<4;d++)n.fillStyle=bt(e,i()<.5?.9:1.08),Xi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=bt(a),n.fillRect(8,15,s-16,11),n.fillStyle=bt(je("#E0352B"),1,.85),ee(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=bt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=bt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=bt(a),ee(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let c=n.getImageData(0,0,s,s),l=c.data;for(let d=0;d<l.length;d+=4){let m=1+(i()-.5)*.09;l[d]=Math.min(255,l[d]*m),l[d+1]=Math.min(255,l[d+1]*m),l[d+2]=Math.min(255,l[d+2]*m)}n.putImageData(c,0,0);let p=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=p,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function Gm(n){let t=document.createElement("canvas");t.width=t.height=qi*xc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=qi;let a=o.getContext("2d",{willReadFrequently:!0});fb(a,s),e.drawImage(o,r%xc*qi,Math.floor(r/xc)*qi),i[r]=o}),{canvas:t,tileCanvas:i}}function Wm(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",ee(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",ee(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/qi,c=(l,p,d,m,f,_,v,g)=>{r.setTransform(p*a,d*a,m*a,f*a,_,v),r.drawImage(o[l],0,0),g&&(r.fillStyle=`rgba(20,24,20,${g})`,r.fillRect(0,0,qi,qi))};c(i.tile.top,20,10,-20,10,24,4,0),c(i.tile.side,20,10,0,22,4,14,.12),c(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,c="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,ee(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",ee(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,ee(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",ee(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,ee(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",ee(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,ee(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[l,p]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(l,p,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let l=0;l<4;l++)ee(r,[[0,-18+l*5],[-5,-14+l*5],[0,-12+l*5]]),ee(r,[[0,-18+l*5],[5,-14+l*5],[0,-12+l*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let l of[-8,0,8])r.fillRect(l-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,ee(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,ee(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,ee(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,ee(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),ee(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",ee(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),ee(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",ee(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,ee(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",ee(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=c,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,ee(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",ee(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let l of[-8,8])r.beginPath(),r.arc(l,10,4,0,7),r.fill()}else o==="saddle"?(r.fillStyle=a,ee(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3)):o==="gem"?(r.fillStyle=a,ee(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",ee(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:c,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&ee(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&ee(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),ee(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=c,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",ee(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",ee(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function Xm(){let n=Hm(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=qi;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,c=6+n()*20,l=n()*Math.PI;ee(r,[[a,c],[a+Math.cos(l)*9,c+Math.sin(l)*9],[a+Math.cos(l+.3)*6,c+Math.sin(l+.3)*6]])}e.push(s),t.push(s)}return t}function db(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?je(t.accent):e,a=(c,l,p)=>{n.fillStyle=p,n.fillRect(c,s-l,2,l)};if(r==="flower"){a(15,18,bt(e)),n.fillStyle=bt(e,1.1),ee(n,[[16,26],[9,20],[15,22]]),ee(n,[[17,24],[24,18],[18,21]]),n.fillStyle=bt(o);for(let c=0;c<5;c++){let l=c/5*Math.PI*2;ee(n,[[16,9],[16+Math.cos(l)*7,9+Math.sin(l)*7],[16+Math.cos(l+.6)*7,9+Math.sin(l+.6)*7]])}n.fillStyle=bt(je("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let c=0;c<6;c++){let l=4+c*4+Math.floor(i()*2),p=14+Math.floor(i()*14);n.fillStyle=bt(e,i()<.5?.9:1.1),ee(n,[[l,s],[l+3,s],[l+1+(r==="fern"?2:0),s-p]])}else if(r==="deadbush")n.strokeStyle=bt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=bt(e),n.fillRect(14,18,4,14),n.fillStyle=bt(o),ee(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=bt(je("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=bt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=bt(e,1.12);for(let c=3;c<s;c+=7)n.fillRect(5,c,s-10,3)}else if(r==="wheat"){let c=Number(t.block.split("_")[1])||0,l=[8,14,21,28][c];for(let p=0;p<5;p++){let d=5+p*5;n.fillStyle=bt(e),n.fillRect(d,s-l,2,l),c===3&&(n.fillStyle=bt(o),ee(n,[[d-2,s-l+9],[d+1,s-l-1],[d+4,s-l+9]]))}}else if(r==="rail"){let c=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],l={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[c];n.save(),n.translate(s/2,s/2),n.rotate(l*Math.PI/2),n.translate(-s/2,-s/2);let p=bt(je("#8C6640")),d=bt(e),m=s*.33,f=s*.67;if(c==="ns"||c==="ew"){n.fillStyle=p;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=d,n.fillRect(m-1.5,0,3,s),n.fillRect(f-1.5,0,3,s),t.accent&&(n.fillStyle=bt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=p,n.lineWidth=3;for(let _=0;_<5;_++){let v=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(v)*(s-f-4),Math.sin(v)*(s-f-4)),n.lineTo(s+Math.cos(v)*(s-m+4),Math.sin(v)*(s-m+4)),n.stroke()}n.strokeStyle=d;for(let _ of[s-m,s-f])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=bt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var qm=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,Ym=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function pb(n,t){let e=Gi(n),i=Gi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,c=(i+r)*16,l=n<a?a-n:n>=a+16?n-(a+16-1):0,p=t<c?c-t:t>=c+16?t-(c+16-1):0;Math.max(l,p)<=14&&s.push([e+o,i+r])}return s}function Zm(n){let t=new Yn(n);t.magFilter=sn,t.minFilter=sn,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new J(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new bn({uniforms:e,vertexShader:qm,fragmentShader:Ym}),s=new bn({uniforms:e,vertexShader:qm,fragmentShader:Ym,transparent:!0,depthWrite:!1,side:$n});return{opaque:i,trans:s,uniforms:e,tex:t}}function $m(n){let t=new rn;return t.setAttribute("position",new Je(n.pos,3)),t.setAttribute("uv",new Je(n.uv,2)),t.setAttribute("light",new Je(n.light,1)),t.setAttribute("lt",new Je(n.lt,2,!0)),t.setIndex(new Je(n.index,1)),t.computeBoundingSphere(),t}var _c=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Ii(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Oe($m(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Oe($m(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Gi(t),s=Gi(e),r=tm(i,s,this.rd);for(let c of r){if(this.inflight>=this.maxInflight)break;let l=Ii(c.cx,c.cz);if(this.chunks.has(l))continue;let p={cx:c.cx,cz:c.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(l,p),this.inflight++,this.worker.postMessage({type:"load",cx:c.cx,cz:c.cz,rev:p.meshRev})}let o=this.rd+1.5,a=[];for(let[c,l]of this.chunks){let p=l.cx-i,d=l.cz-s;if(p*p+d*d>o*o){for(let m of["o","t"])l[m]&&(this.scene.remove(l[m]),l[m].geometry.dispose());this.chunks.delete(c),a.push(c)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(c=>{let[l,p]=c.split(",").map(Number);return Math.abs(l-i)>this.rd+3||Math.abs(p-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(c=>c.state==="ready").length}ready(t,e){let i=this.chunks.get(Ii(Gi(t),Gi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=gu(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Ii(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=gu(t,e,i);if(!r)return!1;let o=Ii(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,km(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let c=Math.floor(t),l=Math.floor(i);for(let[p,d]of pb(c,l))this.dirtyMesh.add(Ii(p,d));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Ku="hw_world",Fo=null;function Jm(n){n!==Ku&&(Ku=n,Fo=null)}function Km(){return Fo||(Fo=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Ku,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Fo)}function ju(n,t){return Km().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var Qu=n=>ju("readonly",t=>t.get(n)),tf=n=>ju("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function jm(n){let t=await Km();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Qm(n){let t={};for(let e of n){let i=await Qu(e);i!==void 0&&(t[e]=i)}await ju("readwrite",e=>e.clear()),await tf(t)}function P(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Yi=n=>document.querySelector(n);function gb(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function e0(n,t,e,i,s,r){if(!t||!t.id)return null;let o=gb(t,e,i,s,r),a=n.get("ke_log"),c=Array.isArray(a)?a:[];if(c.push(o),n.set("ke_log",c),e){let d=n.get("ke_correct"),m=Array.isArray(d)?d:[];m.includes(t.id)||(m.push(t.id),n.set("ke_correct",m))}let l=n.get("ke_mistakes")||{},p=l[t.id]&&!l[t.id].d?l[t.id]:null;return e?p&&(p.c++,p.u=s,p.c>=3&&(l[t.id]={d:1,w:p.w,t:p.t,u:s})):l[t.id]={c:0,w:((l[t.id]||{}).w||0)+1,t:s,u:s},(!e||p)&&n.set("ke_mistakes",l),o}var t0=n=>n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();function n0(n,t=Date.now()){let e=t0(new Date(t)),i=0;for(let s of Array.isArray(n)?n:[])s&&t0(new Date(s.t))===e&&i++;return i}function i0(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],c=[];for(let f of n)e[f]&&!e[f].d?o.push(f):t.has(f)||i.has(f)?c.push(f):a.push(f);let l=f=>{for(let _=f.length-1;_>0;_--){let v=Math.floor(r()*(_+1));[f[_],f[v]]=[f[v],f[_]]}return f};[o,a,c].forEach(l);let p=[],d=(f,_)=>{for(;_-- >0&&f.length;)p.push(f.pop())},m=Math.round(s*.7);return d(o,Math.ceil(m/2)),d(a,m-p.length),d(o,m-p.length),d(c,s-p.length),d(a,s-p.length),d(o,s-p.length),p}var xb="../../",_b=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],nf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],yc=null,sf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),ef=null,r0=n=>{ef=n},o0=()=>n0(sf().get("ke_log"));function rf(n,t,e){try{e0(sf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(i){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",i)}if(ef)try{ef(t,n)}catch{}}function of(n,t,e){try{let i=sf(),s=i.get("ke_learned")||{},r=new Set;for(let l in s)s[l]&&s[l].at&&(n.sets&&n.sets[l]||[]).forEach(p=>r.add(p));let o=n.list(t).filter(l=>l.type!=="speak").map(l=>l.id),a=i0(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),c=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(c.length)return c}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function yb(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function af(){return yc||(yc=(async()=>{for(let t of _b)await yb(xb+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw yc=null,n})),yc}async function a0(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=P("div",{class:"panel quiz"});n.append(r),r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await af()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,c=[],l=0,p=0,d=0;function m(){n.hidden=!0,n.innerHTML="",i&&i()}function f(){c=of(o,{modules:["words","phrases","grammar","patterns"],types:nf,lv:1},s),c.length||(c=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),l=0,p=0,d=0,_()}function _(){r.innerHTML="";let x=c[l],T=a.isTyped(x);n._q=x;let L=P("div",{class:"fb"}),E=P("div",{class:"q-body"});r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",P("small",{},`\u7B2C ${l+1} / ${c.length} \u984C`)),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("div",{class:"q-type"},(a.TYPES[x.type]||"\u984C\u76EE")+(T?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),P("div",{class:"q-prompt"+(x.en?" en":"")},x.prompt),x.sub?P("div",{class:"q-sub"},x.sub):null,E,L);let S=!1,C=(N,b)=>{if(S)return;S=!0,rf(x,N,b);let A=wm(N,T);e&&e(N),N&&(d++,p+=A,t&&t(A)),L.className="fb "+(N?"ok":"bad"),L.append(P("div",{},N?`\u7B54\u5C0D\u4E86\uFF01 +${A} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",N?null:P("b",{class:"en"},x.answer)),!N&&x.why?P("div",{class:"why"},x.why):null,P("button",{class:"btn",onclick:v},l+1<c.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(x.input==="type"){let N=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),b=()=>{S||!N.value.trim()||C(o.check(x,N.value).ok,N.value)};N.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"&&b()}),E.append(P("div",{class:"typerow"},N,P("button",{class:"btn",onclick:b},"\u9001\u51FA"))),setTimeout(()=>N.focus(),50)}else{let N=P("div",{class:"opts"});(x.options||[]).forEach(b=>N.append(P("button",{class:"opt"+(/[a-z]/i.test(b)?" en":""),onclick:A=>{if(S)return;let U=o.check(x,b).ok;A.currentTarget.classList.add(U?"ok":"bad"),C(U,b)}},b))),E.append(N)}}function v(){l++,l<c.length?_():g()}function g(){r.innerHTML="",r.append(P("div",{class:"p-head"},P("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("p",{class:"big"},`\u7B54\u5C0D ${d} / ${c.length} \u984C\uFF0C\u62FF\u5230 ${p} \u91D1\u5E63`),P("div",{class:"row"},P("button",{class:"btn",onclick:f},"\u518D\u4F86\u4E00\u56DE"),P("button",{class:"btn ghost",onclick:m},"\u56DE\u53BB\u84CB\u623F\u5B50")))}f()}var s0=new Set(nf);async function lf(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o}){n.innerHTML="",n.hidden=!1;let a=P("div",{class:"panel quiz"});n.append(a),a.append(P("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let c;try{c=await af()}catch{a.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let l=window.KE,p=null,d=i?new Set(i.filter(T=>s0.has(T))):s0;for(let T of t){let L=c.byId[T];if(L&&d.has(L.type)){p=c.get(T);break}}let m=!!p;p||(p=of(c,{modules:s||["words","phrases","grammar","patterns"],types:i?[...d]:nf,lv:1},1)[0]||c.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let f=l.isTyped(p);n._q=p,a.innerHTML="";let _=P("div",{class:"fb"}),v=P("div",{class:"q-body"});a.append(P("div",{class:"p-head"},P("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),P("div",{class:"q-type"},(m?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":l.TYPES[p.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),P("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?P("div",{class:"q-sub"},p.sub):null,v,_);let g=!1,x=(T,L)=>{g||(g=!0,rf(p,T,L),_.className="fb "+(T?"ok":"bad"),_.append(P("div",{},T?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",T?null:P("b",{class:"en"},p.answer)),!T&&p.why?P("div",{class:"why"},p.why):null,P("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(T,f,p)}},"\u7E7C\u7E8C")))};if(p.input==="type"){let T=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),L=()=>{g||!T.value.trim()||x(c.check(p,T.value).ok,T.value)};T.addEventListener("keydown",E=>{E.stopPropagation(),E.key==="Enter"&&L()}),v.append(P("div",{class:"typerow"},T,P("button",{class:"btn",onclick:L},"\u9001\u51FA"))),setTimeout(()=>T.focus(),50)}else{let T=P("div",{class:"opts"});(p.options||[]).forEach(L=>T.append(P("button",{class:"opt"+(/[a-z]/i.test(L)?" en":""),onclick:E=>{if(g)return;let S=c.check(p,L).ok;E.currentTarget.classList.add(S?"ok":"bad"),x(S,L)}},L))),v.append(T)}}async function l0(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=P("div",{class:"panel quiz"});n.append(i),i.append(P("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await af()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=of(s,{modules:[t.module],types:t.types,lv:t.lv},t.count);o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,c=0,l=()=>{i.innerHTML="";let p=o[a];n._q=p;let d=P("div",{class:"fb"}),m=P("div",{class:"q-body"});i.append(P("div",{class:"p-head"},P("h2",{},t.title_zh+" ",P("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),P("div",{class:"q-type"},r.TYPES[p.type]||"\u984C\u76EE"),P("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?P("div",{class:"q-sub"},p.sub):null,m,d);let f=!1,_=(v,g)=>{f||(f=!0,rf(p,v,g),v&&c++,d.className="fb "+(v?"ok":"bad"),d.append(P("div",{},v?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:P("b",{class:"en"},p.answer)),!v&&p.why?P("div",{class:"why"},p.why):null,P("button",{class:"btn",onclick:()=>{a++,a<o.length?l():(n.hidden=!0,n.innerHTML="",e&&e(c,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(p.input==="type"){let v=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{f||!v.value.trim()||_(s.check(p,v.value).ok,v.value)};v.addEventListener("keydown",x=>{x.stopPropagation(),x.key==="Enter"&&g()}),m.append(P("div",{class:"typerow"},v,P("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=P("div",{class:"opts"});(p.options||[]).forEach(g=>v.append(P("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:x=>{if(f)return;let T=s.check(p,g).ok;x.currentTarget.classList.add(T?"ok":"bad"),_(T,g)}},g))),m.append(v)}};l()}function c0(n,t,e){let[i,s]=String(n).split(",").map(Number),r=p=>zn(4242,i|0,t*7+p,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,c=Math.floor(r(2)*a.length),l=(c+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[c],a[l]]}}function h0(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?br(n,e.blueprint)?{ok:!1,reason:"owned"}:(Ls(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Lo(t,e.give,e.count,i)?(Ls(n,e.price),wn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var cf=(n,t,e)=>!!(n&&n[t.id]===e);function u0(n,t,e,i,s,r,o=()=>64){if(cf(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,kn(s,t.reward.coins|0);let a={};for(let c in t.reward.items||{}){let l=wn(r,c,t.reward.items[c],o);l&&(a[c]=l)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function hf(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var uf={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},vc=n=>n==="creative"?"creative":"survival",f0=n=>uf[vc(n)].db;function d0(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function p0(n){let t=vc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function m0(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var g0=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Mf={};_i(Mf,{BREED_CAP:()=>yf,LOVE_MS:()=>_0,MAX_STAGE:()=>Sb,STAGE_SECONDS:()=>bb,armorMax:()=>x0,armorPoints:()=>Oo,canTill:()=>df,eat:()=>_f,equip:()=>wb,findMate:()=>vf,harvest:()=>pf,nearWater:()=>mf,reduceDamage:()=>xf,stageAt:()=>ff,wearArmor:()=>gf});var bb=60,Sb=3;function ff(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var df=(n,t)=>(n==="grass"||n==="dirt")&&t;function pf(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function mf(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let c of[0,-1])if(t(n(e+a,i+c,s+o)))return!0;return!1}function Oo(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var x0=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function gf(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?x0(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var xf=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function wb(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function _f(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var _0=3e4,yf=12;function vf(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<_0&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var Af={};_i(Af,{apply:()=>Sc,duck:()=>gs,muted:()=>Bo,rainLevel:()=>wf,scene:()=>Sf,setVolume:()=>wc,sfx:()=>un,state:()=>Ab,toggleMute:()=>bf,unlock:()=>bc});var Ge=null,Ds=null,Mc=null,Sr=null,Vn=()=>window.HIAudio||null,v0=()=>Vn()?Vn().get():{muted:!1,music:.35,sfx:.7};function bc(){try{Vn()&&Vn().unlock()}catch{}if(!Ge){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Ge=new n,Ds=Ge.createGain(),Ds.connect(Ge.destination),Mc=Ge.createBuffer(1,Ge.sampleRate,Ge.sampleRate);let t=Mc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Ge.state==="suspended"&&Ge.resume(),Sc()}function Sc(){if(Ds){let n=v0();Ds.gain.setTargetAtTime(n.muted?0:n.sfx,Ge.currentTime,.03)}}var Bo=()=>v0().muted;function bf(){return Vn()&&Vn().toggle(),Sc(),Bo()}function wc(n){Vn()&&Vn().set(n),Sc()}function Sf(n){try{Vn()&&Vn().scene(n)}catch{}}function gs(n){let t=Vn();t&&(n&&gs.id==null?gs.id=t.duckStart():!n&&gs.id!=null&&(t.duckEnd(gs.id),gs.id=null))}function M0(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Kn(n,t,e,i,s,r,o){let a=Ge.createOscillator(),c=Ge.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),M0(c,e,i,s,r),a.connect(c),c.connect(Ds),a.start(e),a.stop(e+i+r+.05)}function xs(n,t,e,i,s,r=1){let o=Ge.createBufferSource(),a=Ge.createBiquadFilter(),c=Ge.createGain();o.buffer=Mc,a.type=n,a.frequency.value=t,a.Q.value=r,M0(c,e,.004,i,s),o.connect(a),a.connect(c),c.connect(Ds),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var y0={wood:(n,t)=>{Kn("sine",190*t,n,.003,.16,.12,95*t),xs("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{xs("highpass",1800*t,n,.1,.06),Kn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{xs("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Kn("sine",1900*t,n,.002,.08,.25,1500*t),xs("highpass",4200,n,.06,.12)},soft:(n,t)=>{xs("bandpass",850*t,n,.09,.1,.8)}};function un(n,t="soft"){if(!Ge||Bo())return;let e=Ge.currentTime+.005,i=y0[t]||y0.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{xs(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Kn("sine",880,e,.002,.07,.08,1320);break;case"chest":Kn("triangle",160,e,.02,.07,.3,120),Kn("sine",330,e+.12,.005,.05,.15);break;case"door":Kn("sawtooth",120,e,.03,.04,.3,160),xs("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>xs("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Kn("triangle",659,e,.005,.08,.15),Kn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Kn("sine",1319,e,.002,.08,.08),Kn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Kn("triangle",300,e,.005,.1,.18,200);break;default:break}}function wf(n){if(Ge){if(!Sr&&n>.01){let t=Ge.createBufferSource(),e=Ge.createBiquadFilter(),i=Ge.createBiquadFilter(),s=Ge.createGain();t.buffer=Mc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Ds),t.start(),Sr={s:t,g:s}}Sr&&Sr.g.gain.setTargetAtTime(.06*n,Ge.currentTime,.4)}}var Ab=()=>({ctx:Ge?Ge.state:"none",hi:Vn()?Vn().state():null,rain:Sr?+Sr.g.gain.value.toFixed(3):0});var Pf={};_i(Pf,{HI_SCENE:()=>Tf,createWeather:()=>Cf,precipFor:()=>If,sceneFor:()=>Ef,soundOf:()=>wr,stepWeather:()=>Rf});function wr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function Ef({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var Tf={calm:"hub",night:"night",cave:"cave"};function Cf(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function Rf(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function If(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var Eb=[1,2,4,6,8];function Ac(n,t){if(t&&t.type==="rod"&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/Eb[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function zo(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function b0(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var Of={};_i(Of,{collect:()=>Uf,createFurnace:()=>Lf,dismantle:()=>Ff,start:()=>Df,tick:()=>Nf});function Lf(){return{fuel:0,jobs:[],done:{}}}function Df(n,t,e,i=4){if(di(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(di(t,"coal")<1)return{ok:!1,reason:"fuel"};Po(t,"coal",1),n.fuel+=i}return Po(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function Nf(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function Uf(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=wn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function Ff(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Wf={};_i(Wf,{MAX_HP:()=>ko,REGEN_EVERY:()=>Cb,SAFE_FALL:()=>Tb,createHealth:()=>Bf,damage:()=>kf,fallDamage:()=>zf,hearts:()=>Gf,regen:()=>Vf,respawnPoint:()=>Hf});var ko=20,Tb=4,Cb=4;function Bf(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function zf(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function kf(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Vf(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function Hf(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function Gf(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Ec={animal:8,quiz:4};function S0(){return{list:[],nextId:1}}var Vo=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function w0(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function A0(n,t){return n<.2&&!t}function E0(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function T0(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let c=n.home.x-n.p.x,l=n.home.z-n.p.z,p=Math.hypot(c,l);if(p>10){n.yaw=Math.atan2(-c,-l),n.v.x=c/p*s.speed,n.v.z=l/p*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let c=a>1.6?s.speed:0;n.v.x=r/(a||1)*c,n.v.z=o/(a||1)*c;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function C0(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var R0=(n,t)=>n?(t?2:1)+1:0;function Tc(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],c=[t.x,t.y,t.z],l=0,p=1/0;for(let d=0;d<3;d++){if(Math.abs(c[d])<1e-9){if(a[d]<r[d]||a[d]>o[d])return null;continue}let m=(r[d]-a[d])/c[d],f=(o[d]-a[d])/c[d];if(m>f&&([m,f]=[f,m]),l=Math.max(l,m),p=Math.min(p,f),l>p)return null}return l}function I0(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var P0=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function L0(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function D0(n,t,e,i,s=()=>64){let r=(t||[]).find(l=>l.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),c={};kn(i,o);for(let l in a){let p=wn(e,l,a[l],s);p&&(c[l]=p)}return{ok:!0,coins:o,items:a,leftovers:c,name_zh:r.name_zh}}function N0(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Xf(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function U0(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Xf(n[e].map,n,t).ok?n[e]:null}var Di={};function Ar(n){return Di[n]||(Di[n]=new Mn({color:n,transparent:!0}),Di[n].userData.base=new ce(n)),Di[n]}var Ho=null;function Pb(){if(Ho)return Ho;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Ho=new Yn(n),Ho.colorSpace=nn,Ho}function F0(n,t){let e=new mn,i=n.colors,[s,r]=n.size,o=(c,l,p,d,m,f,_,v)=>{let g=new Oe(new Qe(c,l,p),v||Ar(d));return g.position.set(m,f,_),e.add(g),g},a=[];if(n.kind==="villager"){for(let l of[-.13,.13]){let p=o(.2,.6,.22,i.leg,l,.6,0);p.geometry.translate(0,-.6/2,0),a.push(p)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let l of[-.36,.36])o(.16,.62,.18,t||i.body,l,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let c=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Di.__face||(Di.__face=new Mn({map:Pb(),transparent:!0}),Di.__face.userData.base=new ce("#ffffff"));let l=[Ar(i.head),Ar(i.head),Ar(i.head),Ar(i.head),Ar(i.head),Di.__face],p=new Oe(new Qe(s*.9,s*.8,s*.8),l);p.position.set(0,r*.72+s*.4,0),e.add(p),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let c=n.id==="chicken"?.25:.45,l=r-c-(n.id==="chicken"?.15:.25);o(s,l,n.id==="chicken"?s:s*1.35,i.body,0,c+l/2,0),i.patch&&o(s*.5,l*.55,.02+s*1.36,i.patch,s*.12,c+l*.55,0);let p=n.id==="chicken"?.3:.45,d=o(p,p,p,i.head,0,c+l+p*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+p/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-p/2-.05));let m=n.id==="chicken"?.06:.18,f=n.id==="chicken"?0:s*.45,_=s*.3;for(let[v,g]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-_,-f],[_,-f],[-_,f],[_,f]]){let x=o(m,c,m,i.leg,v,c/2,g);x.geometry.translate(0,-c/2,0),x.position.y=c,a.push(x)}}return e.userData.legs=a,e}function O0(n){for(let t in Di){let e=Di[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Cc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var Rc="114c560fe6",qf=new URLSearchParams(location.search),Nb=720,Ic=5,z0={boat:-.85,minecart:-.6,horse:.75},k0=[[0,0,0,1,.1,1]],V0=[[0,0,0,1,.5,1]],Ub=[[0,0,0,1,1,1]],Fb=[[.3,0,.3,.7,.7,.7]],Ob=20261008,Bb=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,h={touch:Bb,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function _s(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function Ns(n,t){try{localStorage.setItem(n,t)}catch{}}async function zb(){let n=vc(_s("hw_mode","survival")),t=p0(n),e=!t.creative&&_s("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=u=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(u)?u+"_s":u,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";Jm(f0(n));let[r,o,a,c,l,p,d,m]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json"].map(u=>fetch(u,{cache:"no-cache"}).then(M=>M.json()))),f=jp(r),_=o.recipes||[],v=u=>f.maxStack(u),g={};try{let[u,M,R,I,D,X,rt,ft,ht,Mt,Gt,ie,ne]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(Pe=>Qu(i(Pe))));g={meta:u,player:M,inv:R,coins:I,furnaces:D,claimed:X,quests:rt,chests:ft,crops:ht,achv:Mt,mapd:Gt,vehs:ie,storyd:ne,chunks:await jm(s)}}catch(u){console.warn("save unavailable",u)}let x=g.meta&&g.meta.seed||Ob+uf[n].seedOffset,T=e==="shadow"?x+7777:x,L=e==="shadow"?Nu(T,f):om(x,f,l),E=Vm(Object.fromEntries(Object.entries(g.chunks||{}).map(([u,M])=>[u.slice(s.length),M]))),S=g.inv?pc(g.inv):Io();t.creative&&!g.inv&&g0.forEach((u,M)=>{f.get(u)&&(S.slots[M]={id:u,count:64})});let C=Cm(g.coins),N=gm(g.achv),b=d.achievements||[],A=Hu(g.storyd);!g.storyd&&g.player&&gc(A,m);let U=u=>u==="look"?h.lookAcc||0:u==="walk"?h.walkAcc||0:N.stats[u]||0,B=Lm(),$=Pm(C,{mode:_s("hw_coin_source","local"),member:Im(window)}),z=new fc(f,g.mapd),O=Bf(g.player&&g.player.hp!=null?g.player.hp:20);h.bed=g.player&&g.player.bed||null,h.horse=g.player&&g.player.horse||null;let V=c.portals||[],K=Array.isArray(g.claimed)?g.claimed.slice():[],q=g.furnaces||{},st=g.quests||{},Z=Object.fromEntries(Object.entries(g.chests||{}).map(([u,M])=>[u,pc(M,27)])),nt=g.crops||{};h.armor=g.player&&Array.isArray(g.player.armor)?g.player.armor.slice(0,4):[null,null,null,null],h.armorDur=g.player&&Array.isArray(g.player.armorDur)?g.player.armorDur.slice(0,4):[null,null,null,null];let ot=o.smelt||[],Ct=o.fuelPerCoal||4;g.meta&&typeof g.meta.time=="number"&&(h.time=g.meta.time);let pt=Yi("#c"),wt=new rc({canvas:pt,antialias:!1,powerPreference:"high-performance"});wt.setPixelRatio(Math.min(window.devicePixelRatio||1,h.touch?1.5:1.25));let gt=new Kr,yt=new ce("#EFEBDD");gt.background=yt;let W=new vn(72,1,.08,200);W.rotation.order="YXZ";let et=Gm(f),xt=Wm(f,et),kt=Zm(et.canvas),mt=new Worker("assets/hw-worker.js?v="+Rc),at=new _c({scene:gt,mats:kt,reg:f,worker:mt,diffs:E,onDirty:u=>{h.dirty.add(u),(h.mapDirty||(h.mapDirty=new Set)).add(u)}}),ae=Math.max(2,Math.min(6,parseInt(qf.get("rd")||_s("hw_rd",h.touch?"3":"4"),10)||4));at.setRenderDistance(ae),W.far=ae*16+40,W.updateProjectionMatrix();let Dt=await new Promise(u=>{let M=R=>{R.data.type==="ready"&&(mt.removeEventListener("message",M),u(R.data.spawn))};mt.addEventListener("message",M),mt.postMessage({type:"init",seed:T,dim:e,blocks:r,structures:l,diffs:Object.fromEntries([...E].map(([R,I])=>[R,Ju(I)]))})}),Qt=g.player&&g.player.dims&&g.player.dims[e];h.dimPos=g.player&&g.player.dims||{},g.player&&(e==="overworld"||Qt)?Object.assign(h,{p:Qt?{x:Qt.x,y:Qt.y,z:Qt.z}:{x:g.player.x,y:g.player.y,z:g.player.z},yaw:(Qt?Qt.yaw:g.player.yaw)||0,pitch:g.player.pitch||0,fly:!!g.player.fly&&!Qt,sel:g.player.sel|0}):(g.player&&(h.sel=g.player.sel|0),h.p={x:Dt.x,y:Dt.y,z:Dt.z},h.yaw=Math.atan2(-(Dt.stele.x+.5-Dt.x),-(Dt.stele.z+.5-Dt.z)),h.pitch=-.15);let re=new Ts(new ro(new Qe(1.004,1.004,1.004)),new Es({color:1382164,transparent:!0,opacity:.45}));re.visible=!1,gt.add(re);let Zt=Xm().map(u=>new Yn(u)),se=new Oe(new Qe(1.01,1.01,1.01),new Mn({map:Zt[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));se.visible=!1,gt.add(se);let ke=(u,M)=>{let R=document.createElement("canvas");R.width=R.height=64;let I=R.getContext("2d");I.fillStyle=u,I.beginPath(),I.arc(32,32,28,0,7),I.fill(),M&&(I.globalCompositeOperation="destination-out",I.beginPath(),I.arc(44,26,24,0,7),I.fill());let D=new Yn(R);return D.colorSpace=nn,D},We=new As(new os({map:ke("#F2C46B"),depthWrite:!1,fog:!1})),we=new As(new os({map:ke("#EDE6D0",!0),depthWrite:!1,fog:!1}));gt.add(We,we);let Ie=500,H=new Float32Array(Ie*6),Ve=new Float32Array(Ie*3),me=new Float32Array(Ie*3);for(let u=0;u<Ie;u++)me[u*3]=Math.random()*24-12,me[u*3+1]=Math.random()*16,me[u*3+2]=Math.random()*24-12;let F=new rn;F.setAttribute("position",new Je(H,3));let y=new Ts(F,new Es({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));y.frustumCulled=!1,y.visible=!1,gt.add(y);let Y=new rn;Y.setAttribute("position",new Je(Ve,3));let tt=new no(Y,new ar({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));tt.frustumCulled=!1,tt.visible=!1,gt.add(tt),h.weather=Cf();let ct=0;function Et(u,M,R){if(y.visible=R==="rain",tt.visible=R==="snow",!!R){ct+=u;for(let I=0;I<Ie;I++){let D=me[I*3],X=me[I*3+2],rt=R==="rain"?16:1.6,ft=M.y+10-(me[I*3+1]+ct*rt)%16;if(R==="rain"){let ht=I*6;H[ht]=H[ht+3]=M.x+D,H[ht+2]=H[ht+5]=M.z+X,H[ht+1]=ft,H[ht+4]=ft-.45}else{let ht=I*3,Mt=Math.sin(ct*.8+I)*.4;Ve[ht]=M.x+D+Mt,Ve[ht+1]=ft,Ve[ht+2]=M.z+X+Mt*.6}}(R==="rain"?F:Y).attributes.position.needsUpdate=!0}}let Tt=new mn,lt=(u,M,R,I,D,X,rt)=>{let ft=new Oe(new Qe(u,M,R),new Mn({color:I}));return ft.position.set(D,X,rt),ft.userData.base=new ce(I),Tt.add(ft),ft},dt=lt(.24,.75,.26,"#26302A",-.14,.375,0),Lt=lt(.24,.75,.26,"#26302A",.14,.375,0);lt(.56,.7,.3,"#2F5A34",0,1.1,0);let Kt=lt(.18,.66,.2,"#E7CDA6",-.38,1.12,0),Ut=lt(.18,.66,.2,"#E7CDA6",.38,1.12,0);lt(.46,.42,.42,"#E7CDA6",0,1.66,0),lt(.5,.14,.46,"#151714",0,1.9,.02),lt(.12,.12,.05,"#E0352B",.16,1.92,-.24),[dt,Lt,Kt,Ut].forEach(u=>{u.geometry.translate(0,-u.geometry.parameters.height/2+.05,0),u.position.y+=u.geometry.parameters.height/2-.05}),Tt.visible=!1,gt.add(Tt);let Rt={},te=u=>Rt[u]||(Rt[u]=(()=>{let M=new Image;M.src=xt[u];let R=new gn(M);return R.colorSpace=nn,M.onload=()=>{R.needsUpdate=!0},new os({map:R,depthWrite:!0,alphaTest:.3})})());function Yt(u,M,R,I){let D=new As(te(u));D.scale.set(.42,.42,1),gt.add(D),h.drops.push({id:u,s:D,p:{x:M,y:R,z:I},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let ue=(u,M,R)=>{let I=at.get(u,M,R);return f.flat.solid[I]===1&&(f.flat.boxes[I]||!0)},G=Object.fromEntries((a.mobs||[]).map(u=>[u.id,u])),At=S0(),ut=new Map,Pt=0;function Ft(u,M){for(let R=61;R>0;R--){let I=at.get(u,R,M);if(f.flat.solid[I])return at.get(u,R+1,M)||at.get(u,R+2,M)?null:{y:R+1,n:I};if(f.flat.liquid[I])return null}return null}function _t(u,M,R,I=7){for(let D=-I;D<=I;D++)for(let X=-I;X<=I;X++)for(let rt=-I;rt<=I;rt++)if(f.flat.lightEmit[at.get(u+rt,M+D,R+X)])return!0;return!1}function $t(u,M,R,I,D){let X=w0(At,u,{x:M+.5,y:R,z:I+.5}),rt=F0(u,D);return ut.set(X.id,rt),gt.add(rt),X}let Xt=new Set;function Fe(){for(let u of L.villages.around(h.p.x-64,h.p.z-64,h.p.x+64,h.p.z+64))if(!(Xt.has(u.id)||!at.ready(u.x,u.z))){Xt.add(u.id);for(let M=0;M<u.villagers;M++){let R=c0(u.id,M,p),I=u.x+(M%2?2:-2),D=u.z+(M-1),X=Ft(I,D),rt=$t(G.villager,I,X?X.y:u.y+1,D,R.prof.color);Object.assign(rt,{home:{x:u.x,z:u.z},village:u.id,role:R})}}}function Ee(u){if(G.villager&&Fe(),e==="overworld"&&h.horse&&!h.horseMob&&G.horse&&at.ready(h.horse.x,h.horse.z)){let rt=$t(G.horse,Math.floor(h.horse.x),h.horse.y,Math.floor(h.horse.z));rt.tame=!0,h.horse.saddled&&Qf(rt),h.horseMob=rt}let M=Math.random()*Math.PI*2,R=14+Math.random()*14,I=Math.floor(h.p.x+Math.cos(M)*R),D=Math.floor(h.p.z+Math.sin(M)*R);if(!at.ready(I,D))return;let X=Ft(I,D);if(X)if(Vo(At,"animal")<Ec.animal&&X.n===f.num("grass")&&u>.3){let rt=Object.values(G).filter(Mt=>Mt.kind==="animal"&&(!Mt.biome||Mt.biome===L.biomeOf(I,D))),ft=rt[Math.floor(Math.random()*rt.length)],ht=1+Math.floor(Math.random()*3);for(let Mt=0;Mt<ht&&Vo(At,"animal")<Ec.animal;Mt++){let Gt=I+Mt%2,ie=D+(Mt>>1),ne=Ft(Gt,ie);ne&&$t(ft,Gt,ne.y,ie)}}else t.quizMobs&&Vo(At,"quiz")<Ec.quiz&&A0(u,_t(I,X.y,D))&&G.quizling&&$t(e==="shadow"&&G.shadowling?G.shadowling:G.quizling,I,X.y,D)}function Ln(u,M,R){Pt+=u,Pt>2.5&&h.started&&(Pt=0,Ee(e==="shadow"?0:M));for(let I=At.list.length-1;I>=0;I--){let D=At.list[I],X=ut.get(D.id),rt=Math.hypot(D.p.x-h.p.x,D.p.z-h.p.z);if(D.riding){D.p.x=h.p.x,D.p.y=h.p.y,D.p.z=h.p.z,D.yaw=h.yaw,D.v.x=h.v.x,D.v.z=h.v.z,Cc(X,D,R/1e3);continue}if(D.gone){D.goneT=(D.goneT||0)+u,Cc(X,D,R/1e3),D.goneT>.35&&(gt.remove(X),ut.delete(D.id),At.list.splice(I,1));continue}if(E0(D,M,rt)){D.gone=!0,D.goneT=0,D.village&&Xt.delete(D.village);continue}if(!at.ready(D.p.x,D.p.z))continue;T0(D,h.p,u,Math.random),D.v.y-=20*u,D.v.y<-20&&(D.v.y=-20);let ft=lc(D.p,D.v,u,ue,{w:Math.min(.9,D.def.size[0]),h:D.def.size[1],canStep:!0,grounded:D.onGround});D.onGround=ft.onGround,f.flat.liquid[at.get(D.p.x,D.p.y+.3,D.p.z)]&&(D.v.y=2),Cc(X,D,R/1e3)}O0(.35+.65*M)}function xn(u,M,R){let I,D;u==="screen"?(Zi.set(M/innerWidth*2-1,-(R/innerHeight)*2+1,.5).unproject(W).sub(W.position).normalize(),I={x:W.position.x,y:W.position.y,z:W.position.z},D={x:Zi.x,y:Zi.y,z:Zi.z}):(I=Jo(),D=Lc());let X=u==="screen"?Qn("screen",M,R):Qn("center"),rt=null,ft=h.view==="tp"&&u==="screen"?8:4.5;X&&(ft=Math.min(ft,X.dist+.5));for(let ht of At.list){if(ht.gone||ht.riding)continue;let Mt=Tc(I,D,ht.p,ht.def.size[0],ht.def.size[1]);Mt!=null&&Mt<ft&&(ft=Mt,rt=ht)}for(let ht of h.vehicles){if(h.ride&&h.ride.veh===ht)continue;let Mt=Tc(I,D,ht.p,1.3,.9);Mt!=null&&Mt<ft&&(ft=Mt,rt=ht.m)}if(h.boss){let ht=Tc(I,D,h.boss.p,3.6,3.6);ht!=null&&ht<ft+1&&(ft=ht,rt=h.boss.m)}return rt}function Go(){try{return I0(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Er(u){if(u.kind==="vehicle"){Fc(u.veh);return}if(u.kind==="boss"){sg();return}if(u.type==="horse"){Z0(u);return}if(u.kind==="villager"){if(!t.trading){It("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}gi(u);return}if(u.kind==="animal"&&S.slots[h.sel]&&S.slots[h.sel].id==="wheat"){t.consume&&Jn(S,h.sel,1),k();let R=Date.now();u.love=R,It(`${u.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let I=vf(At.list,u,R);if(I&&Vo(At,"animal")<yf){let D=$t(u.def,Math.floor((u.p.x+I.p.x)/2),Math.floor(u.p.y),Math.floor((u.p.z+I.p.z)/2));ut.get(D.id).scale.setScalar(.65),u.love=0,I.love=0,It(`\u751F\u4E86\u4E00\u96BB\u5C0F${u.def.name_zh}\uFF01`),h.stats.bred=(h.stats.bred||0)+1,ye("bred")}else I&&It("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(u.kind==="animal"){let R=S.slots[h.sel],I=!!(R&&f.toolOf(R.id)&&f.toolOf(R.id).type==="sword"),D=C0(u,I,Math.random);if(u.v.y=4,u.v.x+=(u.p.x-h.p.x)*1.5,u.v.z+=(u.p.z-h.p.z)*1.5,I){let X=zo(S,h.sel,f);X.broke&&It(`\u4F60\u7684${f.name(X.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),k()}if(D&&D.drops)for(let X=0;X<D.drops.n;X++)Yt(D.drops.id,u.p.x,u.p.y+.6,u.p.z);return}if(u.busy)return;u.busy=!0,Wn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let M=Go().slice(0,30).sort(()=>Math.random()-.5);lf(St.ov,{ids:M,onDone:(R,I)=>{if(h.overlay=null,u.busy=!1,R&&u.def.tough&&!u.hurt){u.hurt=!0,It("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(R){let D=R0(!0,I)+(u.def.tough?2:0);kn(C,D),Dn(),u.gone=!0,u.goneT=0,It(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${D} \u91D1\u5E63`),h.dirtyMeta=!0,An(),h.stats.quizWins=(h.stats.quizWins||0)+1,ye("quiz_wins")}else if(R===!1){let D=h.p.x-u.p.x,X=h.p.z-u.p.z,rt=Math.hypot(D,X)||1;h.v.x=D/rt*7,h.v.z=X/rt*7,h.v.y=4.5,u.p.x-=D/rt*1.5,u.p.z-=X/rt*1.5,It("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let Hn=(u,M,R)=>at.get(u,M,R),Ni=(u,M,R)=>{let I=f.get(at.get(u,M,R));return I&&I.rail?{shape:I.rail,powered:!!I.powered}:null},St=kb();function It(u){for(;St.toasts.children.length>3;)St.toasts.firstChild.remove();let M=P("div",{class:"toast"},u);St.toasts.append(M),setTimeout(()=>M.remove(),2200)}function Wo(u){let M=P("div",{class:"toast ach"},P("i",{class:"badge"}),P("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",P("b",{},u.name_zh),u.coins&&t.coins?`\u3000+${u.coins} \u91D1\u5E63`:""));St.toasts.append(M),setTimeout(()=>M.remove(),3500)}function ye(u,M=1){xm(N,u,M),h.dirtyMeta=!0;for(let R of _m(N,b))Wo(R),R.coins&&t.coins&&(kn(C,R.coins),Dn())}let pi=()=>Math.max(5,Math.min(100,parseInt(_s("hw_daily_goal","20"),10)||20)),Ui=0;function Tr(){let u=pi();St.learnCnt.textContent=Ui+"/"+u,St.learnBar.style.width=Math.min(100,Ui/u*100)+"%",St.learnPill.classList.toggle("done",Ui>=u)}function $i(){try{Ui=o0()}catch{}Tr()}r0(u=>{let M=Ui;$i(),ye("answers"),u&&ye("answers_ok"),M<pi()&&Ui>=pi()&&It("\u4ECA\u5929\u7684\u5B78\u7FD2\u76EE\u6A19\u9054\u6210\u4E86\uFF01\u597D\u68D2\uFF01")});function Xo(){let u=document.getElementById("pinbox"),M=window.KSParentPin;if(u.innerHTML="",!M||!M.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u6539\u6BCF\u65E5\u76EE\u6A19\u8981\u5BB6\u9577\u5BC6\u78BC\u3002\u8ACB\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let R=P("input",{class:"typein",type:"password",inputmode:"numeric",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),I=P("input",{class:"typein",type:"number",min:"5",max:"100",value:String(pi()),"aria-label":"\u6BCF\u65E5\u984C\u6578"}),D=()=>{if(!M.verify(R.value.trim())){It("\u5BC6\u78BC\u4E0D\u5C0D"),R.value="";return}Ns("hw_daily_goal",String(Math.max(5,Math.min(100,+I.value||20)))),Tr(),It("\u6BCF\u65E5\u76EE\u6A19\u6539\u6210 "+pi()+" \u984C"),Rr()};[R,I].forEach(X=>X.addEventListener("keydown",rt=>{rt.stopPropagation(),rt.key==="Enter"&&D()})),u.append(P("div",{class:"pin-ask"},P("p",{},"\u5BB6\u9577\uFF1A\u6BCF\u5929\u8981\u7B54\u5E7E\u984C\uFF085\u2013100\uFF09"),P("div",{class:"typerow"},R,I,P("button",{class:"btn",onclick:D},"\u78BA\u5B9A")))),setTimeout(()=>R.focus(),50)}function Us(u,M,R,I){ye("placed"),I==="torch"&&ye("place:torch");let D=h.recentPlaced||(h.recentPlaced=[]);D.push([u,M,R]),D.length>80&&D.shift(),!N.done.house&&vm(D,u,M,R)>=30&&ye("house")}function qo(){let u=!1;for(let M of mi())N.stats["boss:"+M]||(N.stats["boss:"+M]=1,u=!0);u&&ye("boss",0)}let Cr=C.coins;function Dn(){C.coins>Cr&&un("coin"),Cr=C.coins,St.coins.textContent=C.coins}let Yo="";function ys(){let u=Gf(O.hp),M=u.join();M!==Yo&&(Yo=M,St.hearts.innerHTML="",u.forEach(R=>St.hearts.append(P("i",{class:"ht "+R}))))}function $o(u){if(h.dead||u<=0||!t.damage)return;let M=u,R=Oo(h.armor,f);if(u=xf(u,R),R&&(gf(h.armor,h.armorDur,f,M).forEach(X=>It(`\u4F60\u7684${f.name(X)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),Xe(),h.dirtyMeta=!0),u<=0)return;let I=kf(O,u);ys(),h.dirtyMeta=!0,un("hurt"),St.flash.classList.remove("on"),St.flash.offsetWidth,St.flash.classList.add("on"),I&&Zo()}function Zo(){Dr(!0),h.dead=!0,Wn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="dead";let u=St.ov;u.innerHTML="",u.hidden=!1,u.append(P("div",{class:"panel start"},P("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),P("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),P("button",{class:"btn big",onclick:w},h.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function w(){let u=Hf(h.bed,Dt,!!h.bed&&e==="overworld");h.p={x:u.x,y:u.y,z:u.z},h.v={x:0,y:0,z:0},h.fallTop=u.y,O.hp=20,h.dead=!1,ys(),Be(),h.dirtyMeta=!0,It(h.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function k(){St.hotbar.innerHTML="";for(let M=0;M<9;M++){let R=S.slots[M];St.hotbar.append(P("button",{class:"slot"+(M===h.sel?" on":""),"aria-label":R?f.name(R.id):"\u7A7A\u683C",onpointerdown:I=>{I.stopPropagation(),h.sel=M,k()}},R?P("img",{src:xt[R.id],alt:""}):null,R&&R.count>1?P("span",{class:"cnt"},R.count):null,it(R),P("span",{class:"key"},M+1)))}let u=S.slots[h.sel];St.selName.textContent=u?f.name(u.id):""}function it(u){let M=b0(u,f);return!M||M.left>=M.max?null:P("span",{class:"dur"+(M.frac<.25?" low":"")},P("i",{style:"width:"+Math.round(M.frac*100)+"%"}))}function Q(u=4){let M=new Set,R=Math.floor(h.p.x),I=Math.floor(h.p.y),D=Math.floor(h.p.z);for(let X=-u;X<=u;X++)for(let rt=-u;rt<=u;rt++)for(let ft=-u;ft<=u;ft++){let ht=at.get(R+ft,I+X,D+rt);ht&&M.add(f.get(ht).id)}return M}let j=()=>({near:Q(),owned:new Set(C.owned)}),Bt=-1,Ot=null,Nt=null,Wt=u=>u==="inv"?S:u==="chest"?Z[Nt]:null,Jt=(u,M)=>u==="armor"?h.armor[M]?{id:h.armor[M],count:1,dur:h.armorDur[M]}:null:Wt(u).slots[M];function de(u,M,R){if(!Ot){Jt(u,M)&&(Ot={c:u,i:M}),R();return}let I=Ot;if(Ot=null,I.c===u&&I.i===M){R();return}if(u==="armor"||I.c==="armor"){let[D,X,rt,ft]=u==="armor"?[I.c,I.i,u,M]:[u,M,I.c,I.i];if(D==="armor"){R();return}let ht=Wt(D),Mt=ht.slots[X],Gt=Mt&&f.get(Mt.id),ie=h.armor[ft];if(Mt&&!(Gt.armor&&Gt.armor.slot===ft)){It("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),R();return}let ne=h.armorDur[ft],Pe=ie?Number.isFinite(ne)?{id:ie,count:1,dur:ne}:{id:ie,count:1}:null;Mt?(h.armor[ft]=Mt.id,h.armorDur[ft]=Number.isFinite(Mt.dur)?Mt.dur:null,Mt.count>1?(Mt.count--,Pe&&wn(ht,ie,1,v)):ht.slots[X]=Pe):ie&&(h.armor[ft]=null,h.armorDur[ft]=null,ht.slots[X]=Pe),Xe(),h.dirtyMeta=!0,k(),R();return}I.c===u?Bu(Wt(u),I.i,M,v):ku(Wt(I.c),I.i,Wt(u),M,v),h.dirtyMeta=!0,k(),R()}let pe=(u,M,R,I="")=>{let D=Jt(u,M),X=Ot&&Ot.c===u&&Ot.i===M;return P("button",{class:"slot"+(X?" pick":"")+I,title:D?f.name(D.id):"",onclick:()=>de(u,M,R)},D?P("img",{src:xt[D.id],alt:""}):null,D&&D.count>1?P("span",{class:"cnt"},D.count):null,it(D))},qt=["\u982D","\u8EAB","\u817F","\u8173"];function Te(u){let M=Oo(h.armor,f);return P("div",{class:"armor-row"},qt.map((R,I)=>P("div",{class:"armor-slot"},pe("armor",I,u),P("small",{},R))),P("small",{class:"muted"},`\u8B77\u7532 ${M} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,M*4)}%\uFF09`))}function Xe(){if(St.armor){let u=Oo(h.armor,f);St.armor.textContent=u?`\u8B77\u7532 ${u}`:""}}function De(){let u=St.ov;u.innerHTML="",u.hidden=!1;let M=Z[Nt]||(Z[Nt]=Io(27)),R=P("div",{class:"inv-grid"});for(let X=0;X<27;X++)R.append(pe("chest",X,De));let I=P("div",{class:"inv-grid"});for(let X=9;X<36;X++)I.append(pe("inv",X,De));let D=P("div",{class:"inv-grid hbrow"});for(let X=0;X<9;X++)D.append(pe("inv",X,De," hb"));return u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u7BB1\u5B50"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),R,P("h3",{},"\u80CC\u5305"),I,D)),M}function Ae(){let u=St.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"inv-grid"}),R=ft=>pe("inv",ft,Ae,ft<9?" hb":"");for(let ft=9;ft<36;ft++)M.append(R(ft));let I=P("div",{class:"inv-grid hbrow"});for(let ft=0;ft<9;ft++)I.append(R(ft));let D=P("div",{class:"craft"},P("h3",{},"\u5408\u6210"));if(t.creative){let ft=P("div",{class:"craft"},P("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),P("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),ht=P("div",{class:"cat-grid"});m0(f).forEach(Mt=>ht.append(P("button",{class:"slot",title:f.name(Mt),onclick:()=>{S.slots[h.sel]={id:Mt,count:64},h.dirtyMeta=!0,k(),Ae(),It(`${f.name(Mt)} \u653E\u9032\u7B2C ${h.sel+1} \u683C`)}},P("img",{src:xt[Mt],alt:""})))),ft.append(ht),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),M,I),ft)));return}let X=j(),rt={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};_.forEach(ft=>{let ht=mc(S,ft,X),Mt=ht.ok;ft.blueprint&&ht.reason==="blueprint"&&!Object.keys(ft.in).some(Gt=>Gt!=="stick"&&di(S,Gt)>0)||D.append(P("div",{class:"rcp"+(Mt?"":" no")},P("img",{src:xt[ft.out.id],alt:""}),P("div",{class:"rcp-t"},P("b",{},`${ft.name_zh} \xD7${ft.out.count}`),P("small",{},Object.keys(ft.in).map(Gt=>`${f.name(Gt)} ${di(S,Gt)}/${ft.in[Gt]}`).join("\u3001")+(rt[ht.reason]?"\u3000\xB7 "+rt[ht.reason]:""))),P("button",{class:"btn small",onclick:()=>{let Gt=zu(S,ft,v,j());Gt.ok?(It(`\u505A\u597D\u4E86\uFF1A${ft.name_zh} \xD7${ft.out.count}`),h.dirtyMeta=!0,ye("craft:"+ft.out.id)):It({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Gt.reason]||"\u6750\u6599\u4E0D\u5920"),Ae(),k()}},"\u88FD\u4F5C")))}),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),Te(Ae),M,I),D)))}let ln=Am(f);function Ht(){let u=St.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"shop"}),R=U0(V,mi());ln.filter(I=>!I.id.startsWith("portal_")||R&&I.id===R.block).forEach(I=>M.append(P("div",{class:"offer"+(I.locked?" locked":"")},P("img",{src:xt[I.id],alt:""}),P("div",{class:"of-t"},P("b",{},`${I.name_zh}${I.qty>1?" \xD7"+I.qty:""}`),P("small",{},I.locked?`\uFF08${I.locked}\uFF09`:`${I.price} \u91D1\u5E63${I.desc?"\u3000"+I.desc:""}`)),br(C,I.id)?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",disabled:I.locked?!0:null,onclick:()=>fn(I)},I.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5546\u5E97\u3000",P("span",{class:"coin"}),` ${C.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),M))}function fn(u){let M=Em(C,S,u,v);M.ok?(ye("bought"),ye("buy:"+u.id),It(u.blueprint?`\u62FF\u5230 ${u.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${u.name_zh} \xD7${u.qty}`),h.dirtyMeta=!0,Dn(),k(),An()):It({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[M.reason]||"\u8CB7\u4E0D\u4E86"),Ht()}let ve=null;function dn(){let u=St.ov,M=q[ve]||(q[ve]=Lf());u.innerHTML="",u.hidden=!1;let R=M.jobs[0],I=P("div",{class:"shop"});ot.forEach(X=>{let rt=di(S,X.in);I.append(P("div",{class:"offer"+(rt?"":" locked")},P("img",{src:xt[X.in],alt:""}),P("div",{class:"of-t"},P("b",{},`${f.name(X.in)} \u2192 ${f.name(X.out)}`),P("small",{},`\u6709 ${rt} \u500B \xB7 \u6BCF\u500B ${X.time} \u79D2`)),P("button",{class:"btn small",onclick:()=>{let ft=Df(M,S,X,Ct);ft.ok||It(ft.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),h.dirtyMeta=!0,k(),dn()}},"\u653E\u9032\u53BB")))});let D=Object.values(M.done).reduce((X,rt)=>X+rt,0);u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u7194\u7210"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,M.fuel-M.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${di(S,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${Ct} \u500B\uFF09`),P("div",{class:"furnace-st"},R?`\u6B63\u5728\u71D2\uFF1A${f.name(R.in)}\uFF08\u9084\u8981 ${Math.ceil(R.left)} \u79D2\uFF0C\u6392\u968A ${M.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),P("div",{class:"row"},P("button",{class:"btn",disabled:D?null:!0,onclick:()=>{let X=Uf(M,S,v);X&&(It(`\u62FF\u51FA ${X} \u500B`),ye("smelted",X)),h.dirtyMeta=!0,k(),dn()}},`\u62FF\u51FA\u4F86\uFF08${D}\uFF09`)),I))}let Nn=null,jn=(u,M)=>{try{return JSON.parse(localStorage.getItem(u)||"null")||M}catch{return M}},mi=()=>N0(jn("hw_portal_rewards",[]),jn("hi_save",null),V),Ne='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function Ye(){let u=V.find(D=>D.map===Nn),M=St.ov;if(M.innerHTML="",M.hidden=!1,!u){Be();return}let R=Object.keys(u.reward.items).map(D=>`${f.name(D)} \xD7${u.reward.items[D]}`).join("\u3001"),I=Xf(u.map,V,mi());if(!I.ok){M.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("div",{class:"padlock",html:Ne}),P("p",{class:"big"},`\u5148\u6253\u5012 ${I.need.boss_zh} \u624D\u80FD\u9032\u5165`),P("p",{class:"muted"},`\u5F9E\u300C${I.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${I.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Be},"\u77E5\u9053\u4E86"))));return}M.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${u.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${u.reward.coins} \u91D1\u5E63\u3001${R}\u3002`),P("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),P("div",{class:"row"},P("button",{class:"btn big",onclick:async()=>{await An(),h.leaving=P0(u.map),location.href=h.leaving}},"\u9032\u5165"),P("button",{class:"btn ghost",onclick:Be},"\u5148\u4E0D\u8981"))))}function Gn(){if(!t.portals)return 0;let u;try{u=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{u=[]}let M=L0(u,K);for(let R of M){let I=D0(R,V,S,C,v);if(K.push(R.id),!!I.ok){for(let D in I.leftovers)for(let X=0;X<I.leftovers[D];X++)Yt(D,h.p.x,h.p.y+1,h.p.z);It(`\u5F9E${I.name_zh}\u5E36\u56DE\u4F86\uFF1A${I.coins} \u91D1\u5E63\u3001${Object.keys(I.items).map(D=>f.name(D)+" \xD7"+I.items[D]).join("\u3001")}`)}}return M.length&&(Dn(),k(),h.dirtyMeta=!0,An()),qo(),M.length}let Ce=null;function gi(u){Ce=u,u.busy=!0,pn("trade")}function xi(){let u=Ce,M=St.ov;if(!u)return Be();M.innerHTML="",M.hidden=!1;let R=u.role,I=hf(),D=P("div",{class:"shop"});R.prof.offers.forEach(rt=>{let ft=rt.blueprint||rt.give,ht=!!rt.blueprint,Mt=ht&&f.blueprints.find(ie=>ie.id===rt.blueprint),Gt=ht&&br(C,rt.blueprint);D.append(P("div",{class:"offer"},P("img",{src:xt[ft],alt:""}),P("div",{class:"of-t"},P("b",{},ht?Mt.name_zh:`${f.name(ft)}${rt.count>1?" \xD7"+rt.count:""}`),P("small",{},`${rt.price} \u91D1\u5E63${ht?"\u3000"+(Mt.desc||""):""}`)),Gt?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",onclick:()=>{let ie=h0(C,S,rt,v);ie.ok?(un("trade"),ye("traded"),ye("bought"),It(ht?`\u62FF\u5230 ${Mt.name_zh}\uFF01`:`\u8CB7\u5230 ${f.name(ft)} \xD7${rt.count}`),h.dirtyMeta=!0,Dn(),k(),An()):It({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[ie.reason]||"\u8CB7\u4E0D\u4E86"),xi()}},"\u8CFC\u8CB7")))});let X=P("div",{class:"quests"});R.quests.forEach(rt=>{let ft=cf(st,rt,I),ht=Object.keys(rt.reward.items||{}).map(Mt=>`${f.name(Mt)} \xD7${rt.reward.items[Mt]}`).join("\u3001");X.append(P("div",{class:"offer quest"+(ft?" locked":"")},P("div",{class:"of-t"},P("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+rt.title_zh),P("small",{},`${rt.desc}\uFF0C\u7B54\u5C0D ${rt.need} \u984C \u2192 ${rt.reward.coins} \u91D1\u5E63\u3001${ht}`)),ft?P("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):P("button",{class:"btn small",onclick:()=>{h.overlay="quest",l0(St.ov,{quest:rt,onDone:Mt=>{if(h.overlay="trade",Mt>=0){let Gt=u0(st,rt,Mt,I,C,S,v);if(Gt.ok){for(let ie in Gt.leftovers)for(let ne=0;ne<Gt.leftovers[ie];ne++)Yt(ie,h.p.x,h.p.y+1,h.p.z);It(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Gt.coins} \u91D1\u5E63\u3001${ht}`),Dn(),k(),h.dirtyMeta=!0,An(),h.stats.quests=(h.stats.quests||0)+1,ye("quests")}else It(`\u7B54\u5C0D ${Mt} \u984C\uFF0C\u8981 ${rt.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}xi()}})}},"\u63A5\u59D4\u8A17")))}),M.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6751\u6C11\u30FB${R.prof.name_zh}\u3000`,P("span",{class:"coin"}),` ${C.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("h3",{},"\u4EA4\u6613"),D,P("h3",{},"\u82F1\u6587\u59D4\u8A17"),P("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),X))}function Rr(){let u=St.ov;u.innerHTML="",u.hidden=!1;let M=P("b",{},at.rd),R=P("input",{type:"range",min:2,max:6,step:1,value:at.rd,oninput:I=>{M.textContent=I.target.value},onchange:I=>{let D=+I.target.value;at.setRenderDistance(D),W.far=D*16+40,W.updateProjectionMatrix(),Ns("hw_rd",D)}});u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u8A2D\u5B9A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",M,R),P("label",{class:"set"},"\u97F3\u6A02",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:I=>wc({music:+I.target.value,muted:!1})})),P("label",{class:"set"},"\u97F3\u6548",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:I=>{wc({sfx:+I.target.value,muted:!1}),un("place","wood")}})),t.creative?P("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",P("input",{type:"checkbox",checked:_s("hw_weather","on")!=="off"?!0:null,onchange:I=>Ns("hw_weather",I.target.checked?"on":"off")})):null,P("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:G0},"\u91CD\u7F6E\u4E16\u754C"),t.creative?P("button",{class:"btn",onclick:()=>Pc("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):P("button",{class:"btn",onclick:H0},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Xo},`\u6BCF\u65E5\u5B78\u7FD2\u76EE\u6A19\uFF1A${pi()} \u984C\uFF08\u5BB6\u9577\uFF09`)),P("div",{id:"pinbox"}),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:()=>{Gu(A),h.dirtyMeta=!0,Be(),Hc(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),P("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),P("p",{},P("a",{class:"home-link",href:"../../#s/game",onclick:()=>{An()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),P("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+($.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+Rc)))}async function Pc(u){await An(),Ns("hw_mode",u),h.resetting=!0,location.reload()}function H0(){let u=document.getElementById("pinbox"),M=window.KSParentPin;if(u.innerHTML="",!M||!M.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let R=P("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),I=()=>{let D=d0(M,R.value.trim());D.ok?Pc("creative"):(It(D.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),R.value="")};R.addEventListener("keydown",D=>{D.stopPropagation(),D.key==="Enter"&&I()}),u.append(P("div",{class:"pin-ask"},P("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),P("div",{class:"typerow"},R,P("button",{class:"btn",onclick:I},"\u78BA\u5B9A")))),setTimeout(()=>R.focus(),50)}async function G0(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){h.resetting=!0,Ns("hw_dim","overworld");try{await Qm(["hw_coins"])}catch(u){console.warn(u)}location.reload()}}function pn(u){document.pointerLockElement&&document.exitPointerLock(),h.overlay=u,Wn(),ye("open:"+u,1),u==="inv"?(Bt=-1,Ot=null,Ae()):u==="shop"?Ht():u==="set"?Rr():u==="furnace"?dn():u==="portal"?Ye():u==="trade"?xi():u==="chest"?(Ot=null,De()):u==="map"?kc():u==="ach"?eg():u==="quests"?cg():u==="quiz"&&a0(St.ov,{onAnswer:()=>ye("stele_answers"),onReward:M=>{kn(C,M),Dn(),h.dirtyMeta=!0,An()},onClose:()=>{h.overlay=null}})}function Be(){St.ov.hidden=!0,St.ov.innerHTML="",h.overlay=null,Ce&&(Ce.busy=!1,Ce=null)}let Yf=()=>{St.btnSnd.textContent=Bo()?"\u{1F507}":"\u{1F50A}"};St.btnSnd.onclick=()=>{bc(),bf(),Yf()},["pointerdown","keydown"].forEach(u=>addEventListener(u,()=>bc(),{capture:!0,once:!0})),Yf(),St.btnInv.onclick=()=>h.overlay==="inv"?Be():pn("inv"),St.btnShop.onclick=()=>h.overlay==="shop"?Be():pn("shop"),St.btnSet.onclick=()=>h.overlay==="set"?Be():pn("set"),St.btnView.onclick=()=>$f(),St.bRide.onclick=()=>Dr(),St.bMap.onclick=()=>h.overlay==="map"?Be():pn("map"),St.bQuest.onclick=()=>h.overlay==="quests"?Be():pn("quests"),St.bAch.onclick=()=>h.overlay==="ach"?Be():pn("ach");function $f(){h.view=h.view==="fp"?"tp":"fp",It(h.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Zf(){h.ride||(h.fly=!h.fly,h.v.y=0,St.root.classList.toggle("flying",h.fly),It(h.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let Zi=new J;function Lc(){let u=Math.cos(h.pitch);return{x:-Math.sin(h.yaw)*u,y:Math.sin(h.pitch),z:-Math.cos(h.yaw)*u}}let Jo=()=>({x:h.p.x,y:h.p.y+1.62+h.eyeOff+(h.ride?z0[h.ride.kind]:0),z:h.p.z}),Jf=u=>u&&!f.flat.liquid[u],Dc=u=>f.flat.boxes[u]||(f.flat.shape[u]===4?k0:f.flat.shape[u]===8?V0:null);function Qn(u,M,R){if(u==="screen"){Zi.set(M/innerWidth*2-1,-(R/innerHeight)*2+1,.5).unproject(W).sub(W.position).normalize();let rt=W.position,ft=h.view==="tp"?rt.distanceTo(new J(h.p.x,h.p.y+1.62,h.p.z)):0,ht={x:rt.x,y:rt.y,z:rt.z},Mt={x:Zi.x,y:Zi.y,z:Zi.z};h.lastRay={o:ht,d:Mt};let Gt=yr(ht,Mt,Ic+1+ft,Hn,Jf,Dc);return Gt&&(Gt.at={x:ht.x+Mt.x*Gt.dist,y:ht.y+Mt.y*Gt.dist,z:ht.z+Mt.z*Gt.dist}),Gt}let I=Jo(),D=Lc();h.lastRay={o:I,d:D};let X=yr(I,D,Ic,Hn,Jf,Dc);return X&&(X.at={x:I.x+D.x*X.dist,y:I.y+D.y*X.dist,z:I.z+D.z*X.dist}),X}function Wn(){h.mining.active=!1,h.mining.k="",h.mining.t=0,se.visible=!1}function W0(u,M,R){un("door");let I=f.get(at.get(u,M,R)),D=f.get(I.openAs||I.closeAs);if(!D)return;let X=ft=>{let ht=f.get(ft);return ht&&ht.interact==="door"},rt=M;for(;X(at.get(u,rt-1,R));)rt--;for(let ft=rt;X(at.get(u,ft,R));ft++)at.set(u,ft,R,D.n);h.dirtyMeta=!0}let Kf=()=>{let u=S.slots[h.sel];return u?f.toolOf(u.id):null};function X0(u){let M=u.n,R=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Ac(f.get(M),Kf());if(!at.set(u.x,u.y,u.z,0))return;B.sendBlock(u.x,u.y,u.z,0);let I=u.x+","+u.y+","+u.z,D=f.get(M);if(Z[I]){if(t.drops){for(let ht of Z[I].slots)if(ht)for(let Mt=0;Mt<ht.count;Mt++)Yt(ht.id,u.x+.5,u.y+.4,u.z+.5)}delete Z[I]}if(D&&D.crop){if(delete nt[I],t.drops)for(let ht of pf(D.stage|0))for(let Mt=0;Mt<ht.n;Mt++)Yt(ht.id,u.x+.5,u.y+.3,u.z+.5);h.stats.harvested=(h.stats.harvested||0)+(D.stage===3?1:0),D.stage===3&&ye("harvested"),h.dirtyMeta=!0;return}let X=R.harvest?f.dropOf(M):null;X&&Yt(X,u.x+.5,u.y+.4,u.z+.5),t.drops&&D.pattern==="leaves"&&Math.random()<(d.appleChance||.1)?Yt("apple",u.x+.5,u.y+.4,u.z+.5):!R.harvest&&!R.creative&&It(`${f.name(M)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let rt=at.get(u.x,u.y+1,u.z);if(f.flat.plant[rt]){delete nt[u.x+","+(u.y+1)+","+u.z],at.set(u.x,u.y+1,u.z,0);let ht=t.drops&&f.dropOf(rt);ht&&Yt(ht,u.x+.5,u.y+1.3,u.z+.5)}if(f.get(M).interact==="door")for(let ht of[-1,1]){let Mt=at.get(u.x,u.y+ht,u.z);f.get(Mt)&&f.get(Mt).interact==="door"&&at.set(u.x,u.y+ht,u.z,0)}let ft=u.x+","+u.y+","+u.z;if(h.bed&&h.bed.x===u.x&&h.bed.y===u.y&&h.bed.z===u.z&&(h.bed=null,It("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),q[ft]){let ht=Ff(q[ft]);for(let Mt in ht)for(let Gt=0;Gt<ht[Mt];Gt++)Yt(Mt,u.x+.5,u.y+.4,u.z+.5);delete q[ft]}if(R.usesTool){let ht=zo(S,h.sel,f);ht.broke&&It(`\u4F60\u7684${f.name(ht.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),k()}h.dirtyMeta=!0,h.stats.mined++,un("break",wr(D)),ye("mined"),ye("mine:"+(D.pattern==="log"?"wood":D.id))}function Ir(u){let M=S.slots[h.sel],R=M&&f.get(M.id);if(R&&R.food)return t.damage?(_f(O,R.food,20)?(un("eat"),Jn(S,h.sel,1),ys(),k(),h.dirtyMeta=!0,It(`\u5403\u4E86${R.name_zh}\uFF0C\u597D\u98FD\uFF01`),h.stats.ate=(h.stats.ate||0)+1):It("\u73FE\u5728\u4E0D\u9913"),!0):(It("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(R&&R.id==="shadow_flint"){if(!t.portals)return It("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let Vt=f.num("dark_crystal"),jt=u&&u.n===Vt?Uu((Le,$e,Xn)=>at.get(Le,$e,Xn),u.x,u.y,u.z,Vt):null;if(!jt)return It("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let be=f.num("shadow_portal");for(let Le of jt)at.set(Le[0],Le[1],Le[2],be);return ye("portal_lit"),Jn(S,h.sel,1),k(),h.dirtyMeta=!0,It(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(R&&R.id==="fishing_rod")return h.fish?j0():K0(),!0;if(R&&R.place==="boat"){if(h.ride)return It("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Vt=h.lastRay,jt=Vt&&yr(Vt.o,Vt.d,Ic+1,Hn,Le=>f.flat.liquid[Le]||f.flat.solid[Le]);if(!jt||!f.flat.liquid[jt.n]||at.get(jt.x,jt.y+1,jt.z))return It("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;h.p={x:jt.x+.5,y:jt.y+1-.15,z:jt.z+.5};let be=Nc("boat",h.p,h.yaw,{y:jt.y+1});return t.consume&&Jn(S,h.sel,1),k(),Lr("boat",{y:jt.y+1,veh:be}),!0}if(R&&R.place==="minecart"){if(h.ride)return It("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Vt=u&&f.get(u.n);if(!Vt||!Vt.rail)return It("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let jt=Au(Vt.rail,u.x,u.y,u.z,-Math.sin(h.yaw),-Math.cos(h.yaw),$e=>!!Co(Ni,u.x,u.y,u.z,$e,Vt.rail)),be=uc(jt),Le=Nc("minecart",{x:be.x,y:be.y+.05,z:be.z},be.yaw,{st:jt});return t.consume&&Jn(S,h.sel,1),k(),Lr("minecart",{st:jt,veh:Le}),!0}if(!u)return!1;let I=f.get(u.n);if(I&&I.interact==="chest")return un("chest"),Nt=u.x+","+u.y+","+u.z,pn("chest"),!0;let D=R&&f.toolOf(M.id);if(D&&D.type==="hoe"&&df(I.id,!at.get(u.x,u.y+1,u.z)||f.flat.plant[at.get(u.x,u.y+1,u.z)])){if(at.set(u.x,u.y+1,u.z,0),at.set(u.x,u.y,u.z,f.num("farmland")),t.consume){let Vt=zo(S,h.sel,f);Vt.broke&&It(`\u4F60\u7684${f.name(Vt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return k(),h.dirtyMeta=!0,!0}if(R&&R.place==="crop")return I.id!=="farmland"||u.face[1]!==1||at.get(u.x,u.y+1,u.z)?(It("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(at.set(u.x,u.y+1,u.z,f.num("wheat_0")),nt[u.x+","+(u.y+1)+","+u.z]={t:Date.now(),wet:mf(Hn,Vt=>f.flat.liquid[Vt]===1,u.x,u.y,u.z)},t.consume&&Jn(S,h.sel,1),k(),h.dirtyMeta=!0,h.stats.planted=(h.stats.planted||0)+1,!0);let X=f.get(u.n);if(X&&X.interact==="quiz")return t.coins?(pn("quiz"),!0):(It("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let rt=S.slots[h.sel]&&f.get(S.slots[h.sel].id).placeable;if(X&&X.interact==="door")return W0(u.x,u.y,u.z),!0;if(X&&X.interact==="portal"&&!rt&&!t.portals)return It("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(X&&X.interact==="portal"&&!rt)return Nn=X.portal,pn("portal"),!0;if(X&&X.interact==="bed"&&!rt&&e==="shadow")return It("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(X&&X.interact==="bed"&&!rt)return h.bed={x:u.x,y:u.y,z:u.z},h.dirtyMeta=!0,ye("bed"),It("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(X&&X.interact==="craft"&&!rt)return pn("inv"),!0;if(X&&X.interact==="furnace"&&!rt)return ve=u.x+","+u.y+","+u.z,pn("furnace"),!0;let ft=S.slots[h.sel];if(!ft)return It("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let ht=f.get(ft.id);if(!ht||!ht.placeable)return It(`${f.name(ft.id)} \u4E0D\u80FD\u653E`),!1;if(ht.place==="slab"&&ht.fullAs&&u.n===ht.n&&u.face[1]===1&&at.set(u.x,u.y,u.z,f.num(ht.fullAs)))return t.consume&&Jn(S,h.sel,1),k(),h.stats.placed++,h.dirtyMeta=!0,!0;let Mt=f.flat.plant[u.n]&&!f.flat.plant[ht.n],Gt=Mt?u.x:u.x+u.face[0],ie=Mt?u.y:u.y+u.face[1],ne=Mt?u.z:u.z+u.face[2];if(ie<0||ie>=64)return!1;let Pe=at.get(Gt,ie,ne);if(Pe&&!f.flat.liquid[Pe]&&!(Mt&&f.flat.plant[Pe]))return!1;let Re=.6/2;if(ht.solid&&Gt+1>h.p.x-Re&&Gt<h.p.x+Re&&ne+1>h.p.z-Re&&ne<h.p.z+Re&&ie+1>h.p.y&&ie<h.p.y+1.8)return!1;if(f.flat.plant[ht.n]&&!f.flat.solid[at.get(Gt,ie-1,ne)])return It(`${ht.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let tn=ht.n;if(ht.place==="slab"){let Vt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Vt>.5)&&f.get(ht.id+"_top")&&(tn=f.num(ht.id+"_top"))}else if(ht.place==="stairs"){let Vt=-Math.sin(h.yaw),jt=-Math.cos(h.yaw),be=Math.abs(Vt)>Math.abs(jt)?Vt>0?1:3:jt>0?2:0,Le=f.get(ht.id+["","_e","_s","_w"][be]);Le&&(tn=Le.n)}let he=null;if(ht.place==="rail"){if(!f.flat.solid[at.get(Gt,ie-1,ne)])return It("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let Vt=-Math.sin(h.yaw),jt=-Math.cos(h.yaw),be=hc(Ni,Gt,ie,ne,!!ht.powered,Math.abs(Vt)>Math.abs(jt)?"e":"n");tn=f.num(To(!!ht.powered,be.shape)),he=be.updates}if(!at.set(Gt,ie,ne,tn))return!1;if(B.sendBlock(Gt,ie,ne,tn),he)for(let[Vt,jt,be,Le]of he){let $e=Ni(Vt,jt,be);$e&&at.set(Vt,jt,be,f.num(To($e.powered,Le)))}return un("place",wr(ht)),ht.interact==="door"&&!at.get(Gt,ie+1,ne)&&at.set(Gt,ie+1,ne,ht.n),t.consume&&Jn(S,h.sel,1),h.dirtyMeta=!0,k(),h.stats.placed++,Us(Gt,ie,ne,ht.id),!0}let Pr={},Ko=u=>Pr[u]||(Pr[u]=(()=>{let M=new Mn({color:u});return M.userData.base=new ce(u),M})());function q0(u){let M=new mn,R=(I,D,X,rt,ft,ht,Mt)=>{let Gt=new Oe(new Qe(I,D,X),Ko(rt));Gt.position.set(ft,ht,Mt),M.add(Gt)};if(u==="boat"){R(.9,.08,1.5,"#8C6640",0,.04,0);for(let I of[-1,1])R(.08,.3,1.5,"#A97E4E",I*.45,.19,0),R(.9,.3,.08,"#A97E4E",0,.19,I*.75);R(.9,.06,.25,"#C49A63",0,.25,.1)}else{R(.9,.08,1.1,"#5E6660",0,.12,0);for(let I of[-1,1])R(.08,.45,1.1,"#8C8A84",I*.45,.35,0),R(.9,.45,.08,"#8C8A84",0,.35,I*.55),R(.06,.18,.18,"#26302A",I*.47,.1,.35),R(.06,.18,.18,"#26302A",I*.47,.1,-.35)}return M}h.vehicles=[];function Nc(u,M,R,I){let D=q0(u);D.rotation.order="YXZ",D.position.set(M.x,M.y,M.z),D.rotation.y=R,gt.add(D);let X=Object.assign({kind:u,p:{x:M.x,y:M.y,z:M.z},yaw:R,obj:D,hits:0},I);return X.m={kind:"vehicle",veh:X,id:-2},h.vehicles.push(X),X}function Uc(u){h.ride||h.dead||(h.p={x:u.p.x,y:u.p.y,z:u.p.z},u.kind==="boat"?Lr("boat",{y:u.y,veh:u}):(u.st.v=0,Lr("minecart",{st:u.st,veh:u})))}function Fc(u){if(!(h.ride&&h.ride.veh===u)){if(u.hits++,u.hits<2){It("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),u.obj.position.y=u.p.y+.15,setTimeout(()=>{u.obj.position.y=u.p.y},120);return}h.vehicles.splice(h.vehicles.indexOf(u),1),gt.remove(u.obj),Yt(u.kind,u.p.x,u.p.y+.5,u.p.z),h.dirtyMeta=!0,It(u.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let Fs=new mn,jf=new Mn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),Oc=[0,1].map(()=>{let u=new Oe(new Qe(1,1,1),jf);return Fs.add(u),u});Fs.visible=!1,gt.add(Fs);function Y0(u){let M=S.slots[h.sel],R=M&&f.get(M.id);if(!u||!R||!R.placeable)return null;let I=f.get(u.n);if(I&&["chest","quiz","door"].includes(I.interact))return null;if(R.place==="slab"&&R.fullAs&&u.n===R.n&&u.face[1]===1)return{x:u.x,y:u.y,z:u.z,n:f.num(R.fullAs)};let D=f.flat.plant[u.n]&&!f.flat.plant[R.n],X=D?u.x:u.x+u.face[0],rt=D?u.y:u.y+u.face[1],ft=D?u.z:u.z+u.face[2];if(rt<0||rt>=64)return null;let ht=at.get(X,rt,ft);if(ht&&!f.flat.liquid[ht]&&!(D&&f.flat.plant[ht]))return null;let Mt=R.n;if(R.place==="slab"){let Gt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Gt>.5)&&f.get(R.id+"_top")&&(Mt=f.num(R.id+"_top"))}else if(R.place==="stairs"){let Gt=-Math.sin(h.yaw),ie=-Math.cos(h.yaw),ne=Math.abs(Gt)>Math.abs(ie)?Gt>0?1:3:ie>0?2:0,Pe=f.get(R.id+["","_e","_s","_w"][ne]);Pe&&(Mt=Pe.n)}else if(R.place==="rail"){if(!f.flat.solid[at.get(X,rt-1,ft)])return null;let Gt=-Math.sin(h.yaw),ie=-Math.cos(h.yaw);Mt=f.num(To(!!R.powered,hc(Ni,X,rt,ft,!!R.powered,Math.abs(Gt)>Math.abs(ie)?"e":"n").shape))}return{x:X,y:rt,z:ft,n:Mt}}function $0(u){let M=Y0(u);if(!M){Fs.visible=!1;return}let R=f.flat.shape[M.n],I=f.flat.boxes[M.n]||(R===4?k0:R===8?V0:R>=1&&R<=3?Fb:Ub);Oc.forEach((D,X)=>{let rt=I[X];D.visible=!!rt,rt&&(D.scale.set((rt[3]-rt[0])*.98,(rt[4]-rt[1])*.98,(rt[5]-rt[2])*.98),D.position.set(M.x+(rt[0]+rt[3])/2,M.y+(rt[1]+rt[4])/2,M.z+(rt[2]+rt[5])/2))}),Fs.visible=!0}function Qf(u){u.saddled=!0;let M=ut.get(u.id);if(!M)return;let R=new Oe(new Qe(.62,.1,.6),Ko("#5C3A24"));R.position.set(0,1.4,.05),M.add(R)}function Lr(u,M){let R=M.veh?M.veh.obj:null;h.ride=Object.assign({kind:u,obj:R,yaw:M.veh?M.veh.yaw:h.yaw},M),h.fly=!1,St.root.classList.remove("flying"),h.v={x:0,y:0,z:0},St.bRide.hidden=!1,Wn(),ye("ride:"+u),ye("ride"),It({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[u])}function Dr(u){let M=h.ride;if(M){if(h.ride=null,St.bRide.hidden=!0,M.veh&&(M.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},M.veh.yaw=M.yaw,M.st&&(M.st.v=0,M.veh.st=M.st)),M.kind==="horse"&&(M.m.riding=!1),M.kind==="minecart")h.p.y+=.2;else for(let[R,I]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let D={x:h.p.x+R,y:Math.floor(h.p.y+.5),z:h.p.z+I};if(am(D,ue)&&f.flat.solid[at.get(D.x,D.y-1,D.z)]){h.p=D;break}}h.v={x:0,y:0,z:0},h.fallTop=h.p.y,u||It("\u4E0B\u4F86\u4E86")}}function Z0(u){let M=S.slots[h.sel];if(!u.tame){M&&(M.id==="wheat"||M.id==="apple")?(t.consume&&Jn(S,h.sel,1),k(),u.fed=(u.fed||0)+1,u.fed>=3?(u.tame=!0,h.horseMob=u,h.dirtyMeta=!0,It("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):It(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${u.fed}/3\uFF09`)):It("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!u.saddled){M&&M.id==="saddle"?(t.consume&&Jn(S,h.sel,1),k(),Qf(u),h.horseMob=u,h.dirtyMeta=!0,It("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):It("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}h.ride||(u.riding=!0,h.p={x:u.p.x,y:u.p.y,z:u.p.z},Lr("horse",{m:u}),h.stats.rodeHorse=(h.stats.rodeHorse||0)+1)}function J0(u,M,R,I,D,X,rt){let ft=h.ride;if(ft.kind==="boat"){let ht=(I*R+X*M)*7,Mt=(D*R+rt*M)*7,Gt=1-Math.exp(-2.5*u);h.v.x+=(ht-h.v.x)*Gt,h.v.z+=(Mt-h.v.z)*Gt,h.v.y=0;let ie=(Re,tn)=>f.flat.liquid[at.get(Re,ft.y-1,tn)]===1&&!f.flat.solid[at.get(Re,ft.y,tn)],ne=h.p.x+h.v.x*u,Pe=h.p.z+h.v.z*u;ie(ne+Math.sign(h.v.x)*.6,h.p.z)?h.p.x=ne:h.v.x=0,ie(h.p.x,Pe+Math.sign(h.v.z)*.6)?h.p.z=Pe:h.v.z=0,h.p.y=ft.y-.15,Math.hypot(h.v.x,h.v.z)>.3&&(ft.yaw=Math.atan2(-h.v.x,-h.v.z))}else{Eu(ft.st,u,R,Ni);let ht=uc(ft.st);h.p.x=ht.x,h.p.z=ht.z,h.p.y=ht.y+.05,ft.yaw=ht.yaw,ft.pitch=ht.pitch,h.v.x=h.v.z=h.v.y=0}h.fallTop=h.p.y}let Bc=(()=>{let u=new mn,M=new Oe(new Qe(.16,.1,.16),Ko("#E0352B")),R=new Oe(new Qe(.16,.08,.16),Ko("#EFEBDD"));return M.position.y=.05,R.position.y=-.04,u.add(M,R),u.visible=!1,gt.add(u),u})();function K0(){let u=h.lastRay,M=u&&yr(u.o,u.d,Ic+3,Hn,R=>f.flat.liquid[R]||f.flat.solid[R]);return!M||!f.flat.liquid[M.n]||at.get(M.x,M.y+1,M.z)?(It("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(h.fish=Cu(Math.random),h.fish.at={x:M.x+.5,y:M.y+1,z:M.z+.5},Bc.visible=!0,It("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function zc(){h.fish=null,Bc.visible=!1}function j0(){let u=Iu(h.fish);if(zc(),u!=="catch"){It("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let M=d.fishing.loot,R=Pu(M,Math.random);if(R.coins&&!t.coins&&(R=M[0]),R.coins)kn(C,R.coins),Dn(),It(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${R.coins} \u91D1\u5E63`);else{let I=wn(S,R.id,R.n,v);for(let D=0;D<I;D++)Yt(R.id,h.p.x,h.p.y+1,h.p.z);It(R.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${f.name(R.id)} \xD7${R.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&zo(S,h.sel,f).broke&&It("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),k(),h.dirtyMeta=!0,un("pickup"),ye("fish"),R.treasure&&ye("treasure")}let Ji=2,jo=_s("hw_minimap","on")!=="off";function Q0(u){jo=u,Ns("hw_minimap",u?"on":"off"),St.mini.hidden=!u}St.mini.hidden=!jo;function tg(){let u=St.mini,M=u.getContext("2d");M.fillStyle="#D9D3C0",M.fillRect(0,0,u.width,u.height),z.draw(M,h.p.x,h.p.z,2,u.width,u.height),Du(M,u.width/2,u.height/2,h.yaw,7,"#E0352B")}function kc(){let u=St.ov;u.innerHTML="",u.hidden=!1;let M=Math.max(240,Math.min(innerWidth-60,760)),R=Math.max(200,Math.min(innerHeight-200,540)),I=P("canvas",{class:"bigmap",width:M,height:R}),D=I.getContext("2d");D.fillStyle="#D9D3C0",D.fillRect(0,0,M,R);let{x0:X,z0:rt}=z.draw(D,h.p.x,h.p.z,Ji,M,R),ft=(ne,Pe)=>[(ne-X)*Ji,(Pe-rt)*Ji],ht=(ne,Pe,Re,tn,he)=>{let[Vt,jt]=ft(ne,Pe);Vt<-20||jt<-20||Vt>M+20||jt>R+20||(D.fillStyle=tn,D.strokeStyle=tn,D.lineWidth=3,he==="roof"?(D.beginPath(),D.moveTo(Vt-8,jt+1),D.lineTo(Vt,jt-7),D.lineTo(Vt+8,jt+1),D.fill(),D.fillRect(Vt-5,jt+1,10,7)):he==="ring"?(D.beginPath(),D.arc(Vt,jt,6,0,7),D.stroke()):D.fillRect(Vt-5,jt-5,10,10),D.font="bold 12px sans-serif",D.textAlign="center",D.strokeStyle="#EFEBDD",D.strokeText(Re,Vt,jt-11),D.fillStyle="#26302A",D.fillText(Re,Vt,jt-11))},Mt=Math.max(M,R)/Ji;for(let ne of L.villages.around(h.p.x-Mt,h.p.z-Mt,h.p.x+Mt,h.p.z+Mt))z.explored(ne.x,ne.z)&&ht(ne.x,ne.z,"\u6751\u838A","#8C5A3A","roof");for(let ne of z.portals.values())ht(ne.x+.5,ne.z+.5,ne.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");ht(Dt.x,Dt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),h.bed&&ht(h.bed.x+.5,h.bed.z+.5,"\u5E8A","#E0352B");let[Gt,ie]=ft(h.p.x,h.p.z);Du(D,Gt,ie,h.yaw,9,"#E0352B"),u.append(P("div",{class:"panel map"},P("div",{class:"p-head"},P("h2",{},"\u5730\u5716"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),I,P("div",{class:"row"},P("button",{class:"btn small",onclick:()=>{Ji=Math.min(6,Ji+1),kc()}},"\u653E\u5927"),P("button",{class:"btn small",onclick:()=>{Ji=Math.max(1,Ji-1),kc()}},"\u7E2E\u5C0F"),P("label",{class:"set inline"},P("input",{type:"checkbox",checked:jo?!0:null,onchange:ne=>Q0(ne.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),P("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function eg(){let u=St.ov;u.innerHTML="",u.hidden=!1;let M=b.filter(I=>N.done[I.id]).length,R=P("div",{class:"ach-list"});b.forEach(I=>{let D=!!N.done[I.id];R.append(P("div",{class:"ach-item"+(D?" done":"")},P("i",{class:"badge"}),P("div",{},P("b",{},I.name_zh),P("small",{},I.desc_zh+(D?"\u3000\u2713":`\uFF08${ym(N,I)}/${I.need}\uFF09`)+(I.coins?`\u3000\u734E\u52F5 ${I.coins} \u91D1\u5E63`:"")))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6210\u5C31\u3000${M} / ${b.length}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),R))}async function ng(u){h.travelling||(h.travelling=!0,Dr(!0),zc(),Wn(),It(u==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await An(!0),Ns("hw_dim",u),h.resetting=!0,location.reload())}function Vc(){let u=h.boss;u&&(St.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${u.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${Uo[u.st.phase].name_zh}`,St.bossHp.style.width=Math.max(0,u.st.hp/No*100)+"%")}function ig(u){if(e!=="shadow"||N.stats.dragon)return;let M=fi,R=Math.hypot(h.p.x-M.x,h.p.z-M.z);if(!h.boss&&R<60&&at.ready(M.x,M.z)){let X=Om();gt.add(X),h.boss={g:X,st:Um(),p:{x:M.x+.5,y:ui+1.5,z:M.z+.5},m:{kind:"boss",id:-1},t:0}}let I=h.boss;if(!I)return;I.t+=u,I.g.position.set(I.p.x,I.p.y+Math.sin(I.t*1.6)*.25,I.p.z),I.g.rotation.y=Math.atan2(-(h.p.x-I.p.x),-(h.p.z-I.p.z)),Bm(I.g,I.t,u);let D=R<28;D===St.bossbar.hidden&&(St.bossbar.hidden=!D,D&&(Vc(),I.greeted||(I.greeted=!0,It("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function sg(){let u=h.boss;if(!u||u.busy)return;u.busy=!0,Wn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let M=Uo[u.st.phase],R=Go().slice(0,40).sort(()=>Math.random()-.5);lf(St.ov,{ids:u.st.retry.concat(R),types:M.types,modules:M.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${M.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(I,D,X)=>{h.overlay=null,u.busy=!1,I!=null&&td(I,D,X&&X.id)}})}function td(u,M,R){let I=h.boss;if(!I)return;let D=Fm(I.st,u,M,R);if(!u){let X=h.p.x-I.p.x,rt=h.p.z-I.p.z,ft=Math.hypot(X,rt)||1;h.v.x=X/ft*8,h.v.z=rt/ft*8,h.v.y=5,It("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),Vc();return}if(I.g.userData.hitT=.3,un("hit","stone"),D.done){rg();return}D.phaseUp!=null?(zm(I.g,D.phaseUp),It(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${D.phaseUp+1} \u968E\u6BB5\uFF1A${Uo[D.phaseUp].name_zh}`)):It(M?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),Vc()}function rg(){gt.remove(h.boss.g),h.boss=null,St.bossbar.hidden=!0,t.coins&&(kn(C,$u),Dn()),ye("dragon"),An(),og()}function og(){Wn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ending";let u=St.ov;u.innerHTML="",u.hidden=!1;let M=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${$u} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];u.append(P("div",{class:"ending"},P("div",{class:"paper sun"}),P("div",{class:"paper hill"}),P("div",{class:"paper hill b"}),P("div",{class:"credits"},P("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),M.map(R=>P("p",{},R)),P("button",{class:"btn big",onclick:Be},"\u7E7C\u7E8C\u5192\u96AA"))))}function ag(){if(!N.stats.village&&e==="overworld"){for(let u of L.villages.around(h.p.x-30,h.p.z-30,h.p.x+30,h.p.z+30))if(Math.hypot(u.x-h.p.x,u.z-h.p.z)<22){ye("village");break}}for(let u of Xu(A,m,U,hf())){if(h.dirtyMeta=!0,u.kind==="tut"){un("pickup"),A.tut.done&&It("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let M=t.coins?u.q.coins|0:0;M&&(kn(C,M),Dn()),It((u.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+u.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+u.q.text)+(M?`\u3000+${M} \u91D1\u5E63`:""))}Hc()}function lg(u){if(u==="lair")return e==="shadow"?{x:fi.x+.5,z:fi.z+.5}:null;if(e!=="overworld")return null;if(u==="stele"&&Dt.stele)return{x:Dt.stele.x+.5,z:Dt.stele.z+.5};if(u==="portal"&&Dt.portal)return{x:Dt.portal.x+.5,z:Dt.portal.z+.5};if(u==="village"){if(!h.vilHint||Date.now()-h.vilHint.t>3e3){let M=null,R=1/0;for(let I of L.villages.around(h.p.x-400,h.p.z-400,h.p.x+400,h.p.z+400)){let D=Math.hypot(I.x-h.p.x,I.z-h.p.z);D<R&&(R=D,M=I)}h.vilHint={t:Date.now(),v:M}}return h.vilHint.v?{x:h.vilHint.v.x,z:h.vilHint.v.z}:null}return null}let ed="";function Hc(u){let M=!A.tut.done&&m.tutorial[A.tut.step],R=Wu(A,m),I=M||R,D=M?A.tut.step+(h.touch?"t":"d"):"";if((u||D!==ed)&&(ed=D,St.tut.hidden=!M,St.tut.innerHTML="",M&&St.tut.append(P("b",{},`\u65B0\u624B\u6559\u5B78 ${A.tut.step+1}/${m.tutorial.length}`),P("span",{},M.text),P("small",{},h.touch?M.touch:M.desk),P("button",{class:"link",onclick:()=>{gc(A,m),h.dirtyMeta=!0,Hc(!0)}},"\u8DF3\u904E\u6559\u5B78"))),St.obj.hidden=!I||!h.started,!I)return;h.objTarget=lg(I.hint),St.objArrow.hidden=!h.objTarget;let X=h.objTarget?Math.round(Math.hypot(h.objTarget.x-h.p.x,h.objTarget.z-h.p.z)):0;St.objText.textContent=(M?"":"\u4E3B\u7DDA\uFF1A")+(M?M.text:R.text)+(h.objTarget&&X>4?`\uFF08\u7D04 ${X} \u683C\uFF09`:"")}function cg(){let u=St.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"quest-list"});m.main.forEach((I,D)=>M.append(P("div",{class:"quest-item"+(D<A.main?" done":D===A.main?" cur":"")},P("b",{},(D<A.main?"\u2713 ":"")+I.title),P("small",{},I.text+(I.coins&&t.coins?`\u3000\u734E\u52F5 ${I.coins} \u91D1\u5E63`:"")))));let R=P("div",{class:"quest-list"});(A.daily?A.daily.picks:[]).forEach(I=>{let D=m.daily.find(rt=>rt.id===I),X=A.daily.done.includes(I);R.append(P("div",{class:"quest-item"+(X?" done":" cur")},P("b",{},(X?"\u2713 ":"")+D.text),P("small",{},`${X?D.need:qu(A,m,U,I)} / ${D.need}`+(D.coins&&t.coins?`\u3000\u734E\u52F5 ${D.coins} \u91D1\u5E63`:""))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5192\u96AA\u624B\u518A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),R,P("h3",{},`\u4E3B\u7DDA\u3000${Math.min(A.main,m.main.length)} / ${m.main.length}`),M,P("p",{class:"muted"},A.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${A.tut.step+1} \u6B65`))),setTimeout(()=>{let I=u.querySelector(".quest-item.cur");I&&I.scrollIntoView&&I.scrollIntoView({block:"nearest"})},0)}addEventListener("keydown",u=>{if(u.target&&u.target.tagName==="INPUT")return;let M=u.key.toLowerCase();if(M==="e"){h.overlay==="inv"?Be():!h.overlay&&pn("inv"),u.preventDefault();return}if(h.overlay!=="dead"&&!(h.overlay==="ask"||h.overlay==="quest")){if(M==="escape"&&h.overlay){h.overlay==="quiz"?(St.ov.hidden=!0,St.ov.innerHTML="",h.overlay=null):Be();return}if(!h.overlay){if(M==="shift"&&h.ride){Dr();return}h.keys[M]=!0,u.code==="Space"&&(h.keys[" "]=!0,u.preventDefault()),M>="1"&&M<="9"&&(h.sel=+M-1,k()),M==="f"&&Zf(),M==="v"&&$f(),M==="m"&&pn("map"),M==="k"&&pn("ach"),M==="j"&&pn("quests")}}}),addEventListener("keyup",u=>{h.keys[u.key.toLowerCase()]=!1,u.code==="Space"&&(h.keys[" "]=!1)}),addEventListener("blur",()=>{h.keys={},Wn()}),pt.addEventListener("mousedown",u=>{if(!(h.touch||h.overlay)){if(document.pointerLockElement!==pt){pt.requestPointerLock&&pt.requestPointerLock();return}if(u.button===0){let M=xn("center");if(M){Er(M);return}h.mining.active=!0,h.mining.src="center"}if(u.button===2){let M=xn("center");if(M&&M.kind==="vehicle"){Uc(M.veh);return}Ir(Qn("center")),h.placeRepeat=.3,h.rightHeld=!0}}}),addEventListener("mouseup",u=>{u.button===0&&Wn(),u.button===2&&(h.rightHeld=!1)}),pt.addEventListener("contextmenu",u=>u.preventDefault()),addEventListener("mousemove",u=>{document.pointerLockElement===pt&&(h.yaw-=u.movementX*.0024,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-u.movementY*.0024)))}),addEventListener("wheel",u=>{h.overlay||h.touch||(h.sel=(h.sel+(u.deltaY>0?1:8))%9,k())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{St.root.classList.toggle("locked",document.pointerLockElement===pt)});let Nr=new Map;function hg(u){h.touch!==u&&(h.touch=u,St.root.classList.toggle("touch",u),document.body.classList.toggle("is-touch",u))}St.root.classList.toggle("touch",h.touch),document.body.classList.toggle("is-touch",h.touch),pt.addEventListener("pointerdown",u=>{if(u.pointerType!=="touch"||(hg(!0),h.overlay))return;if(u.preventDefault(),u.clientX<innerWidth*.4&&u.clientY>innerHeight*.35&&!h.joy.active){h.joy={x:0,y:0,active:!0,id:u.pointerId,ox:u.clientX,oy:u.clientY},St.joy.style.transform=`translate(${u.clientX-60}px, ${u.clientY-60}px)`,St.joy.hidden=!1,St.knob.style.transform="translate(0px,0px)",Nr.set(u.pointerId,{kind:"joy"});return}let M={kind:"look",x:u.clientX,y:u.clientY,sx:u.clientX,sy:u.clientY,t0:performance.now(),drag:!1,hold:!1};M.timer=setTimeout(()=>{if(M.drag)return;let R=xn("screen",M.x,M.y);if(R&&R.kind==="vehicle"){Fc(R.veh),M.vehHit=!0;return}M.hold=!0,h.mining.active=!0,h.mining.src="screen",h.mining.sx=M.x,h.mining.sy=M.y},280),Nr.set(u.pointerId,M),h.touchPress=M},{passive:!1}),addEventListener("pointermove",u=>{let M=Nr.get(u.pointerId);if(!M)return;if(M.kind==="joy"){let D=u.clientX-h.joy.ox,X=u.clientY-h.joy.oy,rt=Math.hypot(D,X),ft=55;rt>ft&&(D*=ft/rt,X*=ft/rt),h.joy.x=D/ft,h.joy.y=X/ft,St.knob.style.transform=`translate(${D}px,${X}px)`;return}let R=u.clientX-M.x,I=u.clientY-M.y;M.x=u.clientX,M.y=u.clientY,!M.drag&&Math.hypot(M.x-M.sx,M.y-M.sy)>12&&(M.drag=!0,clearTimeout(M.timer),M.hold&&(Wn(),M.hold=!1)),M.drag?(h.yaw-=R*.0055,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-I*.0055))):M.hold&&(h.mining.sx=M.x,h.mining.sy=M.y)});let nd=u=>{let M=Nr.get(u.pointerId);if(M){if(Nr.delete(u.pointerId),h.touchPress===M&&(h.touchPress=null),M.kind==="joy"){h.joy={x:0,y:0,active:!1},St.joy.hidden=!0;return}if(clearTimeout(M.timer),M.hold)Wn();else if(!M.drag&&performance.now()-M.t0<280&&!h.overlay){let R=xn("screen",M.x,M.y);R&&R.kind==="vehicle"?Uc(R.veh):R?Er(R):Ir(Qn("screen",M.x,M.y))}}};addEventListener("pointerup",nd),addEventListener("pointercancel",nd);let id=(u,M,R)=>{u.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation(),M()}),u.addEventListener("pointerup",R),u.addEventListener("pointercancel",R),u.addEventListener("pointerleave",R)};id(St.bJump,()=>{h.jumpHeld=!0},()=>{h.jumpHeld=!1}),id(St.bDown,()=>{h.downHeld=!0},()=>{h.downHeld=!1}),St.bFly.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),Zf()}),St.bPlace.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),Ir(Qn("center"))}),document.addEventListener("touchmove",u=>{u.target.closest(".scroll, .panel")||u.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(u=>document.addEventListener(u,M=>M.preventDefault(),{passive:!1})),St.start.hidden=!1,St.go.onclick=()=>{St.start.hidden=!0,h.started=!0,h.paused=!1,St.root.classList.add("started"),!h.touch&&pt.requestPointerLock&&pt.requestPointerLock()};async function An(u){if(h.resetting)return;h.ride&&h.ride.veh&&(h.ride.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},h.ride.veh.yaw=h.ride.yaw);let M={hw_meta:{v:1,seed:x,time:h.time,build:Rc},hw_player:{dims:Object.assign({},h.dimPos,{[e]:{x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw}}),x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,pitch:h.pitch,fly:h.fly,sel:h.sel,hp:O.hp,bed:h.bed,armor:h.armor,armorDur:h.armorDur,horse:h.horseMob&&!h.horseMob.gone?{x:h.horseMob.p.x,y:h.horseMob.p.y,z:h.horseMob.p.z,saddled:!!h.horseMob.saddled}:h.horse},hw_inventory:Do(S),hw_coins:Tm(C),[i("hw_furnaces")]:q,[i("hw_chests")]:Object.fromEntries(Object.entries(Z).map(([R,I])=>[R,Do(I)])),[i("hw_crops")]:nt,hw_quests:st,hw_portal_claimed:K.slice(-200),hw_ach:N,hw_story:A,[i("hw_vehicles")]:h.vehicles.map(R=>({kind:R.kind,x:R.p.x,y:R.p.y,z:R.p.z,yaw:R.yaw,wy:R.y,st:R.st?{x:R.st.x,y:R.st.y,z:R.st.z,shape:R.st.shape,from:R.st.from,s:R.st.s}:null}))};z.dirty&&(u||Date.now()-(h.mapSavedAt||0)>3e4)&&(M[i("hw_map")]=z.serialize(),h.mapSavedAt=Date.now());for(let R of h.dirty){let I=E.get(R);I&&(M[s+R]=Ju(I))}h.dirty.clear(),h.dirtyMeta=!1;try{await tf(M),h.lastSave=Date.now()}catch(R){console.warn("save failed",R)}}setInterval(()=>{h.started&&An()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&An(!0)}),addEventListener("pagehide",()=>{h.started&&An(!0)}),h.stats={mined:0,placed:0};function sd(){let u=innerWidth,M=innerHeight;wt.setSize(u,M,!1),W.aspect=u/M,W.updateProjectionMatrix()}addEventListener("resize",sd),sd(),Dn(),k(),ys(),Xe(),t.creative&&(Yi("#coinpill").hidden=!0,Yi("#modebadge").hidden=!1,St.btnShop.hidden=!0,St.hearts.hidden=!0),(Array.isArray(g.vehs)?g.vehs:[]).forEach(u=>{u&&(u.kind==="boat"||u.kind==="minecart"&&u.st)&&Nc(u.kind,u,u.yaw||0,u.kind==="boat"?{y:u.wy}:{st:Object.assign({v:0,lastIn:0},u.st)})}),$i(),setInterval($i,6e4),Gn(),e==="shadow"&&(ye("shadow"),setTimeout(()=>It("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",u=>{u.persisted&&Gn()});let rd=performance.now(),Qo=0,Gc=0,ug=new ce("#EFEBDD"),fg=new ce("#22302F"),dg=new ce("#E6B48C");function od(u){requestAnimationFrame(od);let M=(u-rd)/1e3;rd=u;let R=Math.min(.05,M);h.frames.push(M*1e3),h.frames.length>4e3&&h.frames.shift(),at.update(h.p.x,h.p.z);let I=at.ready(h.p.x,h.p.z);if(h.auto&&xg(R),h.started&&!h.overlay&&I&&mg(R),h.started&&I&&!h.travelling){let he=f.get(at.get(h.p.x,h.p.y+.2,h.p.z));he&&he.interact==="shadow_portal"?!h.portalLock&&t.portals&&(h.portalT=(h.portalT||0)+R,h.portalT>1&&ng(e==="shadow"?"overworld":"shadow")):(h.portalLock=!1,h.portalT=0)}h.started&&!h.dead&&Vf(O,R)&&(ys(),h.dirtyMeta=!0),h.time=(h.time+R/Nb)%1;let D=h.time*Math.PI*2,X=Math.sin(D),rt=e==="shadow"?.42:Math.min(1,Math.max(0,(X+.12)/.42));yt.copy(fg).lerp(ug,rt);let ft=Math.max(0,1-Math.abs(X)/.3)*(rt>.05?1:.4);if(yt.lerp(dg,ft*.55),e==="shadow"&&yt.set("#1C2620"),!(t.creative&&_s("hw_weather","on")==="off")?Rf(h.weather,R):h.weather.level=0,h.ambT=(h.ambT||0)+R,h.ambT>1){h.ambT=0;let he=Math.floor(h.p.x),Vt=Math.floor(h.p.z),jt=!1;for(let Le=2;Le<14&&!jt;Le++)f.flat.opaque[at.get(he,Math.floor(h.p.y)+Le,Vt)]&&(jt=!0);h.underground=jt&&h.p.y<L.height(he,Vt)-4,h.biome=L.biomeOf(he,Vt);let be=Ef({day:rt,underground:h.underground});be!==h.musicScene&&(h.musicScene=be,Sf(Tf[be]))}let Mt=h.underground||e==="shadow"?null:If(h.biome,h.weather),Gt=Mt?h.weather.level:0;Gt&&yt.lerp(h.rainSky||(h.rainSky=new ce("#8E9590")),.45*Gt),Et(R,W.position,Mt),wf(Mt==="rain"?Gt:0),gs(h.overlay==="quiz"||h.overlay==="ask"||h.overlay==="quest"),kt.uniforms.uDay.value=rt*(1-.3*Gt),kt.uniforms.uFog.value.set(...pg(yt));let ie=Jo();h.eyeOff*=Math.pow(5e-4,R);let ne=Lc();if(h.view==="tp"){let he=yr(ie,{x:-ne.x,y:-ne.y,z:-ne.z},4,Hn,jt=>f.flat.opaque[jt]===1),Vt=he?Math.max(.4,he.dist-.25):4;W.position.set(ie.x-ne.x*Vt,ie.y-ne.y*Vt,ie.z-ne.z*Vt)}else W.position.set(ie.x,ie.y,ie.z);W.rotation.set(h.pitch,h.yaw,0);let Pe=W.far*.8;if(We.position.set(W.position.x+Math.cos(D)*Pe,W.position.y+Math.sin(D)*Pe,W.position.z+.25*Pe),We.scale.setScalar(Pe*.14),we.position.set(W.position.x-Math.cos(D)*Pe,W.position.y-Math.sin(D)*Pe,W.position.z-.25*Pe),we.scale.setScalar(Pe*.1),We.visible=we.visible=e!=="shadow",Tt.visible=h.view==="tp",Tt.visible){Tt.position.set(h.p.x,h.p.y+(h.ride?z0[h.ride.kind]:0),h.p.z),Tt.rotation.y=h.yaw;let he=Math.hypot(h.v.x,h.v.z),Vt=Math.sin(u/120)*Math.min(1,he/4)*.7;dt.rotation.x=Vt,Lt.rotation.x=-Vt,Kt.rotation.x=-Vt,Ut.rotation.x=Vt;let jt=.35+.65*rt;Tt.children.forEach(be=>be.material.color.copy(be.userData.base).multiplyScalar(jt))}for(let he in Rt)Rt[he].color.setScalar(.4+.6*rt);jf.color.setScalar(.5+.5*rt);for(let he in Pr)Pr[he].color.copy(Pr[he].userData.base).multiplyScalar(.35+.65*rt);h.ride&&h.ride.obj&&(h.ride.obj.position.set(h.p.x,h.p.y,h.p.z),h.ride.obj.rotation.y=h.ride.yaw,h.ride.obj.rotation.x=h.ride.pitch||0);let Re=h.started&&!h.overlay?h.mining.active&&h.mining.src==="screen"?Qn("screen",h.mining.sx,h.mining.sy):Qn("center"):null;if(Re){re.visible=!0;let he=Dc(Re.n);if(he){let Vt=1,jt=1,be=1,Le=0,$e=0,Xn=0;for(let Os of he)Vt=Math.min(Vt,Os[0]),jt=Math.min(jt,Os[1]),be=Math.min(be,Os[2]),Le=Math.max(Le,Os[3]),$e=Math.max($e,Os[4]),Xn=Math.max(Xn,Os[5]);re.scale.set(Le-Vt,$e-jt,Xn-be),re.position.set(Re.x+(Vt+Le)/2,Re.y+(jt+$e)/2,Re.z+(be+Xn)/2)}else re.scale.set(1,1,1),re.position.set(Re.x+.5,Re.y+.5,Re.z+.5)}else re.visible=!1;let tn=h.touchPress;if($0(!h.started||h.overlay||h.mining.active?null:h.touch?tn&&!tn.drag&&!tn.hold?Qn("screen",tn.x,tn.y):null:Re),h.mining.active&&Re){let he=Re.x+","+Re.y+","+Re.z;he!==h.mining.k&&(h.mining.k=he,h.mining.t=0),h.mining.t+=R;let Vt=t.creative?f.get(Re.n).hardness<0?1/0:t.breakTime:Ac(f.get(Re.n),Kf()).time;if(Vt===1/0)se.visible=!1,h.mining.warned||(It(f.name(Re.n)+"\u6316\u4E0D\u52D5"),h.mining.warned=!0);else{h.mining.tick=(h.mining.tick||0)+R,h.mining.tick>.25&&(h.mining.tick=0,un("hit",wr(f.get(Re.n))));let jt=h.mining.t/Vt;se.visible=!0,se.position.copy(re.position),se.scale.copy(re.scale),se.material.map=Zt[Math.min(3,Math.floor(jt*4))],jt>=1&&(X0(Re),h.mining.k="",h.mining.t=0,se.visible=!1)}}else se.visible=!1,h.mining.active||(h.mining.warned=!1);if(h.rightHeld&&!h.overlay&&(h.placeRepeat-=R,h.placeRepeat<=0&&(Ir(Qn("center")),h.placeRepeat=.25)),gg(R),h.fish){let he=Ru(h.fish,R),Vt=S.slots[h.sel];!Vt||Vt.id!=="fishing_rod"||Math.hypot(h.p.x-h.fish.at.x,h.p.z-h.fish.at.z)>16?zc():(he==="bite"?(It("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),un("pickup")):he==="escape"&&It("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),Bc.position.set(h.fish.at.x,h.fish.at.y-.05+(h.fish.phase==="bite"?-.18:Math.sin(u/400)*.03),h.fish.at.z))}if(h.netT=(h.netT||0)+R,h.netT>.25&&(h.netT=0,B.sendState({x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,dim:e,ride:h.ride?h.ride.kind:null})),h.started){h.lookAcc=(h.lookAcc||0)+Math.min(1,Math.abs(h.yaw-(h.lastYaw??h.yaw))+Math.abs(h.pitch-(h.lastPitch??h.pitch))),h.lastYaw=h.yaw,h.lastPitch=h.pitch;let he=Math.hypot(h.p.x-(h.lastPx??h.p.x),h.p.z-(h.lastPz??h.p.z));he<2&&(h.walkAcc=(h.walkAcc||0)+he),h.lastPx=h.p.x,h.lastPz=h.p.z,h.storyT=(h.storyT||0)+R,h.storyT>.5&&(h.storyT=0,ag())}if(h.objTarget&&!St.objArrow.hidden){let he=h.objTarget,Vt=Math.atan2(-(he.x-h.p.x),-(he.z-h.p.z))-h.yaw;St.objArrow.style.transform="rotate("+-Vt+"rad)"}if(h.mapT=(h.mapT||0)+R,h.mapT>.3&&(h.mapT=0,z.scan(at,h.mapDirty),jo&&tg()),h.cropT=(h.cropT||0)+R,h.cropT>2){h.cropT=0;let he=Date.now();for(let Vt in nt){let[jt,be,Le]=Vt.split(",").map(Number);if(!at.ready(jt,Le))continue;let $e=f.get(at.get(jt,be,Le));if(!$e||!$e.crop){delete nt[Vt];continue}let Xn=ff(nt[Vt].t,he,nt[Vt].wet);Xn>($e.stage|0)&&(at.set(jt,be,Le,f.num("wheat_"+Xn)),h.dirtyMeta=!0)}}Ln(h.overlay?0:R,rt,u),ig(h.overlay?0:R);for(let he in q){let Vt=q[he];Vt.jobs.length&&(Nf(Vt,R),h.dirtyMeta=!0,h.overlay==="furnace"&&he===ve&&(h.furnUi=(h.furnUi||0)+R)>.5&&(h.furnUi=0,dn()))}wt.render(gt,W),Qo+=M,Gc++,Qo>.5&&(St.dbg&&(St.dbg.textContent=`${Math.round(Gc/Qo)} fps \xB7 \u5340\u584A ${at.stats.loaded} \xB7 ${rm[L.biomeOf(Math.floor(h.p.x),Math.floor(h.p.z))]} \xB7 ${h.p.x.toFixed(1)}, ${h.p.y.toFixed(1)}, ${h.p.z.toFixed(1)}`),Qo=0,Gc=0),!I&&h.started?St.loading.hidden=!1:St.loading.hidden=!0}function pg(u){let M=u.getHexString();return[parseInt(M.slice(0,2),16)/255,parseInt(M.slice(2,4),16)/255,parseInt(M.slice(4,6),16)/255]}function mg(u){let M=h.keys,R=(M.d?1:0)-(M.a?1:0),I=(M.w?1:0)-(M.s?1:0);h.joy.active&&(R=h.joy.x,I=-h.joy.y);let D=Math.min(1,Math.hypot(R,I));if(D>0){let $e=Math.hypot(R,I);R=R/$e*D,I=I/$e*D}let X=-Math.sin(h.yaw),rt=-Math.cos(h.yaw),ft=Math.cos(h.yaw),ht=-Math.sin(h.yaw);if(h.ride&&h.ride.kind!=="horse"){J0(u,R,I,X,rt,ft,ht);return}let Mt=M.control||!h.fly&&M.shift||h.joy.active&&D>.92,Gt=Hn(h.p.x,h.p.y+.1,h.p.z),ie=Hn(h.p.x,h.p.y+1,h.p.z),ne=f.flat.liquid[Gt]===1||f.flat.liquid[ie]===1,Pe=h.fly?10:h.ride?8.5:ne?2.6:Mt?6.2:4.3,Re=(X*I+ft*R)*Pe,tn=(rt*I+ht*R)*Pe,he=M[" "]||h.jumpHeld,Vt=h.fly&&M.shift||h.downHeld;if(h.fly)h.v.x=Re,h.v.z=tn,h.v.y=((he?1:0)-(Vt?1:0))*8;else{let $e=h.onGround?14:5,Xn=1-Math.exp(-$e*u);h.v.x+=(Re-h.v.x)*Xn,h.v.z+=(tn-h.v.z)*Xn,ne?(h.v.y-=9*u,h.v.y<-3&&(h.v.y=-3),he&&(h.v.y=3.4)):f.flat.climb[Gt]||f.flat.climb[ie]?(h.v.y=he||I>.1?3.2:Vt?-3:Math.max(h.v.y-28*u,-1.5),h.fallTop=h.p.y):(h.v.y-=28*u,h.v.y<-40&&(h.v.y=-40),he&&h.onGround&&(h.v.y=h.ride?10.5:8.6,h.onGround=!1))}let jt=h.onGround,be=lc(h.p,h.v,u,ue,{canStep:!h.fly,grounded:h.onGround});if(h.onGround=be.onGround,be.stepped&&(h.eyeOff-=be.stepped),h.fallTop==null||h.fly||ne||h.onGround&&jt?h.fallTop=h.p.y:h.onGround||(h.fallTop=Math.max(h.fallTop,h.p.y)),h.onGround&&!jt){let $e=zf(h.fallTop-h.p.y,{water:ne,flying:h.fly});$e&&($o($e),It("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),h.fallTop=h.p.y}let Le=Math.hypot(h.v.x,h.v.z);h.onGround&&!h.fly&&Le>1&&(h.stepT=(h.stepT||0)+u*Le,h.stepT>1.8&&(h.stepT=0,un("step",wr(f.get(Hn(h.p.x,h.p.y-.5,h.p.z)))))),h.p.y<-20&&(h.p={x:Dt.x,y:Dt.y+1,z:Dt.z},h.v={x:0,y:0,z:0},h.fallTop=h.p.y)}function gg(u){let M=h.p.x,R=h.p.y+.9,I=h.p.z;for(let D=h.drops.length-1;D>=0;D--){let X=h.drops[D];X.age+=u;let rt=M-X.p.x,ft=R-X.p.y,ht=I-X.p.z,Mt=Math.hypot(rt,ft,ht);if(Mt<1.5&&X.age>.25&&wn(S,X.id,1,v)===0){gt.remove(X.s),h.drops.splice(D,1),h.dirtyMeta=!0,k(),un("pickup");continue}if(Mt<4.5&&X.age>.25?(X.v.x=rt/Mt*6,X.v.y=ft/Mt*6,X.v.z=ht/Mt*6,X.p.x+=X.v.x*u,X.p.y+=X.v.y*u,X.p.z+=X.v.z*u):(X.v.y-=18*u,X.v.x*=.9,X.v.z*=.9,lc(X.p,X.v,u,ue,{w:.25,h:.25})),X.age>300){gt.remove(X.s),h.drops.splice(D,1);continue}X.s.position.set(X.p.x,X.p.y+.2+Math.sin(X.age*3)*.06,X.p.z)}}h.auto=qf.get("auto")==="walk";let ad=0;function xg(u){h.started||St.go.click(),ad+=u,h.keys.w=!0,h.keys[" "]=ad%1.6<.15,h.yaw+=u*.08}window.HW={build:Rc,G:h,reg:f,inv:S,wallet:C,world:at,Inv:Vu,Aud:Af,Amb:Pf,chests:Z,crops:nt,Farm:Mf,clickSlot:de,MODE:n,RULE:t,switchMode:Pc,questState:st,tradesJson:p,spawnVillagers:Fe,terr:L,claimPortalRewards:Gn,portals:V,claimedIds:K,mobS:At,mobDefs:G,spawnMob:$t,hitMob:Er,mobAt:xn,surfaceY:Ft,health:O,hurt:$o,Health:Wf,furnaces:q,Smelt:Of,smeltList:ot,recipes:_,craftCtx:j,breakInfo:Ac,start(){St.go.click()},state(){return{pos:{...h.p},coins:C.coins,inv:Do(S),loaded:at.stats.loaded,stats:{...h.stats},overlay:h.overlay,fly:h.fly}},lookAt(u,M,R){let I=Jo(),D=u-I.x,X=M-I.y,rt=R-I.z;h.yaw=Math.atan2(-D,-rt),h.pitch=Math.atan2(X,Math.hypot(D,rt))},target(){let u=Qn("center");return u&&{x:u.x,y:u.y,z:u.z,n:u.n,face:u.face}},mine(u){u?(h.mining.active=!0,h.mining.src="center"):Wn()},use(){return Ir(Qn("center"))},key(u,M){h.keys[u]=M},open:pn,close:Be,save:An,spawn:Dt,dismount:Dr,Rail:Tu,ach:N,mapv:z,Fish:Lu,bump:ye,bank:$,net:B,story:A,Story:Yu,QJ:m,DIM:e,bossDamage:td,Shadow:Fu,hitVehicle:Fc,rideVehicle:Uc,ghostState:()=>({visible:Fs.visible,sy:Oc[0].scale.y,two:Oc[1].visible}),perf(){return{frames:h.frames.slice(),meshMs:at.stats.meshMs.slice(),genMs:at.stats.genMs.slice(),loaded:at.stats.loaded}},resetPerf(){h.frames.length=0,at.stats.meshMs.length=0,at.stats.genMs.length=0},info:()=>({calls:wt.info.render.calls,tris:wt.info.render.triangles,geos:wt.info.memory.geometries,objs:gt.children.length}),ready:()=>at.ready(h.p.x,h.p.z)},requestAnimationFrame(od)}function kb(){let n=Yi("#ui"),t=e=>n.querySelector(e);return qf.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Yi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Yi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),learnPill:t("#learnpill"),learnCnt:t("#learncnt"),learnBar:t("#learnbar"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Yi("#start"),go:Yi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}zb().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
